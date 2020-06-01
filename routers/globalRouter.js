import express from "express";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  logout,
  getLogin,
  postLogin,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", getJoin);
globalRouter.post("/join", postJoin);
globalRouter.get("/login", getLogin);
globalRouter.post("/login", postLogin);
globalRouter.get("/logout", logout);
globalRouter.get("/search", search);

export default globalRouter;
