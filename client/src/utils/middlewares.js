export const logger = store => next => action => {
  console.log(`action: type=${action.type}, payload:`);
  console.log(action.payload);
  let result = next(action);
  //console.log(`new state: ${JSON.stringify(store.getState())}`);
  return result;
};
