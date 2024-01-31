const {
    createProbot,
    createAzureFunction,
} = require("@probot/adapter-azure-functions");
const app = require("../index.js");

module.exports = createAzureFunction((context) => app(context), { probot: createProbot() });