const {
    createProbot,
    createAzureFunction,
} = require("@probot/adapter-azure-functions");
const app = require("../index.js");

module.exports = createAzureFunction(app, { probot: createProbot() });