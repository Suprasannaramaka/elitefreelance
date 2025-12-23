import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);
const connect  = async () => {
try {
  await mongoose.connect(process.env.MONGODB);
  console.log("Successfully connected to MongoDB");
}
catch (error) {
  console.log(error);
}
};
app.use("/api/users", userRoute);
app.listen(3000 , () => {
  connect();
    console.log("Connected to backend!");
})