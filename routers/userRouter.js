import express from "express";
import { editProfile, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("from users");
});

userRouter.get("/:id", userDetail);

userRouter.get("/:id/edit", editProfile);

userRouter.get("/:id/change-password", (req, res) => {
  res.send("from changePassword");
});

export default userRouter;
