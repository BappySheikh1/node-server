// local module
const other = require('./other.js')


// const result =other.substract(5,4)
// console.log(result);

const http =require('http')

const server = http.createServer((req,res)=>{
    
    if(req.url === '/'){
        res.writeHead(200, {'Content-type' : 'application/json'})
        res.write(JSON.stringify("Mission ACC Node Mongo Course"))
        res.end()
    }

    else if(req.url === '/contact'){
        res.writeHead(200, {'Content-type' : 'text/html'})
        res.write('<p>This is contact page</p>')
        res.end()
    }
    if(req.url === '/about'){
        res.writeHead(200, {'Content-type' : 'text/html'})
        res.write('<p>This is about page</p>')
        res.end()
    }

    console.log(req.url);
    // res.end("hello node js")
})
const PORT = 5000
server.listen(PORT)

console.log(`Server keep running at ${PORT}`);