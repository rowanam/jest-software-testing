// Note: to run only tests in this file, type 'npm test button.test.js' into the CL
// To run all tests, type 'npm test'

/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

// Learning note: runs before each test
beforeEach(() => {
    // Learning note: fs - file system built into Node
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});