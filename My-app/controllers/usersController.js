// controllers/usersController.js
exports.getAllUsers = (req, res) => {
  res.send('Get all users');
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  res.send(`Get user with id = ${id}`);
};

exports.createUser = (req, res) => {
  res.send('Create a user');
};

