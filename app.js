const express = require("express");

const app = express();

function getMessage() {
    return "Hello from Node.js CI/CD!";
}

app.get("/", (req, res) => {
    res.send(getMessage());
});

module.exports = { app, getMessage };