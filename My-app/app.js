// app.js
const express = require('express');
const app = express();
const port = 3000;

// For parsing JSON bodies
app.use(express.json());

// Mount routes
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

// Default root path
app.get('/', (req, res) => {
  res.send('Hello from the main app route');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

