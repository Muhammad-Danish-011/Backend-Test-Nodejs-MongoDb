const express = require('express');
const { createUser, getUserHistory, saveResult } = require('../controllers/userController');

const router = express.Router();

router.post('/users', createUser);            
router.get('/history', getUserHistory);       
router.post('/result', saveResult);  

module.exports = router;
