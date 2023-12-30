
const express= require('express');
const server = express();

// const index = fs.readFileSync('index.html','utf-8');
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const product = data.products;



server.use(express.json())

const ProductController= require('./controller/product.js')

// Create Post /products
server.post('/products',ProductController.createProduct)

// Products 
// API ROOT , base URL , example - google.com/api/v2/
// Read GET /products
server.get('/products',ProductController.getAllProducts)
// Read GET /products/:id
server.get('/products/:id',ProductController.getProduct)

// update PUT /products/:id
server.put('/products/:id',ProductController.updateProduct)

// update PATCH /products/:id
server.patch('/products/:id',ProductController.replaceProduct)

// Delete DELETE /products/:id
server.delete('/products/:id',ProductController.deleteProduct)

server.listen(8080,()=>{
    console.log('server started')
})
