import mongoose from "mongoose";
import User from "../models/user.model.js";
import { hashPassword } from '../utils/hashPassword.js';
import { verifyUser } from "../utils/verifyUser.js";

export const registerUser = async (req,res) => {
    const requestObj = req.body;
    if(!requestObj.userName || !requestObj.firstName || !requestObj.email || !requestObj.password){
        res.status(400).json({success: false, message: 'Please provide all details'})
    }
    //hashing the password before adding the user to database
    const newUser = new User(requestObj);
    await hashPassword(requestObj.password)
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
export const loginUser = async (req, res) => {
    const requestObj = req.body;
    //check for empty username or password
    if(!requestObj.userName || !requestObj.password){
        res.status(400).json({success: false, message: 'Please provide all details'})
    }
    try{
        //method to verify username email and password from database
        const userIsValid = await verifyUser(requestObj.userName, requestObj.password)
        //check if matches
        if(userIsValid){
            return res.status(200).json({succes: true, message: 'Login successful'})
        }
        return res.status(401).json({success: false, message: 'Invalid Login Credentials'})
    }
    catch(error){
        console.error("Error in logging user in:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};
export const updateUser = async (req, res) => {};
export const deleteUser = async (req, res) => {};

