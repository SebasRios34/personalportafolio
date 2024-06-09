const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Fillout All The Fields!", res: res });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "ligasebasrios@gmail.com",
      pass: "*******",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "serilu1960@gmail.com",
    subject: `Message from ${data.name} directed from Sebas Portfolio`,
    html: `

            <h2>Contact Information - Portfolio<h2/>
            <p>Name: ${data.name}<p/>
            <p>Email: ${data.email}<p/>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res
          .status(400)
          .json({ msg: "Fillout All The Fields!", response: res });
      res.status(200).json({ msg: "Thank You!" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "SERVER ERROR", res: res });
    }
  });
});
module.exports = router;
