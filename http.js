const http = require('http');

const data = {age:5}
const server = http.createServer((req,resp)=>{
    console.log('Server Started')
    resp.setHeader("Content-Type",'application/json')
    resp.write('<h1>Hello</h1>')
    resp.end(JSON.stringify(data))
})

server.listen(8000)