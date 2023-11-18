import mongoose from "mongoose";

let dbInstance = undefined;

mongoose
  .connect(process.env.MONGO_URI)
  .then((conn) => {
    console.log("DB connected successfully");
    dbInstance = conn
  })
  .catch((err) => console.error("DB connection failed", err));

export default dbInstance