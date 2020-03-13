const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fire!!!!!!!'));

// Int event
myEmitter.emit('event');
myEmitter.emit('event');
