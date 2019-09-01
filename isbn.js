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

const validateIsbnNumber = isbnNumber => {
  isbnNumber = String(isbnNumber);
  let sum = 0;
  let check, result, resultFlag, remainder;
  let len = isbnNumber.length;

  const validateISBNlength10 = () => {
    //sum of the 9 numbers
    for (let i = 0; i < 9; i++) {
      sum += isbnNumber[i] * (len - i);
    }
    remainder = 11 - (sum % 11);
    result = remainder == 10 ? "X" : remainder;
    resultFlag = isbnNumber[9] == result ? true : false;
  }; //end of 10

  const validateISBNlength13 = () => {
    //sum of the 12 numbers
    for (let i = 0; i < 12; i++) {
      sum += i % 2 == 1 ? isbnNumber[i] * 3 : isbnNumber[i];
    }
    console.log(sum, result);
    remainder = (10 - (sum % 10)) * 10;
    if (remainder == isbnNumber[12]) {
      resultFlag = true;
    }
  }; //end of 13

  if (len == 10) {
    validateISBNlength10();
  } else if (len == 13) {
    validateISBNlength13();
  } else {
    return false;
  }

  return resultFlag;
}; //end of check;

module.exports = {
  isSomething,
  isString,
  stringLenCheck,
  validateIsbnNumber
};
