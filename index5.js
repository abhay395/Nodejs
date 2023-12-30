const http = require('http')
const fs = require('fs')


const index=fs.Sync('index.html','utf-8')
const data=JSON.parse(fs.Sync('data.json','utf-8'))
const product = data.products
// console.log(product)
// const data  = {age:5}; 
const server = http.createServer((req,res)=>{
    console.log('server started')
    // console.log(req.url)


    if(req.url.startsWith('/product')){
        const id=req.url.split('/')[2]
        console.log(id)
        const prd= product.find(p=>p.id===(+id))
        console.log(prd)

        res.setHeader('Content-Type','text/html')
        const modifyindex = index.replace('**title**',prd.title).replace('**image**',prd.thumbnail).replace('**Price**',prd.price).replace('**Description**',prd.description)
        res.end(modifyindex);
        return;
        
    }
    switch(req.url){
        case '/':
            res.setHeader('Content-Type','text/html')
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type','application/json')
            res.end(JSON.stringify(data))
            break;
        case '/product' :
                res.setHeader('Content-Type','text/html')
                const modifyindex = index.replace('**title**',product.title).replace('**image**',product.thumbnail).replace('**Price**',product.price).replace('**Description**',product.description)
                res.end(modifyindex);
                break;
        default:
                    res.writeHead(404,'NOT Found')
                    res.end()
    }

    // res.end(JSON.stringify(data))
   

})

server.listen(8080)