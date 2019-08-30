"use strict";

const isSomething = () => {
  return "something";
};

const isString = x => {
  if (typeof x === "string" || x instanceof String) {
    return true;
  } else {
    return false;
  }
};

const stringLenCheck = x => {
  x = String(x);
  if (x.length != 10) {
    return false;
  }
  return true;
};

const checkNumbers = x => {
  let numbers = parseInt(x, 10);
  //convert a string to an array of integers
  return x;
};

module.exports = {
  isSomething,
  isString,
  stringLenCheck,
  checkNumbers
};
