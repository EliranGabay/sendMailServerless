const accountSid = "AC44fde9ba476398d35d1e40571ffd4cb5";
const authToken = "ebcc4df8df2448a61ee652884cc90a37";
const client = require("twilio")(accountSid, authToken);

function sendmsg(req, res) {
  try {
    client.messages
      .create({
        body:
          "You get contact from: " +
          req.body.name +
          " \n My contact - Mobile: " +
          req.body.mobile +
          "\nEmail: " +
          req.body.email +
          "\nMessage: " +
          req.body.text,
        from: "whatsapp:+14155238886",
        to: "whatsapp:+972525691766",
      })
      .then((message) => console.log(message.sid))
      .done();
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ status: "Successful response" });
}
module.exports = sendmsg;
