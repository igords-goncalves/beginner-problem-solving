const potency = require("../index.js");

function assert(value, description) {
    if (!value) throw new Error(`Teste failed: ${description}`);
}

const a = 3;
const b = 2;

console.log("Test passed: Verify if potency is a function ...");
assert(typeof (potency === "function"), "potency should be a function");

console.log("Test passed: Check if a raised to b is equal to 9");
assert(potency(a, b) === 9, "potency should return 9");
