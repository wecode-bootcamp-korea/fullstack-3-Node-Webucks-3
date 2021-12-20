const http = require('http');
const express = require('express');
const { categories } = require('./categories');
const { products, createProducts, updateProducts, deleteProducts } = require('./products');
const { productsDetail } = require('./productsDetail');
const PORT = 8000;

const app = express();
app.use(express.json());

app.get('/categories', categories);
app.get('/products', products);
app.get('/products/2', productsDetail);
app.post('/products', createProducts);
app.put('/products', updateProducts);
app.delete('/products', deleteProducts);

const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`server is listening on PORT ${PORT}`);
});
