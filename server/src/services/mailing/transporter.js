const nodemailer = require('nodemailer');

const RESET_SENDER = 'do-not-reply@legume.com';
const RESET_SUBJECT = 'legume reset password verification';

const mailTo = (to, message) => ({
  from: RESET_SENDER,
  to: to,
  subject: RESET_SUBJECT,
  html: message,
});
