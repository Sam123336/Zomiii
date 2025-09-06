const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const foodpartnerModel = require('../models/foodpartner.model');
async function register (req, res) {
    try {
        const {fullName, email, password} = req.body;
        const userAlreadyExists = await userModel.findOne({ email });
        if (userAlreadyExists) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            fullName,
            email,
            password: hashPassword
        });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true });
        res.status(201).json({
            message: "User registered successfully",
            user: {
                _id: user._id,
                email: user.email,
                fullName: user.fullName,
            }
        });
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}

async function login (req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true });
        res.json({
            message: "Login successful",
            user: {
                _id: user._id,
                email: user.email,
                fullName: user.fullName,
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }

}
function logout (req, res) {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
}

async function registerFoodPartner (req, res) {
    try {
    const { fullName, email, password } = req.body;
    const isAccountAlreadyExists = await foodpartnerModel.findOne({ email });
    if (isAccountAlreadyExists) {
        return res.status(400).json({
            message: "Food Partner already exists"
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const foodPartner = await foodpartnerModel.create({
        fullName,
        email,
        password: hashedPassword
    });
    const tocken = jwt.sign({ id: foodPartner._id }, process.env.JWT_SECRET);
    res.cookie('token', tocken, { httpOnly: true });
    res.send(201).json({
        message: "Food Partner registered successfully",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            fullName: foodPartner.fullName,
        }
    });
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Something went wrong"
        });

    }
}
async function loginFoodPartner (req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }
        const foodPartner = await foodpartnerModel.findOne({ email });
        if (!foodPartner) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, foodPartner.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: foodPartner._id }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true });
        res.json({
            message: "Login successful",
            foodPartner: {
                _id: foodPartner._id,
                email: foodPartner.email,
                fullName: foodPartner.fullName,
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }

}
async function logoutFoodPartner (req, res) {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
}
module.exports = {
    register,
    login,
    logout,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
};