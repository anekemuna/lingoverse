import mongoose from "mongoose";

// schema for users collections
const userSchema = new mongoose.Schema(
    {
        userName:{
            type: String,
            required: true
        },
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: false
        },
        email:{
            type: String,
            required: false
        },
        password:{
            type: String,
            required: true
        }, 
    }, 
    {
        timestamps: true // createdAt, updatedAt
    }
);

const User = mongoose.model("User", userSchema);

export default User;