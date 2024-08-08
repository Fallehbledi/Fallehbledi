const express = require('express');
const signInExpert = require('../controllers/Auth/ExpertSignIn');
const { Register, GetExperts } = require('../controllers/Auth/ExpertController');
const router = express.Router();

router.get('/', GetExperts);
// router.get('/:id', GetOneExpert);
router.post('/signup', Register);
router.post('/signin', signInExpert);

module.exports = router;
