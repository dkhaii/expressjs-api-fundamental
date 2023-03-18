const express = require('express');
const {
  getAllMahasiswaController,
  createMahasiswaController,
} = require('../controller');

const router = express.Router();

router.get('/', (request, response) => {
  response.send('hompage');
});

router.get('/mahasiswa', getAllMahasiswaController);
router.post('/mahasiswa', createMahasiswaController);

module.exports = router;
