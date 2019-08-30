"use strict";
const { expect } = require("chai");
const sut = require("./isbn");

describe("callsSomething", () => {
  it("should return something", () => {
    expect(sut.callsSomething()).to.equal("something");
  });
});
