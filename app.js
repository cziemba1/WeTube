import express from "express";
import morgan from "morgan"; //middleware for login
import helmet from "helmet"; //middleware for secure routes
import bodyParser from "body-parser"; //middleware for understaging data from server
import cookieParser from "cookie-parser"; //middleware for handle session
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import routes from "./routes";
const app = express();

/*------ Middleware ------*/
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*------ Router ------*/
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

/*------ Start application------*/
const PORT = /*process.env.PORT ||*/ 3000;
const handleListening = () => {
  console.log(`Listening on: PORT ${PORT}`);
};
app.listen(PORT, handleListening);

export default app;
