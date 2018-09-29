const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: { type: String },
    mediaUrl: { type: String },
    sendTo: {
        receiver: { type: String },
        phoneNum: { type: String },
        condition: { type: String },
        comment: { type: String },
        date: { type: Date, default: Date.now }
    }
})

const User = mongoose.model("User", userSchema);



module.exports = User;