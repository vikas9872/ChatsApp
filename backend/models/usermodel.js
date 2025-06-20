import mongoose from "mongoose";

// user schema
const userSchema=new mongoose.Schema(
    {
        name:{
            type: String,
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        image:{
            type: String,
            default:""
        }
    },
    {
        timestamps: true
    }
);

// user model
const User=mongoose.model("User",userSchema);

export default User;