const sendgrid = require("@sendgrid/mail");

sendgrid.setApiKey(
  "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"
);

function sendEmail(req, res) {
  try {
    sendgrid.send({
      to: "eli00ran@gmail.com", // Your email where you'll receive emails
      from: "eli00ran@gmail.com", // your website email address here
      subject: "Portfolio Eliran Gabay",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: right;align-items: right;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
            </div>
            <div class="container" style="margin-left: 0;margin-right: 0;">
              <h3>You've got a new message from ${req.body.name}</h3>
              <p> Email is: ${req.body.email}</p>
              <p> Mobile is: ${req.body.mobile}</p>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.text}</p>
              <br>
              </div>
            </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
module.exports = sendEmail;
