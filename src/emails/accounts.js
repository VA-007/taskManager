const nodemailer = require('nodemailer');

const sendWelcome = async (email, name) => {
    const output = `
  <h3>Welcome to my task app!</h3>
  <p>Hi, ${name}! Thanks for checking out this task manager application! Please have a look around and reply to this email with your thoughts and feedback for improvement.</p>
  <p>${process.env.name}<br>${process.env.title}</p>
  `;

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.email,
            pass: process.env.password,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    // send mail with defined transport object
    await transporter.sendMail(
        {
            from: `${process.env.name} <${process.env.email}>`,
            to: `${name} <${email}>`,
            subject: 'Welcome!',
            html: output,
            text: `Hi, ${name}! Thanks for checking out this task manager application! Please have a look around and reply to this email with your thoughts and feedback for improvement.`,
        },
        function (err, data) {
            if (err) {
                return console.log('Error:', err);
            } else {
                console.log('Email sent!!');
            }
        }
    );
};

const sendGoodbye = async (email, name) => {
    const output = `
<h3>I'm sorry to see you go!</h3>
<p>Hi again, ${name}! I urge you to please send a reply letting me know if you have found anything that you think would improve the site or your experience with it. Thanks again!</p>
<p>${process.env.name}<br>${process.env.title}</p>
`;

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.email,
            pass: process.env.password,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    // send mail with defined transport object
    await transporter.sendMail(
        {
            from: `${process.env.name} <${process.env.email}>`,
            to: `${name} <${email}>`,
            subject: 'Can I do better?',
            html: output,
            text: `Hi again, ${name}! It was so nice to have stop by! If you have found anything that you think would improve the site or your experience with it then I urge you to please send a reply letting me know. Thanks again!`,
        },
        function (err, data) {
            if (err) {
                return console.log('Error:', err);
            } else {
                console.log('Email sent!!');
            }
        }
    );
};

module.exports = {
    sendWelcome,
    sendGoodbye,
};
