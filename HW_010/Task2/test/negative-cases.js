import calc from "../app.js";
import {assert, expect} from "chai";
import "chai/register-should.js";

describe("Negative cases test suit", () => {
    let caseNum = 0;

    it(`${++caseNum}) calc("3s", 4, "+") should throw Error`, () => {
        assert.throws(() => calc("3s", 3, "+"), /NaN\b/i);
    })

    it(`${++caseNum}) calc(3, "4s", "+") should throw Error`, () => {
        expect(() => calc(3, "4s", "+")).to.throw();
    })

    it(`${++caseNum}) calc(3, 4, "**") should throw Error`, () => {
        should.Throw(() => calc(3, 4, "**"), /operation.*\sinvalid/i);
    })

    it(`${++caseNum}) calc("3s", "4s", "**") should throw a compound Error`, () => {
        expect(() => calc("3s", "4s", "**")).to.throw();
    })

    it(`${++caseNum}) calc() should throw a compound Error`, () => {
        expect(() => calc()).to.throw();
    })

    it(`${++caseNum}) calc(5, 0, "/") should throw Error`, () => {
        expect(() => calc(5, 0, "/")).to.throw();
    })
})