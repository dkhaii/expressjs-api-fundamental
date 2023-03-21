const fs = require('fs');

const getMahasiswaByIdController = (req, res) => {
  const reqBody = req.params;

  const dataJson = fs.readFileSync('dataMahasiswa.json');
  const dataMahasiswa = JSON.parse(dataJson);

  const mahasiswa = dataMahasiswa.filter((m) => m.id === reqBody.mahasiswaId)[0];

  if (!mahasiswa) {
    return res.status(404).send({
      status: 'fail',
      message: 'tidak ada data yang match',
    });
  }

  return res.status(200).send({
    status: 'success',
    data: {
      mahasiswa,
    },
  });
};

module.exports = getMahasiswaByIdController;
