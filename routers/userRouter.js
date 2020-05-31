import express from "express";
// import routes from "../routes";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("from users");
});

userRouter.get("/:id", (req, res) => {
  res.send("from userDetail");
});

userRouter.get("/:id/edit", (req, res) => {
  res.send("from editProfile");
});

userRouter.get("/:id/change-password", (req, res) => {
  res.send("from changePassword");
});

export default userRouter;
