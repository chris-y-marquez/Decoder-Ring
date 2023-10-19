const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");
describe ("caesar", () => {
    it ("Should return false if shift is a invalid value", () => {
        const message = "halloween"
        const actual = caesar(message, 26);
        const expected = false 
        expect(actual).to.equal(expected);
    });
    it("Should maintain spaces and symbols", () => {
        const message = "hello world!"
        const actual = caesar(message, 3);
        const expected = "khoor zruog!"
        expect(actual).to.equal(expected);

    });
    it("Should ignore capital letters", () => {
        const message = "Scary Skeletons"
        const actual= caesar(message, 3);
        const expected = "vfdub vnhohwrqv"
        expect(actual).to.equal(expected);
    });
    it ("Should handle shifts that go past the alphabet", () => {
        const message = "Zipping Zebra zooming"
        const actual = caesar(message, 4);
        const expected = 'dmttmrk difve dssqmrk'
        expect(actual).to.equal(expected);
    })
})
