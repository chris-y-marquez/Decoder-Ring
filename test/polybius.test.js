const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");
describe ("polybius", () => {
  
  it( "should encode i and j to 42", () => {
    const message = "Jumping Jacks";
    const actual = polybius( message);
    const expected = "42542353423322 4211315234"
    expect(actual).to.equal(expected);
  });
   it ( "should decode 42 to (i/j)", () => {
    const message = "42542353423322 4211315234"
    const actual = polybius(message, encode = false);
    const expected = "(i/j)ump(i/j)ng (i/j)acks";
    expect(actual).to.equal(expected);
});
    
it ( "should ignore capitals", () => {


    const lowerCaseMessage = "the leaf is green"
    const upperCaseMessage = "The Leaf Is Green";
    const lowerActual = polybius(lowerCaseMessage)
    const upperActual = polybius(upperCaseMessage);
    expect(lowerActual).to.equal(upperActual);
});

it ("should maintain spaces", () => {
    const input =  "245433 25424432 443251 25423341"
    const actual = polybius(input, encode = false);
    const expected = "run w(i/j)th the w(i/j)nd"
    expect(actual).to.equal(expected)
});
});
