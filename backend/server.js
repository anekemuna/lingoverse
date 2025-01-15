import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get("/home", (req, res) => {
    res.send("Server is ready123");
});

app.listen(8888, () =>{
    connectDB();
    console.log("Server started at http://localhost:8888 hi muna");
});