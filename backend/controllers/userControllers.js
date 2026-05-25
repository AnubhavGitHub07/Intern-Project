const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");


const registerUser = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({
                message: "User Already Exists"
            });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

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


    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }

};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body; //fetch the user data

        const user = await User.findOne({ email }); //check whether user exists or not 

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id), //generate token for the user
            });
        }

        else {
            res.status(401).json({ message: "Invalid Credentials", });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
};

const getMe = async(req , res) =>{
    res.status(200).json(req.user);
}

module.exports = {
    registerUser,
    loginUser,
    getMe
};