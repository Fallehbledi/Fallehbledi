const express = require('express');
const {
  createEnrollement,
  deleteEnrollement,
  getEnrollements,
  updateEnrollement,
  getEnrollementsByExpert,
} = require('../controllers/enrollement.js');
const router = express.Router();

router.get('/', getEnrollements);
router.get('/:id', getEnrollementsByExpert);
router.post('/create', createEnrollement);
router.put('/update/:id', updateEnrollement);
router.post('/delete/:id', deleteEnrollement);

module.exports = router;
