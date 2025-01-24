import mongoose from "mongoose";
import User from "../models/user.model.js";
import { hashPassword } from '../utils/hashPassword.js';

export const registerUser = async (req,res) => {
    const user = req.body;
    if(!user.userName || !user.firstName || !user.email || !user.password){
        res.status(400).json({success: false, message: 'Please provide all details'})
    }
    //hashing the password before adding the user to database
    const newUser = new User(user);
    await hashPassword(user.password)
        .then(hashed => newUser.password = hashed)
        .catch(err => console.error(err));
    try{
        await newUser.save();
        res.status(201).json({success: true, data: newUser});
    } catch(error){
        console.error("Error in creating user:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};
export const loginUser = async (req, res) => {};
export const updateUser = async (req, res) => {};
export const deleteUser = async (req, res) => {};
