export const toMeters = miles => (miles * 1609.34).toFixed(2);

export const toMiles = meters => (meters * 0.000621371).toFixed(2);

export const normalizeList = (list, key) => list.reduce((accum, curr) => ({ ...accum, [curr[key]]: curr }), {});

export const denormalizeKeyedObject = keyedObject => Object.keys(keyedObject).map(key => keyedObject[key]);
//curryined normalize
//const normalizeByKey = list => key => list.reduce((accum, curr) => ({ ...accum, [curr[key]]: curr}), {})

//return new object with a new key-value added
export const addEntry = (obj, key, val) => ({ ...obj, [key]: val });

//pluck (or remove a subset of entries)
export const removeKey = (key, obj) => {
  let { [key]: omit, ...rest } = obj;
  return rest;
};

export const removeKeys = (obj, ...keys) => {
  let newObj = { ...obj };
  for (let key of keys) {
    delete newObj[key];
  }
  return newObj;
};

export const extractKeys = (obj, ...keys) => {
  let newObj = {};
  for (let key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
};
