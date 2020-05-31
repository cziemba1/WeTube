import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => {
  res.send("from home");
});
globalRouter.get("/join", (req, res) => {
  res.send("from join");
});
globalRouter.get("/login", (req, res) => {
  res.send("from login");
});
globalRouter.get("/logout", (req, res) => {
  res.send("from logout");
});
globalRouter.get("/search", (req, res) => {
  res.send("from search");
});

export default globalRouter;
