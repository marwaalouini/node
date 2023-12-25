const nodemailer = require('nodemailer');

const emailUser = 'marwaalouini123@gmail.com';
const emailPassword = 'marwa123';
const recipientEmail = 'ahmedalouini123@gmail.com';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailUser,
        pass: emailPassword
    }
});

const mailOptions = {
    from: emailUser,
    to: recipientEmail,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent successfully. Response:', info.response);
    }
});
