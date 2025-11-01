// routes/products.js
const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/productsController');

router.get('/', productsCtrl.getAllProducts);
router.get('/:id', productsCtrl.getProductById);
router.post('/', productsCtrl.createProduct);

module.exports = router;

