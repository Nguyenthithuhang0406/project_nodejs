const {
    getPostController,
    createPostController,
    updatePostController,
    deletePostController,
    getDetailController,
} = require("../controller/post-controller");
const {verifyTokenMiddleware} = require("../middleware/auth-middleware");
const {verifyPostMiddleware} = require("../middleware/verifyPost-middleware");

const postRoute = require("express").Router();

postRoute.get("/", getPostController);
postRoute.get("/:id", getDetailController);

//verify token
postRoute.use(verifyTokenMiddleware);
postRoute.post("/", createPostController);

//verify user create post
postRoute.put("/:id", verifyPostMiddleware, updatePostController);
postRoute.delete("/:id", verifyPostMiddleware, deletePostController);

module.exports = {postRoute};