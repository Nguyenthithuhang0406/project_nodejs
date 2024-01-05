const bcrypt = require("bcrypt");
const registerService = require("../services/auth-service");
const { findOneUser } = require("../services/user-service");
const jwt = require("jsonwebtoken");
const { json } = require("express");
const { CustomErr } = require("../utils/error");

const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new CustomErr("username and password are required", 400);
    }
    //hashed password
    const hashedPassword = bcrypt.hashSync(password, 10);
    //check username already
    const existingUser = await findOneUser(username);

    if (!!existingUser) {
      throw new CustomErr(`${username} is existing`, 409);
    }
    //service -> save db
    registerService(username, hashedPassword);

    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new CustomErr("username and password are required", 400);
    }
    //find user
    const existingUser = await findOneUser(username);
    if (!existingUser) {
      throw new CustomErr(`${username} is not existing`, 404);
    }
    //compare

    const matched = bcrypt.compareSync(password, existingUser.password);
    if (!matched) {
      throw new CustomErr("password is not correct", 400);
    }

    const payload = {
      username: existingUser.username,
      userID: existingUser.id,
    };
    //more : JWT -> client
    const token = jwt.sign(payload, process.env.KEY_TOKEN, {
      expiresIn: "1 day",
    });
    res.json(token);
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };