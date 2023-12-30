const fs = require("fs");
const path = require('path') 
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data.json'), 'utf-8'));
const product = data.products;
exports.getAllProducts = (req, res) => {
  res.json(product);
};
exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const data = product.find((p) => p.id === id);
  // console.log(data)
  res.json(data);
};
exports.createProduct = (req, res) => {
  console.log(req.body);
  product.push(req.body);
  console.log(product);
  res.status(201).json(req.body);
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const dataIndex = product.findIndex((p) => p.id === id);
  product.splice(dataIndex, 1, { id: id, ...req.body });
  // console.log(data)
  res.status(201).json({ Product: "updated" });
};
exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const dataIndex = product.findIndex((p) => p.id === id);
  const oldProduct = product[dataIndex];
  product.splice(dataIndex, 1, { ...oldProduct, ...req.body });
  // console.log(oldProduct)
  res.status(201).json({ Product: "updated" });
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const dataIndex = product.findIndex((p) => p.id === id);
  const oldProduct = product[dataIndex];
  product.splice(dataIndex, 1);
  // console.log(data)
  res.status(201).json(oldProduct);
};
