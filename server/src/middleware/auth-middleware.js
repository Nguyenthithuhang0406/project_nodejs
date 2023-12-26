const {findOneUser} = require("../services/user-service");
const {CustomErr} = require("../utils/error");
const jwt = require("jsonwebtoken");
const verifyTokenMiddleware = async(req, res, next) => {
    try {
        //check login first via token

        const authorization = req.headers.authorization;
        if(!authorization){
            throw new CustomErr("token must be provided", 403);
        }

        const fields = authorization.split(" ");

        if(fields.length !== 2){
            throw new CustomErr("Method auth is not support", 403);
        }

        const token = fields[1];

        const decoded = jwt.verify(token, process.env.KEY_TOKEN);

        const user = await findOneUser(undefined, decoded.userID);

        if(!user){
            throw new CustomEr("Unauthorized", 403);
        }
        next();
    }catch (err){
        next(err);
    }
};

module.exports = {verifyTokenMiddleware};