const {Schema, default: mongoose} = require("mongoose");
const {userSchema, UserSchema} = require("./user");
const {newID} = require("../utils/main");

const PostSchema = new Schema({
    id: {
        type: String,
        default: newID(),
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: new Date(),
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    hashTag: String,
    author: UserSchema,
});

//create model
const Post = mongoose.model("posts", PostSchema);

module.exports = {Post};