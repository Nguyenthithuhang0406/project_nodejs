const {Objectid} = require("mongodb");
const {Post} = require("../models/post");
const {newID} =require("../utils/main");

const createPostService = ({title, content, hashTag}, author) => {
    const post = new Post({
        title,
        content,
        hashTag,
        author,
    });

    post.save();
};


const getPostServic = async () => {
    const result = await Post.find().select("-author.password");
    return result;
};

const findOnePostService = (id) => Post.findOne({id});

const updatePostService = async ({title, content, hashTag, postID}) => {
    const updateData = {
        title,
        content,
        hashTag,
    };

    await Post.updateOne(
        {postID},
        {
            $set: updateData,
        }
    );
};

const deletePostService = (postID) => Post.deleteOne({postID});

module.exports = {
    createPostService,
    getPostServic,
    findOnePostService,
    updatePostService,
    deletePostService,
};