const {findOnePostService} = require("../services/post-service");
const {argUser} = require("../utils/constants");
const {CustomErr} = require("../utils/error");

const verifyPostMiddleware = async (req, res, next) => {
    try{
        const user = req[argUser];
        const postID = req.params.id;

        //fill post
        const post = await findOnePostService(postID);
        if(!post){
            throw new CustomErr(`ID ${postID} not found`, 404);
        }

        //check user creat post?
        if(post.author.id !== user.id){
            throw new CustomErr("you don't create this post", 403);
        }
        next();
    }catch(err){
        next(err);
    }
};

module.exports = {verifyPostMiddleware};