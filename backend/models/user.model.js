import mongoose from "mongoose";
import bcrypt from "bcrypt";

// schema for users collections
const userSchema = new mongoose.Schema(
    {
        userName:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
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
            required: true,
            unique: true,
            lowercase: true
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

//wait for next() and then save the password to database
userSchema.pre('save', async function (next){
    //if password is not modified, return next() to continue
    if(!this.isModified('password')) return next();
    //else hash the password and then return next()
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default User;