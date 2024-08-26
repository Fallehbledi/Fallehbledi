const nodemailer = require("nodemailer");

const user = process.env.EMAIL 
const pass = process.env.EMAIL_PASS




const transport = nodemailer.createTransport({
  service: "Gmail",
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
  auth: {
    user: user,
    pass: pass,
  },
});
module.exports.sendConfirmationEmail = (
  name,
  email,
  confirmationCode,
) => {
  transport.sendMail({
      from: user,
      to: email,
      subject: "Activate Your Account ",
      html: `
      <div style="font-family:arial; color: #333;">
        <img src="https://firebasestorage.googleapis.com/v0/b/fallehbledy.appspot.com/o/falleh.png?alt=media&token=3eadeef9-9df5-417d-bd1c-686c17f8ff69" width='120px' alt="" />
        <h1 style="font-size:25px; letter-spacing:-0.5 ; color: #058f1a;">Email Confimation</h1>
        <h2 style="font-weight: bold; font-size:16px;">Hello ${name},</h2>
        <p style="font-size: 15px; font-weight:bold;">
          Your Activation code is:
        </p>
        <input
          style="
            width: 146px; 
            height: 50px;
            text-align: center; 
            font-size: 1.5rem; 
            font-weight: 800; 
            color: #0f172a; 
            background-color: #f1f5f9;
            border: 1px solid transparent;
            border-radius: 0.375rem;
            padding: 1rem;
            outline: none;
            transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
          "
          value=${confirmationCode}
          name='activationCode'
          type="text"
        />
        <p style="font-size: 14px; color: #777; margin-top:10px;">
          If you did not create an account, please ignore this email.
        </p>
      </div>`,
    })
    .catch((err) => console.log(err));
};


