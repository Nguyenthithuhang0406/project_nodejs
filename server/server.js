require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/utils/db");
const { authRoute } = require("./src/routes/auth-route");
const { userRoute } = require("./src/routes/user-route");
const { verifyTokenMiddleware } = require("./src/middleware/auth-middleware");
const cors = require("cors");
const { postRoute } = require("./src/routes/post-route");
const app = express();

const PORT = process.env.PORT;

//server static file
app.use("/assets", express.static("public"));

//CORS
app.use(cors());

//server json
app.use(express.json());

app.get("/", (req, res) => {
  res.json("ready");
});

app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
//middleware for auth
app.use(verifyTokenMiddleware);
app.use("/api/user", userRoute);

//handle error
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json(err.message);
});

connectDB()
  .then((res) => {
    console.log(res);
    app.listen(PORT, () => {
      console.log(`Server running in port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err =>", err);
  });
