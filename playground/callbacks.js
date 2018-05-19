const fs = require('fs');
const os = require('os');
const path = require('path');
const util = require('util');
const zlib = require('zlib');
const url = require('url');


/**
 * Reactor pattern
 * - specialization of event loop algorithm (uses even queues and callbacks)
 * Idea: have a handler (callback function) associated with each IO operation whic is invoked as soon as event
 *  is produced and processed by event loop
 * 1) app geneates new IO operation by submitting request to event demultiplexer and specifing the callback to invoke upon compltion
 *  - submitting request is a non-blocking call that is a very quick function invokation before returning control to callin g app
 * 2) when IO operations complet, event demultiplexer pushes 'complete' event with reference to the callback to the event queue
 * 3) the event loop cycles back and iterates over the event queue
 * 4) each event is iteratevly received and the callback invoked
 * 5) the callback up completion (since it is defined as part of app code) will give control back to event loop 
 * 6) once all event queue items processed, the lloop will block the event dmultiplexer/queue until its next loop
 */

/** CPS: continuation passsing style
 *
 * Callbaks: function pass as argument to anothe rfunction an invoked with the result when the operation completes
 * - functional programming terms: CPS is the callback way of propagating the result
 * - genereal concept and not limited to asynchronous functions
*/

//Synchronous callbacks
function concatentate(s1, s2, callback){
  callback(s1 + s2);
}

function cbConcat(arg){
  console.log(arg.length);
}

concatentate('james', 'lee', console.log);
concatentate('james', 'lee', cbConcat);

//Asynchronous callbacks
function concatentateAsync(s1, s2, callback){
  setTimeout(() => callback(s1 + s2), 1000);
}

concatentateAsync('james', 'lee', console.log);
concatentateAsync('james', 'lee', cbConcat);

function getImagePath(filename){

}

function queryStringToObject(path){
  let p = path || 'http://localhost.com?year=2017&month=febrary';
  queryObj = url.parse(p, true).query;
  console.log(queryObj);
}


/**
 * node callback convetions
 * - followed/standardazed by all node core apis and common libraries
 * 1) callbacks are last parameter of functoin for readability
 *    fs.readFile(filename, [options], callback)
 * 2) errors are the first parameter of the callback function itself (not the function that takes the callback)
 *    - the callback should always check for errors and err should always by an Error object type
 *    function cb(err, data){
 *      ...
 *    }
 *    fs.readFile('foo', 'utf-8', cb);
 * 
 * 
 *    fs.readFile('foo', 'utf-8', (err, data) => {
 *      if(err){ throw}
 *      else{ do somthingwith data}
 *    })
 * 
 *    - propagting errors is synchronis with throw statement which cauess error to jump up the stack
 *    - in async CPS, error propagation is done by passing error the next callback in the chain
 */
function readJson(filename, callback){
  fs.readFile(filename, 'utf-8', (err, data) => {
    let parsed;
    if(err){
      //propagate asyn way
      return callback(err);
    }
    try {
      parsed = JSON.parse(data);
    } catch (err){
      return callback(err);
    }
    //no errors, propagate callback without an error (null)
    return callback(null, parsed);
  })
}


function getCurrentLocation(){
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

getCurrentLocation().then(position => {
  console.log(position);
})
.catch(err => {
  console.log(err);
});


let p = await getCurrentLocation();
console.log(p);