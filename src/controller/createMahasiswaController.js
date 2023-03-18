const { nanoid } = require('nanoid');
const fs = require('fs');

const createMahasiswaController = (req, res) => {
  const { name, phoneNumber, university } = req.body;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  if (name === '') {
    return res.status(400).send({
      status: 'fail',
      message: 'nama harus di isi!',
    });
  }

  if (phoneNumber === '') {
    return res.status(400).send({
      status: 'fail',
      message: 'nomor telepon harus di isi!',
    });
  }

  const mahasiswa = {
    id,
    name,
    phoneNumber,
    university,
    createdAt,
    updatedAt,
  };

  let jsonFile = fs.readFileSync('dataMahasiswa.json');
  const dataMahasiswa = JSON.parse(jsonFile);

  dataMahasiswa.push(mahasiswa);

  jsonFile = JSON.stringify(dataMahasiswa);
  fs.writeFileSync('dataMahasiswa.json', jsonFile);

  const datas = JSON.parse(jsonFile);
  const isCreated = datas.filter((data) => data.id === id);

  if (isCreated) {
    return res.status(200).send({
      status: 'success',
      data: isCreated,
    });
  }
  return res.status(400).send({
    status: 'fail',
    message: 'gagal menambahkan data',
  });
};

module.exports = createMahasiswaController;
