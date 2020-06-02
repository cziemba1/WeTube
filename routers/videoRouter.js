import express from "express";
import {
  videos,
  getupload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

videoRouter.get("/", videos);

videoRouter.get("/upload", getupload);
videoRouter.post("/upload", uploadVideo, postUpload);

videoRouter.get("/:id", videoDetail);

videoRouter.get("/:id/edit", getEditVideo);
videoRouter.post("/:id/edit", postEditVideo);

videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
