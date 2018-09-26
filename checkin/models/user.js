const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fbUserID: { type: String },
    mediaURL: { type: String },
    sentTo: {
        receiver: { type: String },
        phoneNum: { type: Number },
        date: { type: Date }
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;