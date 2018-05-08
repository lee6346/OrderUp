//revealing module pattern
const revealingMod = (() => {
  const prop1 = 'x';
  const func1 = () => { let k = 'y '};
})();

//module loader imitating require() with loadModule()
function loadModule(filename, module, require){
  //module src is wrapped in a string, when calling this function it uses eval to evaluate as a js code
  const wrappedSrc = `(function(module, exports, require){
    ${fs.readFileSync(filename, 'utf8')}})(module, module.exports, require);`;
  eval(wrappedSrc);
}

/**
 * 
 * Globals
 * - avoid poluting global with custom properties
 * - you can access global properties that are buitl in
 * 
 */

 //module.exports
 module.exports = {
  k: 'k',
 };

 //exports
exports.mod = {
  k: 'k'
}

//require() is a synchronous function, thus all requie() is called during app load, then cached to prevent it
// from delaying the app itself


/**
 * resolving modules
 * - the calling module uses the same called module cached
 * - if two separate calling modules use the same called module, they will each use their own instance
 * 1) each caller will get a new instance
 * module.exports = new Object();
 * 2) each caller will get the same instance
 * obj = new Object();
 * module.exports = obj;
 * 
 */


 /**
  * 
  * Module definition patterns
  * - different ways to export and define modules for different cases
  * - benefits vary for information hiding, extensibility, code reuse, etc
  * 
  * 
  */

  //named exports: for exposing public API
  // the file-module object becomes a container/namespace for a set of related functionality
  // later we consume with .
  // most common way modules are created
 
  // logger.js
  exports.info = (message) => {

  };

  exports.verbose = (message) => {

  };
  //man.js
  // logger = require('./logger');
  // const info = logger.info(msg);

//function exports: reassign module.exports to a function
// this allos the entire module to have a single api 
// used for modules with small surface area (simple single modules)
//can even create extensions fo the function itself, where extended fucntiosn overrite the original
// while this may seem limiting modules to single functions, it encourages module dsign patters of SRP
//logger.js
moduole.exports = (message) => {
  //do something
}
module.exports.extension = (message) => {
  //do something else
}

//.main.js
//factory = require('/logger');
//factory(msg)
//factory.extension(msg);




// Exporting a constructor
// exports a function which is a construction function for creating new instances
// ex: mongoose import User model = constructor export
//NOTE: same applies for ES6 classes
// allows creating new instaces whil extending the prototype the same way extend function modules

function User(name){
  this.name = name;
}

User.prototype.attach = function(damage){
  return damage;
};
module.exports = Logger;

//main.js
//const User = require('./User');
//const firstUser = new User('james');
// firstUser.attach(100);

// NOTE: constructor expoerts can be used for factories
function Ball(name){
  if(!(this instanceof Ball)){
    return new  Ball(name);
  }
this.name = name;
};



//exporting an instance
// tthis allows a single instance to be cached and shared for calling apps
// NOTE: since callers may call at different times in different parts of module dependency trees
// it doesn't guarantee a single instance like singleton pattern, but close to a insgle instance
// while this prevents use from extending the module, we can create methods on the instances that allow extension
// common use case is for singleton patterns
function DbDriver(conn){
    this.conn = conn;
}
DbDriver.prototype.connect = function(){

}

module.exports = new DbDriver('jffsoji');

//modules that modify othe rmodules, execute code, modify global scope, etc without returning anyting
//ex: creating a connection for db
