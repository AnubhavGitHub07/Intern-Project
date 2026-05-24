const User = require("../models/userModel");
const bcrypt = require("bcryptjs");


const registerUser = async (req, res) => {
    try{
        const{email , name , password } = req.body;
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({
                message:"User Already Exists"
            });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password , salt);

        const newUser = await User.create({
            email,
            name,
            password: hashedPassword,
        });

        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            
        });


    } catch( error ){
        res.status(500).json({
            message: error.message,
        });
    }
  
};

module.exports = {
    registerUser,
};