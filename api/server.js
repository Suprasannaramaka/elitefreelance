import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express()
dotenv.config();
try {
  await mongoose.connect(process.env.MONGODB);
  console.log("Successfully connected to MongoDB");
} catch (error) {
  console.log(error);
}
app.listen(3000 , () => {
    console.log("Connected to backend!")
})