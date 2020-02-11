const Mocha = require("mocha");
const assert = require("assert");
const justify = require("../justify");
const mocha = new Mocha();

// Bit of a hack, sorry!
mocha.suite.emit("pre-require", this, "solution", mocha);

describe("Test suite", function() {
  it("can justify one word", function() {
    // a single word is already justified
    assert.equal(justify("hello", 99), "hello");
  }); 
  it("can justify two words", function() {
    assert.equal(justify("hello world", 14), "hello    world");
  });
  it("can justify with uneven spacing", function() {
    assert.equal(justify("hello today world", 20), "hello   today  world");
  });
  it("can justify multiple words, uneven spacing", function() {
    assert.equal(justify("hello today is a weekday", 30), "hello   today   is  a  weekday");
  }); 
});

mocha.run();
