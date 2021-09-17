/**
 * Transform a nested objects into array
 * @param object Object nested
 */
export const convertObjectToArray = (object: {}): any[] =>
  Object.entries(object || {}).map(item => ({ ...item }));

export default convertObjectToArray;
