import User from "../models/user.model.js";

export const register = async(req , res) =>
{
    try {
    const newUser = new User({
     username: "test_123",
     email: "test@email.com",
    password: "123456",
    country: "india",
    phone: "123456789"
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