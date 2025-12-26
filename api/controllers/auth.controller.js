import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async(req , res) =>
{
    try {
    const  hash = bcrypt.hashSync(req.body.password , 12);
    const newUser = new User({
       ...req.body,
       password: hash
    });
    await newUser.save();
    res.status(201).send({message: "User has been created successfully"});
}
catch (error) {
  console.error("REGISTER ERROR:", error);
  res.status(500).json({
    message: error.message || "Internal Server Error",
  });
}
}