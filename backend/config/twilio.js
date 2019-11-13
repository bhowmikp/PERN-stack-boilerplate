require('dotenv').config();

const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

/**
 * Sends text to cell phone
 * 
 * @param {string} phoneNumber: country code + phone number
 * @param {string} body: content of text message
 */
const sendText = (phoneNumber, body) => {
  client.messages.create({
    body,
    from: process.env.TWILIO_NUMBER,
    to: `+${phoneNumber}`,
  }).then();
};

export default sendText;
