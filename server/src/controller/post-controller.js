const {createPostService, getPostService, updatePostService, deletePostService, findOnePostService} = require("../services/post-service");
const {argUser} = require("../utils/constants");
const {CustomErr} = require("../utils/error");

const getPostController = async (req, res, next) => {
    try{
        const data = await getPostService();
        res.json(data);
    }catch(err){
        next(err);
    }
};

const createPostController = (req, res, next) => {
    try{
        const {title, content, hashTag} = req.body;
        if(!title || !content){
            throw new CustomErr("title and content are required", 400);
        }
        const payload = {
            title,
            content,
            hashTag,
        };
        const user = req[argUser];
        createPostService(payload, user);
        res.sendStatus(201);
    } catch (err){
        next(err);
    }
};
const updatePostController = async (req, res) => {
    try{
        const postID = req.params.id;
        const {title, content, hashTag} = req.body;
        await updatePostService({title, content, hashTag, postID});
        res.json("ok");
    }catch(err){
        next(err);
    };
}

const deletePostController = async(req, res) => {
    try{
        const postID = req.params.id;
        await deletePostService(postID);
        res.json("ok");
    }catch(err){}
};

const getDetailController = async (req, res, next) => {
    try{
        const postID = req.params.id;
        const post = await findOnePostService(postID);
        if(!post){
            throw new CustomErr("not found", 404);
        }
        res.json(post);
    }catch(err){
        next(err);
    }
};

module.exports = {
    getPostController,
    createPostController,
    updatePostController,
    deletePostController,
    getDetailController,
};
