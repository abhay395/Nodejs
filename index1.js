const fs = require('fs')
require('dotenv').config()
const express= require('express');
const morgan = require('morgan')
const server = express();

const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const product = data.products;



// server.use((req,res,next)=>{
    //     console.log(new Date(),req.get('User-Agent'),req.method,req.ip,req.hostname)
    //     next()
    // })//application level middelvare
    
    server.use(morgan('default'))

server.use(express.json())
server.use(express.static(process.env.PUBLIC_DIR));

const auth = (req,res,next)=>{
    // console.log(req.query)
    if(req.body.password==='123'){
        next()
    }else{
        res.sendStatus(401)
    }
}

// server.use(auth) sabhi pe lagane ke liye



server.get('/auth/:id',(req,res)=>{
    // console.log(req.params)
    // console.log(req.query)
    res.json({type:'GET'})
})
server.post('/',auth,(req,res)=>{
    res.json({type:'POST'})
})
server.put('/',(req,res)=>{
    res.json({type:'PUT'})
})
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
})
server.patch('/',(req,res)=>{
    res.json({type:'PATCH'})
})



server.get('/',(req,res)=>{

    // res.sendStatus(404);

    // res.send('<h1>hello</h1>')
    // res.sendFile('/Users/Administrator/OneDrive/Desktop/NodjsRepeate/index.html')
    // res.json(product)
})


server.listen(process.env.PORT,()=>{
    console.log('server started')
})
