import express from "express";
import mongoose from "mongoose";

const app = express()
try {
  await mongoose.connect(process.env.MONGODB);
  console.log("Successfully connected to MongoDB");
} catch (error) {
  console.log(error);
}
app.listen(3000 , () => {
    console.log("Connected to backend!")
})