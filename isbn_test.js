"use strict";
const { expect } = require("chai");
const sut = require("./isbn");

describe("validateISBN()", () => {
  it("should return something", () => {
    expect(sut.isSomething()).to.equal("something");
  });

  it("should return a string", () => {
    expect(sut.isString("test")).to.equal(true);
  });

  it("should check if ISBN has 10 digits", () => {
    let x = 1234567899;
    expect(sut.stringLenCheck(x)).to.equal(true);
  });

  it("should check numbers of ISBN", () => {
    //convert string to an array of integers
    //expect(sut.checkNumbers(x).to.equal("[1,2,3,4,5,6,7,8,9,9]"));
  });
});
