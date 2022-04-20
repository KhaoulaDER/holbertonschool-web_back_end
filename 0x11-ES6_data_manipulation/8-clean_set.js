/* eslint-disable no-continue */
export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('set must be of type Set');
  }
  let returnStr = '';
  if (startString.length === 0) {
    return returnStr;
  }
  if (typeof (startString) !== 'string') {
    throw new TypeError('startString must be of type String');
  }
  for (const str of set) {
    if (typeof (str) !== 'string') {
      throw new TypeError('set must contain strings only');
    }
    if (str.startsWith(startString)) {
      if ((str.slice(startString.length)).length === 0) {
        continue;
      }
      returnStr += `${str.slice(startString.length)}-`;
    }
  }
  if (returnStr.charAt(0) === '-') {
    returnStr = returnStr.slice(1);
  }
  if (returnStr.charAt(returnStr.length - 1) === '-') {
    returnStr = returnStr.slice(0, returnStr.length - 1);
  }
  return returnStr;
}
