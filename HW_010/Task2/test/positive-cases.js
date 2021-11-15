import calc from "../app.js";
import {assert, expect} from "chai";
import "chai/register-should.js";

describe("Positive cases test suit", () => {
    let caseNum = 0;

    it(`${++caseNum}) calc(3, 3, "+") should return 6`, () => {
        assert.equal(calc(3, 3, "+"), 6);
    })

    it(`${++caseNum}) calc(3, 4, "-") should return -1`, () => {
        expect(calc(3, 4, "-")).to.equal(-1);
    })

    it(`${++caseNum}) calc(5, 2, "/") should return 2.5`, () => {
        calc(5, 2, "/").should.equal(2.5);
    })

    it(`${++caseNum}) calc(4, 4, "*") should return 16`, () => {
        expect(calc(4, 4, "*")).to.equal(16);
    })
})