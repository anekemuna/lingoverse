import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body
app.use("/home", userRoutes);

// app.get("/home", (req, res) => {
//     res.send("Server is ready123");
// });

app.listen(8888, () => {
    connectDB();
    console.log("Server started at http://localhost:8888");
});