const rewire = require("rewire")
const execa = rewire("./execa")
const mockStream = execa.__get__("mockStream")
// @ponicode
describe("mockStream", () => {
    test("0", () => {
        let callFunction = () => {
            mockStream()
        }
    
        expect(callFunction).not.toThrow()
    })
})
