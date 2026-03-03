import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import { getuser, getusers, adduser } from "./controllers/usersController.js";

const app = express();
connectDB();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/users", getusers);          // GET all users
app.post("/users", adduser);          // Register user
app.post("/users/login", getuser);    // Login

app.listen(3000, () => {
    console.log("App Started at 3000");
});