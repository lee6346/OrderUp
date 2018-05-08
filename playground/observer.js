


/**
 * EventEmitter  (Publisher)
 * - built-in core for creating our own observable patterns
 * //'events.js' module
 * module.exports = {
 *  EventEmitter: EventEmitter
 * ..
 * }
 * EventEmitter instance methods
 *  - listern functions = subscribers, the following methods subscribe subscribers to this publisher
 *  .on(event, listenerFunction): when event (type string) is emitteed, invoke the callback listner
 *   .once(event, listenerFunction): invokes callback only once then removes it from the EventEmitter ()
 *  
 * - to emit an event
 *  .emit(evet, [arg1], [...]): produce new event with additional args to be passed to the listener callbacks (if callbacks have params)
 * 
 * - all event emitter emthods at the end return 'this' (its instance) so you can chain emitting, registering, etc
 * 
 * - adding, removing listeer callbacks
 *  
 */
const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

// creates/returns a new event emitter for emitting matches found to files from regex
function findPattern(files, regex){
  const emitter = new EventEmitter();
  files.forEach(file => {
    fs.readFile(file, 'utf-8', (err, content) => {
      if(err){
        return emitter.emit('error', err);
      }
      emitter.emit('fileread', file);
      let match;
      if(match = content.match(regex)){
        match.forEach(elem => emitter.emit('found', file, elem));
      }
    });
  });
  return emitter;
}
testFindPattern = () => {
  findPattern(['fileA.text', 'fileB.json'], /hello \w+/g)
    .on('fileread', file => console.log(file + ' was read'))
    .on('found', (file, match) => console.log('matches ' + match + 'in file ' + file))
    .on('error', err => console.log('error'));
}

//creating custimg objservable class/object types
class FindPatternClass extends EventEmitter {
  constructor(regex){
    super();
    this.regex = regex;
    this.files = [];
  }

  addFile(file){
    this.files.push(file);
    return this;
  }
  find () {
    this.files.forEach( file => {
    fs.readFile(file, 'utf8', (err, content) => {
    if (err) {
    return this.emit('error', err);
    }
    this.emit('fileread', file);
    let match = null;
    if (match = content.match(this.regex)) {
    match.forEach(elem => this.emit('found', file, elem));
    }
    });
    });
    return this;
    }
}

testFindPatternClass = () => {
  const findPatternObject = new FindPatternClass(/hello \w+/);
  findPatternObject
    .addFile('file1.txt')
    .addFile('fileB.json')
    .find()
    .on('found', () => {});
}

/**
 * Observer pattern for node
 * - 
 * 
 */

let pagers = [
  { code: '123', beep: function(){console.log('beep')} },
  { code: '234', beep: function(){console.log('beep')}},
  { code: '123', beep: function(){console.log('beep')}}
];

//simple encapsulated event emitter
function dispatchAlert(pagers){
  const emitter = new EventEmitter();

  if(pagers.length === 0){
    emitter.emit('error', 'no pagers available');
  }

  function checkPagers(){
    pagers.forEach(pager => {
      if(pager.code === '123'){
        emitter.emit('alert', pager);
      }
    });
  }
  process.nextTick(checkPagers);
  return emitter;
}

//decorated event emitter
class PagerDispatch extends EventEmitter {
  constructor(hospital){
    super();
    this.hospital = hospital;
    this.pagers = [];
  }
  //dispatch.addPager(pager).addPager(pager)..
  addPager(pager){
    this.pagers.push(pager);
    return this;
  }

  findPagers(){
      process.nextTick(() => {
        this.pagers.forEach(pager => {
          if(pager.code === '123'){
            this.emit('alert', pager.beep);
          }
        })
      })
      return this;
  }

}

dispatchAlert(pagers);
