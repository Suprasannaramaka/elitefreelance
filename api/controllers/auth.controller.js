import User from "../models/user.model.js";

export const register = async(req , res) =>
{
    try {
        const newUser = new User({
     username: "test",
     email: "test",
     password: "test",
     country: "test",
    })
}
catch(error)
{
    res.status(500).send({message: error.message});
}
}