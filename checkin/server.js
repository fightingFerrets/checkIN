const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const client = require('twilio')(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);
mongoose.connect(process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist");

app.listen(PORT, function () {
    console.log(`🌎 ==> API Server now listening on PORT http//localhost:${PORT}`);
});

///Twilio
const MessagingResponse =
    require("twilio").twiml.MessagingResponse;

sendLocation = () => {

    app.post("/sms", (req, res) => {

        number = req.body.phone_number;
        first_name = req.body.first_name;
        format_number = "+1" + number

        client.messages
            .create({ from: '+17024251086', body: 'body', to: format_number, mediaUrl: "http//maps.google.com/?q=<lat>,<lng>" })
            .then(message => console.log(message.sid))
            .done();

        // const twiml = new MessagingResponse();
        // twiml.message("Thanks for signing up!");
        // res.end(twiml.toString());
    });

}