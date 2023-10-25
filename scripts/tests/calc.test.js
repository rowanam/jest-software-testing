const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test("should throw an error if no arguments are passed", () => {
            expect(() => addition()).toThrow(Error);
        });
        test("should throw an error if only one argument is passed", () => {
            expect(() => addition(3)).toThrow(Error);
        });
        test("throw an error if a string is passed", () => {
            expect(() => addition("once", 3)).toThrow(Error);
            expect(() => addition(3, "twice")).toThrow(Error);
        });
    });
});