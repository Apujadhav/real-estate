import express from "express";

const app = express();

console.log("test2")

app.listen(8800, () => {
    console.log("Server is running!");
});