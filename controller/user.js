const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;
exports.getAlluserss = (req, res) => {
  res.json(users);
};
exports.getusers = (req, res) => {
  const id = +req.params.id;
  const data = users.find((p) => p.id === id);
  // console.log(data)
  res.json(data);
};
exports.createusers = (req, res) => {
  console.log(req.body);
  users.push(req.body);
//   console.log(users);
  res.status(201).json(req.body);
};

exports.updateusers = (req, res) => {
  const id = +req.params.id;
  const dataIndex = users.findIndex((p) => p.id === id);
  users.splice(dataIndex, 1, { id: id, ...req.body });
  // console.log(data)
  res.status(201).json({ users: "updated" });
};
exports.replaceusers = (req, res) => {
  const id = +req.params.id;
  const dataIndex = users.findIndex((p) => p.id === id);
  const oldusers = users[dataIndex];
  users.splice(dataIndex, 1, { ...oldusers, ...req.body });
  // console.log(oldusers)
  res.status(201).json({ users: "updated" });
};

exports.deleteusers = (req, res) => {
  const id = +req.params.id;
  const dataIndex = users.findIndex((p) => p.id === id);
  const oldusers = users[dataIndex];
  users.splice(dataIndex, 1);
  // console.log(data)
  res.status(201).json(oldusers);
};
