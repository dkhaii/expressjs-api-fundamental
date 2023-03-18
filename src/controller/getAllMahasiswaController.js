const fs = require('fs');

const getAllMahasiswaController = (req, res) => {
  const dataJson = fs.readFileSync('dataMahasiswa.json');
  const dataMahasiswa = JSON.parse(dataJson);

  if (dataMahasiswa.length <= 0) {
    return res.status(404).send({
      status: 'fail',
      message: 'belum ada data mahasiswa',
    });
  }

  return res.status(200).send({
    status: 'success',
    data: {
      mahasiswa: dataMahasiswa,
    },
  });
};

module.exports = getAllMahasiswaController;
