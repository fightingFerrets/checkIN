const MessagingResponse =
    require("twilio").twiml.MessagingResponse;

sendLocation = () => {

    app.post("/sms", (req, res) => {

        number = req.body.phone_number;
        first_name = req.body.first_name;
        format_number = "+1" + number

        client.messages
            .create({ from: '+17024251086', body: 'body', to: format_number, mediaUrl: "" })
            .then(message => console.log(message.sid))
            .done();

        // const twiml = new MessagingResponse();
        // twiml.message("Thanks for signing up!");
        // res.end(twiml.toString());
    });

}

// APIKEYSECRET = "UPijZZeaPvLjnnW69FUvYj6iHOSv9jLl"
// SID = "SK28a639bcbc52bb579cb20fd4b5bdcf2b"


// POST https://api.twilio.com/2010-04-01/Accounts/AC6be3394fb63a85337897d91cf9eb4486/3d03f30b19b6db41f3d9f6af6fabd5ec/Messages.json
// // https://demo.twilio.com/welcome/sms/reply/
// let phone = "7024251086"


// //TEST TO SEE IF THE SMS WORKS FREE//
// let Messages = "Hello";
// POST = `https://api.twilio.com/2010-04-01/Accounts/AC6be3394fb63a85337897d91cf9eb4486/3d03f30b19b6db41f3d9f6af6fabd5ec/${Messages}`
// const accountSid = 'AC6be3394fb63a85337897d91cf9eb4486';
// const authToken = '3d03f30b19b6db41f3d9f6af6fabd5ec';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//     .create({
//         body: 'All in the game, yo',
//         from: '+5571981265145',
//         to: '+5571981265131'
//     })
//     .then(message => console.log(message.sid))
//     .done();




// client.messages
//     .create({ from: '+17024251086', body: 'body', to: '+17027690995' })
//     .then(message => console.log(message.sid))
//     .done();

// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const response = new MessagingResponse();
// response.message('Store Location: 123 Easy St.');

// console.log(response.toString());


// const MessagingResponse =
//     require("twilio").twiml.MessagingResponse;

// app.post("/sms", (req, res) => {
//     const twiml = new MessagingResponse();
//     twiml.message("Thanks for signing up!");
//     res.end(twiml.toString());
// });