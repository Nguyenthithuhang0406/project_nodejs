const {
  getPostController,
  createPostController,
  updatePostController,
  deletePostController,
  getDetailController,
} = require("../controller/post-controller");
const { verifyTokenMiddleware } = require("../middleware/auth-middleware");
const { pageMiddleware } = require("../middleware/page-middleware");
const { verifyPostMiddleware } = require("../middleware/verifyPost-middleware");

const postRoute = require("express").Router();

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const filePath = path.join(__dirname, "..", "..", "public", "posts");

    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = file.originalname.split(".").pop();
    const fileName = `${file.originalname}-${uniqueSuffix}.${fileExtension}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });
// postRoute.get("/test", (req, res) => {
//   res.json("rest");
// });

postRoute.use(pageMiddleware);
postRoute.get("/", getPostController);
postRoute.get("/:id", getDetailController);
//verify token
postRoute.use(verifyTokenMiddleware);////
postRoute.post("/", upload.single("image"), createPostController);
//  postRoute.post("/", createPostController);

//verify user create post
postRoute.put("/:id", verifyPostMiddleware, updatePostController);
postRoute.delete("/:id", verifyPostMiddleware, deletePostController);

module.exports = { postRoute };
