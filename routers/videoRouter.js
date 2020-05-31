import express from "express";

const videoRouter = express.Router();

videoRouter.get("/", (req, res) => {
  res.send("from videos");
});

videoRouter.get("/upload", (req, res) => {
  res.send("from upload");
});

videoRouter.get("/:id", (req, res) => {
  res.send("from videoDetail");
});

videoRouter.get("/:id/edit", (req, res) => {
  res.send("from editVideo");
});

videoRouter.get("/:id/delete", (req, res) => {
  res.send("from deleteVideo");
});

export default videoRouter;
