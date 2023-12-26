const {User} = require("../models/user");

const findOneUser = async(username, userID) => {
    const filter = {
        $or: [{username: username}, {id: userID}],
    };
    const res  = await User.findOne(filter);

    return res;
};

module.exports = {findOneUser};