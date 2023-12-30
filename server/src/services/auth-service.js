const {User} = require("../models/user");
const {newID} = require("../utils/main");

const registerService = async(username, password) => {
    const user = new User({
        username,
        password,
        followers: [],
        followings: [],
    });

    user.save();
};

module.exports = registerService;