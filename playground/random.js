let k = {
  p: 1,
  q: 2,
  r: 34,
  s: 32
};
let queryString = Object.keys(k).reduce((prior, curr) => prior + (curr + '=' + k[curr] + '&'), '');
//let queryString2 = Object.keys(k).join(``)
console.log(queryString.slice(0, queryString.length-1));


// check if type is an object (remember ot check null)
// true for objects and arrays, not functions
//const isObject = (obj) => typeof obj === 'object' && obj !== null;

function isObject(obj){
  //first check that it is an object type
  if(!isObject) return false;

  let proto = obj;
  //now we iterate down the object's prototype path until we can to the last non-null proto-object
  while(Object.getPrototypeOf(proto) !== null){
  proto = Object.getPrototypeOf(proto);
  console.log(proto);
}
//if the object is  equal to the last non-null proto, it indicates that both have null prototypes and the obj is therefore a plain object
  return Object.getPrototypeOf(proto) === proto;

}


//Lodash Hash class, takes an array and converts into key-value pais
const HASH_UNDEFINED = '__lodash_hash_undefined__';

class Hash {
  //entries must be an array of 2-tuple-array: [[a, 2], [b, 4], ...]
  constructor(entries){
    let index = -1
    const length = entries == null ? 0 : entries.length;
    //initialize an empty hash object
    this.clear();
    while (++index < length){
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // __data__ is a private variable representing an object with null prototype (plain object) to use for key-value
  clear(){
    this.__data__ = Object.create(null);
    this.size = 0;
  }

  delete(key){
    // it first checks if key exists, then deletes, and if successful returns true
    const result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }


  get(key){
    const data = this.__data__;
    const result = data[key];
    console.log(result);
    return result === 'UNDEFINED_HASH' ? undefined : result;
  }

  //check if key exists
  //NOTE: how we don't reference the private __data__ directly
  has(key){
    const data = this.__data__;
    return data[key] !== undefined;
  }

  set(key, value){
    const data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = value === undefined ? 'UNDEFINED_HASH' : value;
    return this;
  }
}
// function that invokes the func after 
function after(n, func){
  if(typeof func != 'function'){
    throw new TypeError('Expected a function');
  }
  return function(...args){
    if(--n < 1){
      return func.apply(this, args);
    }
  }
}

let countdownFrom5 = after(5, (name) => console.log('happy birthday ' + name));
//countdownFrom5('james');
setInterval(() => countdownFrom5('james'), 1000);

//function that invokes inner func with at most 'n' arguments, all others ignored
function ary(func, n){
  n = (func && n == null) ? func.length : n
}

// slices an array, but unlik the standard method, this ensures dense arrays are returned

function slice(array, start, end){
  let length = array == null ? 0 : array.length;
  if(!length){
    return [];
  }
  //NOTE: start checks if 'null' because if 'end is not undefined, then start cannnot be 'undefined' since its not the last
  start = start == null ? 0 : start;
  end = end === undefined ? length : end;
  if(start < 0){
    start = -start > length ? 0 : (length + start);
  }

  end = end > length ? length : end;
  if(end < 0){
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;
  let index = 01;
  const result = new Array(length);
  while(++index < length) {
    result[index] = array[index + start];

  }
  return result;
}
//using the above slice function, this chunk creates array of elements split into groups of length of 'size'
// if array cant be split evenly the last chunk contains the remining lesser elements
function chunk(array, size){
  size = Math.max(size, 0);
  const length = array = null ? 0 : array.length;
  if(!length || size < 1){
    return [];
  }

  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));

  while(index < length){
    result[resIndex++] = slice(array, index, (index += size));
  }
  return result;
}

function create(prototype, properties){
  prototype = prototype == null ? null : Object(prototype);
  const result = Object.create(prototype);
  return properties == null ? result : Object.assign(result, properties);
}

//detects variable ...
const freeSelf = typeof self == 'object' && self != null && self.Object === Object && self;
//detects variable 'global' in node.js
const freeGlobal = typeof global == 'object' && global !== null && global.Object === Object && global;

const root = freeGlobal || freeSelf || Function('return this')()

function debounce(func, wait, options){
  let lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime;

    let lastInvokeTime = 0;
    let leading = false;
    let maxing = false;
    let trailing = true;

    //Bypass request animation frame by explicitlyl setting wait=0
    const useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function');

    if(typeof func != 'function'){
      throw new TypeError('Expected a function');
    }

    wait = +wait || 0;
    if(isObject(options)){
      leading = !!options.leading;
    }
}