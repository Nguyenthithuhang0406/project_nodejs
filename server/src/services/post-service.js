const { ObjectId } = require("mongodb");
const { Post } = require("../models/post");
const { newID } = require("../utils/main");

const createPostService = ({ title, content, hashTag }, author) => {
  const post = new Post({
    title,
    content,
    hashTag,
    author,
  });

  post.save();
};

const getPostService = async ({ page, take }) => {
  const result = await Post.find()
    .skip((+page - 1) * +take)
    .limit(take)
    .sort({ createdAt: -1 })
    .select("-author.password");
  return result;
};

const getTotal = () => Post.countDocuments();

const findOnePostService = (id) => Post.findOne({ id });
const updatePostService = async ({ title, content, hashTag, postID }) => {
  const updateData = {
    title,
    content,
    hashTag,
  };

  await Post.updateOne(
    { postID },
    {
      $set: updateData,
    }
  );
};

const deletePostService = (postID) => Post.deleteOne({ postID });

module.exports = {
  createPostService,
  getPostService,
  findOnePostService,
  updatePostService,
  deletePostService,
  getTotal,
};