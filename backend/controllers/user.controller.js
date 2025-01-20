import mongoose from "mongoose";
import User from "../models/user.model.js";

export const registerUser = async (req,res) => {
    const user = req.body;
    if(!user.userName || !user.firstName || !user.email || !user.password){
        res.status(400).json({success: false, message: 'Please provide all details'})
    }
    const newUser = new User(user);
    try{
       
    }
    catch(errror){

    }
}
