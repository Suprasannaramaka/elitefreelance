import User from "../models/user.model.js";

export const register = async(req , res) =>
{
    try {
        const newUser = new User({
     username: "ramakasuprasanna",
     email: "ramakasuprasanna@gmail.com",
     country: "India",
     password: "suprasanna123",
    });
    await newUser.save();
    res.status(201).send({message: "User has been created successfully"});
}
catch(error)
{
    res.status(500).send({message: "Something went wrong"});
}

}