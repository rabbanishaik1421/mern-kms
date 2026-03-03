import users from "../models/users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

/* LOGIN USER */
export const getuser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }

        const result = await users.findOne({ email });

        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, result.password);

        if(!isMatch){
            return res.status(401).json({message:"Invalid password"});
        }

        const token = jwt.sign(
            {id:result._id, email:result.email},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )
        
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: result._id,
                email: result.email
            }
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


/* GET ALL USERS */
export const getusers = async (req, res) => {
    try {
        const result = await users.find();

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


/* ADD USER */
export const adduser = async (req, res) => {
    try {
        const { firstname, lastname, phone, email, password } = req.body;

        if (!firstname || !email || !password) {
            return res.status(400).json({ message: "Required fields missing" });
        }

        const existingUser = await users.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newUser = new users({
            firstname,
            lastname,
            phone,
            email,
            password
        });

        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: newUser
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};