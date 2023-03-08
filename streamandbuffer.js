const fs = require('fs')


const readStream = fs.createReadStream('./data.txt')

readStream.on('data',(chunk)=>{
    console.log('............');
    console.log(chunk);
})

readStream.on('open', ()=>{
    console.log('stream is open');
})

setTimeout(()=>{
    readStream.pause('pause')
    console.log('streaming is pause');
},15)

setTimeout(()=>{
    readStream.resume('pause')
    console.log('streaming is resume now');
},8000)