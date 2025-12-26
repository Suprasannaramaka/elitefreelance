import {User} from "../models/user.model.js";

export const register = async(req , res) =>
{
    try {
    const newUser = new User({
     username: "test",
     email: "test",
     password: "test",
     country: "test",
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