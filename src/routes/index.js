const express = require('express');
const {
  getAllMahasiswaController,
  createMahasiswaController,
  getMahasiswaByIdController,
} = require('../controller');

const router = express.Router();

router.get('/', (request, response) => {
  response.send('hompage');
});

router.get('/mahasiswa', getAllMahasiswaController);
router.post('/mahasiswa', createMahasiswaController);
router.get('/mahasiswa/:mahasiswaId', getMahasiswaByIdController);

module.exports = router;
