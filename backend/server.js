import express from 'express';

const app = express();

app.get("/home", (req, res) => {
    res.send("Server is ready123");
});

app.listen(8888, () =>{
    console.log("Server started at http://localhost:8888 hi muna");
});