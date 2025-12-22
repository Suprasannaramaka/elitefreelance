import express from "express";
import mongoose from "mongoose";

const app = express()
try {
  await mongoose.connect('mongodb+srv://suprasannaramaka:radhavittal@cluster0.j6qqlj6.mongodb.net/?appName=Cluster0');
} catch (error) {
  handleError(error);
}
app.listen(3000 , () => {
    console.log("Connected to backend!")
})