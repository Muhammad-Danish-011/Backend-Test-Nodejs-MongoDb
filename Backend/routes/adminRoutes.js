const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/users', adminController.getUsers); 
router.get('/user/:id', adminController.getUserById); 
router.put('/user/:id', adminController.updateUser); 
router.delete('/user/:id', adminController.deleteUser); 

router.get('/', (req, res) => {
  res.send('Admin Dashboard');
});

router.post('/add-category', adminController.addCategory);

router.get('/dashboard', (req, res) => {
  res.send('Welcome to the admin dashboard');
});

router.post('/users', adminController.createUser);
router.put('/users/:userId', adminController.updateUser);
router.delete('/users/:userId', adminController.deleteUser);

module.exports = router;
