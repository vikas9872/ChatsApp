import genToken from '../config/token.js'
import User from '../models/usermodel.js'
import bcrypt from 'bcrypt'
export const signUp = async (req, res) => {
    try {
        // get the details from frontend(req.body)
        const { username, email, password } = req.body
        // check if user exists
        const checkUserByUsername = await User.findOne({ username })
        if (checkUserByUsername) {
            return res.status(400).json({ message: "Username already exists" })
        }
        const checkUserByEmail = await User.findOne({ email })
        if (checkUserByEmail) {
            return res.status(400).json({ message: "Useremail already exists" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be atleast 6 characters" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // create the user
        const user = await User.create({ username, email, password: hashedPassword })
        // token generation
        const tkn = await genToken(user._id);
        // storing token in cookies
        res.cookie("token", tkn, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "Strict",
            secure: false
        })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({ message: `Sign Up Error: ${error}` })
    }
}

export const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Create the account. User doesnot exist" })
        }
        // compare the passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" })
        }
        // token generation
        const tkn = await genToken(user._id);
        // storing token in cookies
        res.cookie("token", tkn, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "Strict",
            secure: false
        })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({ message: `Log in Error: ${error}` })
    }
}

export const logout=async(req,res)=>{
    try{
        res.clearCookie("token")
        return res.status(200).json({message:"log out successfully"})
    }
    catch(error){
        return res.status(400).json({ message: `Sign Up Error: ${error}` })
    }
}