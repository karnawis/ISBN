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

  it("should validate 10 digitas ISBN number", () => {
    let isbnNumber = "0071389938";
    expect(sut.validateIsbnNumber(isbnNumber)).to.equal(true);
  });

  it("should validate 13 digit ISBN number", () => {
    let isbnNumber = "1";
    expect(sut.validateIsbnNumber(isbnNumber)).to.equal(true);
  });
});
