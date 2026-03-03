import express from "express";
import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['superadmin', 'admin', 'user'],
        default:'user'
    }
}, {timestamps:true});

export default mongoose.model("users", usersSchema);