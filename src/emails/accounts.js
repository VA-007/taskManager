const nodemailer = require('nodemailer');

const sendWelcome = async (email, name) => {
    const output = `
  <p>Hi, ${name}! Thank you for checking out my task and note manager application! I hope the website is helpful and I encourage you to reply to this email if you have any thoughts on the project or feedback for improvement. Thanks again!</p>
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
    await transporter.sendMail({
        from: `${process.env.name} <${process.env.email}>`,
        to: `${name} <${email}>`,
        subject: 'Welcome!',
        html: output,
        text: `Hi, ${name}! Thank you for checking out my task and note manager application! I hope the website is helpful and I encourage you to reply to this email if you have any thoughts on the project or feedback for improvement. Thanks again!

        ${process.env.name}
        ${process.env.title}`,
    });
};

const sendGoodbye = async (email, name) => {
    const output = `
<p>Hi again, ${name}! Before you go, I urge you to please send a reply letting me know of anything you've found that you think would improve the site or your experience with it. Thanks again!</p>
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
            text: `Hi again, ${name}! Before you go, I urge you to please send a reply letting me know of anything you've found that you think would improve the site or your experience with it. Thanks again!
            
            ${process.env.name}
            ${process.env.title}`,
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
