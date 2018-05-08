/**
 * Factory for creating objects instead of {} or Object.create()
 * - for constructor diffirect objects of similar types
 * 
 */

 function createImage(name){
   if(name.match(/\.jpeg$/)){
     return new JpegImage(name);
   } else if(name.match(/\.gif$/)){
     return new GifImage(name);
   }
 }

 //the object types in the same module can be prevented from being exported to prevent direct instantiation and 
 // preventing exposin constructors of the tyeps

 // Factory using closers has conpasulation
function encapsulatedPersonFactory(name){
    const privateProperties = {};
    const person = {
      setName: name => {
        if(!name) throw new Error('must have name');
        privateProperties.name = name;
      },
      getName: () => {
        return privateProperties.name;
      }
    };
    person.setName(name);
    return person;
}

// code progiler with factory
// here the factory function is based on the node environment
class Profiler {
  constructor(label){
    this.label = label;
    this.lastTime = null;

  }

  state(){
    this.lastTime = process.hrtime();
  }

  end(){
    const diff = process.hrtime(this.lastTime);
    console.log(`Timer "${this.label}" took ${diff[0]} seconds and ${diff[1]} nanoseconds`);
  }
}
module.exports = function(label){
  if(process.env.NODE_ENV === 'development'){
    return new Profiler(label);
  } else if(process.env.NODE_ENV === 'production') {
    return {
      start: function() {},
      end: function(){}
    }
  } else {
    throw new Error('Must et node env');
  }
};


/**
 * Composable factory functions
 * - similar to abstract factory, but no abstract types in JS (favor componsition  over abstraction anyways)
 * base Character: life points, position, name
 * - want types of characters: Mover, Slasher, Shooter
 * - later want to add more on top of exiting (Runner, Sniper, etc)
 */

/**
 * Real world examples of factories
 * - reducers in Redux
 * - npm: dnode -> RPC system package, 
 * - npm: Restify: rest framework for creating new instances of a server with createServer() factory
 * 
 * 
 */