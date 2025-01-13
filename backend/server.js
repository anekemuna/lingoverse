import express from 'express';

const app = express();

app.get("/products", (req, res) => {
    res.send("Server is ready123");
});

app.listen(8888, () =>{
    console.log("Server started at http://localhost:8888 hi muna");
});