import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
dotenv.config();
const app = express();
mongoose.set('strictQuery', true);
const connect  = async () => {
try {
  await mongoose.connect(process.env.MONGO_URI);
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