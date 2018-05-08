/**
 * new pattern gaining traction since it makes use of Promise objects
 * 
 * Promise(exec, )
 * - exec = executor function that is esponsible for exposing the resolve/reject functions so they
 *  can be invoked to change internal state of objects
 * - advantage is that ONLY the new Promise() constructor has access to resolve/reject once the promise is constructed
 *  Ex: let kk = new Promise() -> kk only has access to resolve and reject
 * - this Promise is a revlealing constructor pattern
 * 
 */

 //read-only event emitter example using revealing constructor pattern (emitter thant 

 //import the core EventEmitter class (not the general use EventEmitter)
const EventEmitter = require('events');
//extend the core with ReadOnlyEventEmitter
class ReadOnlyEventEmitter extends EventEmitter{
  //pass to constructor an executor function
  constructor(executor){
    super();
    //save a backup of the emit function then remove the original emit that we extended
    // this prevents the actual emit function from being invoked as a public API,a nd now only the executor can invoke as a callback
    const emit = this.emit.bind(this);
    this.emit = undefined;
    executor(emit);
  }
}
//can import: module.exports = ReadOnlyEventEmitter

//assume imported in separate file
const Roee = ReadOnlyEventEmitter;
const ticker = new Roee((emit) => {
  let tickCount = 0;
  setInterval(() => emit('tick', tickCount++), 1000);
});

//assume exporting the actual type: module.exports = ticker
//assume importing the ticker
ticker.on('tick', (tickerCount) => console.log(tickCount, 'TICK'));
//ticker.emit() <- will fail!!!

