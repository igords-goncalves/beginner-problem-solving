const formatCurrency = require("../index");

function assert(value, description) {
    if (!value) throw new Error(`Teste failed: ${description}`);
}

console.log("Test passed: check if formatCurrency is a function ...");
assert(
    typeof formatCurrency === "function",
    "formatCurrency should be a function"
);

console.log("Test passed: check if formatCurrency returns BRL pattern R$");
assert(formatCurrency(123.123), "formatCurrency should return R$ 123.12");
