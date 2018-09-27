const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const User = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    location: {
        pin: Schema.Types.Decimal128,
        date: { type: String, default: Date.now }
    },
    sentTo: {
        receiver: { type: String },
        date: { type: String }
    }
})

// userSchema.pre('save', function (next) {
//     const user = this;
//     if (!user.isModified('password')) return next();

//     bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//         if (err) return next(err);
//         bcrypt.hash(user.password, salt, function (err, hash) {
//             if (err) return next(err);
//             user.password = hash;
//             next();
//         });
//     });
// });

// userSchema.method.comparePassword = function (candidatePassword, CB) {
//     bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };


module.exports = User;