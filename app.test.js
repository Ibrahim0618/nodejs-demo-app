const { test } = require("node:test");
const assert = require("node:assert");
const { getMessage } = require("./app");

test("Application returns welcome message", () => {
    assert.strictEqual(
        getMessage(),
        "Hello from Node.js CI/CD!"
    );
});