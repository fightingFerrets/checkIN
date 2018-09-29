// curl - G https://api.twilio.com/2010-04-01/Accounts \
// -u '[AC6be3394fb63a85337897d91cf9eb4486]:[3d03f30b19b6db41f3d9f6af6fabd5ec]'

// POST https://api.twilio.com/2010-04-01/Accounts/{AC6be3394fb63a85337897d91cf9eb4486}/Messages.json
// https://demo.twilio.com/welcome/sms/reply/
let phone = "7024251086"


//TEST TO SEE IF THE SMS WORKS FREE//
POST = "https://api.twilio.com/2010-04-01/Accounts/{TestAccountSid}/Messages"
const accountSid = 'AC6be3394fb63a85337897d91cf9eb4486';
const authToken = '3d03f30b19b6db41f3d9f6af6fabd5ec';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'All in the game, yo',
        from: '+5571981265145',
        to: '+5571981265131'
    })
    .then(message => console.log(message.sid))
    .done();


// const accountSid = 'AC6be3394fb63a85337897d91cf9eb4486';
// const authToken = '3d03f30b19b6db41f3d9f6af6fabd5ec';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//     .create({ from: '+17024251086', body: 'body', to: '+15558675310' })
//     .then(message => console.log(message.sid))
//     .done();

// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const response = new MessagingResponse();
// response.message('Store Location: 123 Easy St.');

// console.log(response.toString());