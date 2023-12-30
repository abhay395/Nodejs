require("dotenv").config();
const mongoose = require("mongoose");
// const { Task } = require("../model/Task.models");
const { Schema } = mongoose;
const express = require('express');
const server = express();

const taskShcema = new Schema({
  title: String,
  status: Boolean,
  date: { type: Date, default: Date.now()},
});

const Task = mongoose.model("Task", taskShcema);
server.use(express.json());

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/todolist");
  console.log("database connected");
}

server.post('/task',async (req,res)=>{
    let task  = new Task(req.body);
    // task.title = "Shopping"
    // task.status = true;
    // task.date = new Date()
    try {
        const data = await task.save()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
server.get('/tasks', async(req,res)=>{
    
    try {
        const data = await Task.find()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
server.get('/task/:name',async (req,res)=>{
    const name = req.params.name
    try {
        const data = await Task.findOne({title:name})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

server.put('/task/:name',async (req,res)=>{
    const name = req.params.name
    try {
        const data = await Task.findOneAndReplace({title:name},req.body,{new:true,returnDocument:"after"})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
server.patch('/task/:name',async (req,res)=>{
    const name = req.params.name
    try {
        const data = await Task.findOneAndUpdate({title:name},req.body,{new:true,returnDocument:"after"})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
server.delete('/task/:name',async (req,res)=>{
    const name = req.params.name
    try {
        const data = await Task.findOneAndDelete({title:name})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
server.listen(8000, () => {
  console.log("server started");
});
