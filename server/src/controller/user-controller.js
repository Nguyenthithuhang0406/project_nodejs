const { findOneUser } = require("../services/user-service");
const { argUser } = require("../utils/constants");

const getMe = async (req, res, next) => {
  try {
    const user = req[argUser];
    // const response = await findOneUser("", user.userID);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = { getMe };