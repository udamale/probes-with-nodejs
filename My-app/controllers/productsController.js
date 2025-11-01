// controllers/productsController.js
exports.getAllProducts = (req, res) => {
  res.send('Get all products');
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  res.send(`Get product with id = ${id}`);
};

exports.createProduct = (req, res) => {
  res.send('Create a product');
};

