import { hashPassword, compasrePassword } from "../helper/authHelper.js";
import userModel from "../model/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {

    try {
        const { name, email, password, phone, address, answer ,role} = req.body;

        //  Check all the value is Not Empty
        if (!name || !email || !password || !phone || !address || !answer || !role) {

            return res.send("Something is Missing Some values")
        }

        // Case -2: If User Already Register
        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Register please Login"
            })
        }

        // Case -2: Create User if User Not Present
        const hashPass = await hashPassword(password);

        const user = await new userModel({ name, email, phone, address, password: hashPass, answer,role })

        await user.save();

        res.status(201).send({
            success: true,
            message: "user Register Successfully",
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in register",
            error
        })
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email and password"
            })
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "email and password not match"
            })
        }


        const match = await compasrePassword(password, user.password)

        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid password"
            })
        }

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.status(200).send({
            success: true,
            message: "Login Sucessfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Login"
            , error
        })
    }

}

export const forgetPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;

        if (!email) {
            res.status(400).send({ message: "Email is required" })
        }
        if (!answer) {
            res.status(400).send({ message: "question is required" })
        }
        if (!newPassword) {
            res.status(400).send({ message: "new Password is required" })
        }
        console.log("forget ho raha h")
        // check 
        const user = await userModel.findOne({ email, answer })

        // validation
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "Wrong Email or Answer",
            })
        }
        // Encrypt the password 
        const hashed = await hashPassword(newPassword)

        await userModel.findByIdAndUpdate(user._id, { password: hashed })
        res.status(200).send({
            success: true,
            message: "Password  Reset Successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Somthing went Wrong",
            error
        })

    }
}

export const testController = (req, res) => {
    console.log("protectedRoute")
    res.send("protected Routes")
}