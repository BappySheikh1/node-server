const events = require('events')
const eventEmitter = new events.EventEmitter()

// Creating an event
const chitkarDibo =()=>{
    console.log('koi beta ami darai achi !!');
}
// assign the handler into an event
eventEmitter.on('scream',chitkarDibo).chitkarDibo
// firing the event
eventEmitter.emit('scream')