const { getMe } = require("../controller/user-controller");

const userRoute = require("express").Router();

userRoute.get("/me", getMe);

module.exports = { userRoute };