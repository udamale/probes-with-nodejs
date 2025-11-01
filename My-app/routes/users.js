// routes/users.js
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/usersController');

router.get('/', usersCtrl.getAllUsers);
router.get('/:id', usersCtrl.getUserById);
router.post('/', usersCtrl.createUser);

module.exports = router;

