const division = require("../index.js");

function assert(value, description) {
    if (!value) {
        throw new Error(`Teste failed: ${description}`);
    } else {
        console.info("Test passed");
    }
}

console.log("Description: check if division is a function ...");
assert(typeof division === "function", "division should be a function");

console.log("Description: check if a divided by b return 5 ...");
assert(division(2, 10), "division should return 5");
