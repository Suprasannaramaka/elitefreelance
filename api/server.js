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
app.use(express.json());
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/auth", authRoute);
app.listen(8080 , () => {
  connect();
    console.log("Connected to backend!");
})