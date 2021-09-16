/**
 * Transform a nested objects into array
 * @param object Object nested
 */
 export const convertObjectToArray = (object: any) => {
    return Object.entries(object || {}).map(item => Object.assign({}, item));
  };
  