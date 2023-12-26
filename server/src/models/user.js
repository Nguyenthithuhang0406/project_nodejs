const {Schema, default: mongoose} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    followings: {
        type: [String],
    },
    followers: {
        type: [String],
    },
    avatar: String,
});

//create model
const User = mongoose.model("users", userSchema);

module.exports = {User};