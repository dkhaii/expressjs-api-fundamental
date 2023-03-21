const fs = require('fs');

const getAllMahasiswaController = (req, res) => {
  const dataJson = fs.readFileSync('dataMahasiswa.json');
  const dataMahasiswa = JSON.parse(dataJson);

  if (dataMahasiswa.length <= 0) {
    return res.status(404).send({
      status: 'fail',
      message: 'belum ada data mahasiswa',
      data: {
        mahasiswa: [],
      },
    });
  }

  const { name, univ } = req.query;

  console.log(name);

  let filteredData = dataMahasiswa;

  if (typeof name !== 'undefined') {
    filteredData = dataMahasiswa.filter(
      (mahasiswa) => mahasiswa.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  if (typeof univ !== 'undefined') {
    filteredData = dataMahasiswa.filter(
      (mahasiswa) => mahasiswa.university.toLowerCase().includes(univ.toLowerCase()),
    );
  }

  const mappedMahasiswa = filteredData.map((mahasiswa) => ({
    id: mahasiswa.id,
    name: mahasiswa.name,
    university: mahasiswa.university,
  }));

  return res.status(200).send({
    status: 'success',
    data: {
      mahasiswa: mappedMahasiswa,
    },
  });
};

module.exports = getAllMahasiswaController;
