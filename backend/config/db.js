import mongoose, { connect } from "mongoose";
import createDefaultAdmin from "./createDefaultAdmin.js";

const connectDB = ()=>{
    mongoose.connect("mongodb+srv://rabbanishaik28_db_user:XsGvy4exle6dPJVN@cluster0.kxjwjpf.mongodb.net/kms")
    .then(()=>{
        //Default Admin Creation
        createDefaultAdmin();

        console.log("Super Admin Created");
        
    });
    
    console.log("Database Connected...");
}

export default connectDB;