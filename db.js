/*------DataBase------*/
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

/*------Connect to DB------*/
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

/*------Handle succes DB connection functions------*/
const handleOpen = () => {
  console.log("Connected to DB");
};
const handleError = () => {
  console.log("Error on DB connection");
};

/*------DB connection------*/
db.once("open", handleOpen);
db.on("error", handleError);
