import multer from "multer"; // middleware for handle upload videos req
const multerVideo = multer({ dest: "./uploads/videos/" });
export const uploadVideo = multerVideo.single("videoFile");

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
