const { register, login } = require("../controller/auth-controller");

const authRoute = require("express").Router();

authRoute.post("/register", register);
authRoute.post("/login", login);

module.exports = { authRoute };