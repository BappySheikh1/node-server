// local module
const other = require('./other.js')


// const result =other.substract(5,4)
// console.log(result);

const http =require('http')
const url = require('url')
const fs = require('fs')

// const server = http.createServer((req,res)=>{
    
//     if(req.url === '/'){
//         res.writeHead(200, {'Content-type' : 'application/json'})
//         res.write(JSON.stringify("Mission ACC Node Mongo Course"))
//         res.end()
//     }

//     else if(req.url === '/contact'){
//         res.writeHead(200, {'Content-type' : 'text/html'})
//         res.write('<p>This is contact page</p>')
//         res.end()
//     }
//     if(req.url === '/about'){
//         res.writeHead(200, {'Content-type' : 'text/html'})
//         res.write('<p>This is about page</p>')
//         res.end()
//     }

//     console.log(req.url);
//     // res.end("hello node js")
// })

// const server = http.createServer((req,res)=>{
//     const address_url = "http://localhost:5000/contact?name=bappycountery=bangladesh"
//     const parse_url = url.parse(address_url,true)
//     // console.log(parse_url);
//     const queryObject =parse_url.query
//     console.log(queryObject);

// })

const server =http.createServer((req,res)=>{
    if(req.url = '/'){
        // fs.readFile('data.txt',(err,data)=>{
        //     // if(err){
        //     //     res.write('Failed To Read Data')
        //     // }
        //     // else{
        //     //     res.write(data)
        //     //     res.end()
        //     // }
           

        // })

        // const data = fs.readFileSync('data.txt')
        // res.write(data)
        // res.end()

        fs.writeFile('newData.txt', 'hello node js !!!',(err)=>{
            if(err){
                res.write('Data Failed to write')
                res.end()
            }else{
                res.write('data written successfully')
                res.end()
            }
        })
    }
})

const PORT = 5000
server.listen(PORT)

console.log(`Server keep running at ${PORT}`);