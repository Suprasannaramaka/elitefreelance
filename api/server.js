import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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
connect();
app.listen(8080 , () => {
    console.log("Connected to backend!")
})