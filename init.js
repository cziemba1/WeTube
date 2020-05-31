import express from "express";
import morgan from "morgan"; //middleware for login
import helmet from "helmet"; //middleware for secure routes
import bodyParser from "body-parser"; //middleware for understaging data from server
import cookieParser from "cookie-parser"; //middleware for handle session
const app = express();

const PORT = /*process.env.PORT ||*/ 3000;

/*------ Start application------*/
const handleListening = () => {
  console.log(`Listening on: PORT ${PORT}`);
};
app.listen(PORT, handleListening);
