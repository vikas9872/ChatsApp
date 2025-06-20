import express from "express";
import {login, logout, signUp} from "../controllers/authcontroller.js"

const authrouter=express.Router()

authrouter.post("/signup",signUp)
authrouter.post("/login",login)
authrouter.get("/logout",logout)

export default authrouter;