    const accountSid = 'AC6be3394fb63a85337897d91cf9eb4486';
    const authToken = '3d03f30b19b6db41f3d9f6af6fabd5ec';
    // const MessagingResponse = require("twilio").twiml.MessagingResponse;
    const client = require('twilio')(accountSid, authToken);

    module.exports = {
      sendSms: function name(req, res) {
        console.log(req.body);
        let phoneNum = req.body.phoneNum
        let messageBody = req.body.messageBody
        let format_number = req.body.format_number
        let mediaUrl = req.body.mediaUrl
        // const receiverData = client.messages
        //     .create({ from: '+17024251086', body: messageBody, to: format_number, mediaUrl: mediaUrl })
        //     .then((message) => {
        //       console.log(message.sid)
        //       res.send(message)
        //     })
        //     .done();
         const receiverData = client.messages
           .create({
             from: '+17024251086',
             body: messageBody,
             to: format_number
           })
           .then((message) => {
             console.log(message.sid)
             res.send(message)
           })
           .done();
  }
}