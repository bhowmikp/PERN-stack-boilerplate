require('dotenv').config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Send email to specified email
 *
 * @param {string} to: email address of person receiving
 * @param {string} subject: email subject
 * @param {string} text: email content
 */
const sendEmail = (to, subject, text) => {
  sgMail.send({
    to,
    from: process.env.SENDGRID_EMAIL,
    subject,
    text,
  });
};

module.exports = sendEmail;
