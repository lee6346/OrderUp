export const logger = store => next => action => {
  console.log(`action: type=${action.type}\tpayload=${action.payload}`);
  let result = next(action);
  console.log(`new state: ${store.getState()}`);
  return result;
};
