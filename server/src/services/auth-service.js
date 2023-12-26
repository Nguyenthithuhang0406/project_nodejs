const {User} = require("../models/user");
const {v4: uuidv4} = require("uuid");

const registerService = async(username, password) => {
    const now = new Date();
    const user = new User({
        username,
        password,
        followers: [],
        followings: [],
        createdAt: now,
        id: uuidv4(),
    });

    user.save();
};

module.exports = registerService;