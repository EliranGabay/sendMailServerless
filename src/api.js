const express = require("express");
const serverless = require("serverless-http");
const sendEmail = require("./sendMail.js");

const app = express();
const router = express.Router();

router.post("/msg", (req, res) => {
  sendEmail(req, res);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
