const express = require("express");
const serverless = require("serverless-http");
const sendmsg = require("./sendWhatapp");

const app = express();
const router = express.Router();

router.post("/msg", (req, res) => {
  sendmsg(req, res);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
