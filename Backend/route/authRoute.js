import express from 'express';
import { login, logOut, resetPassword, sendOTP, signup, verifyOTP } from '../controller/authController.js';

const authRoute = express.Router();

authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.get("/logout", logOut);
authRoute.post("/sendotp", sendOTP);
authRoute.post("/verifyotp", verifyOTP);
authRoute.post("/resetpassword", resetPassword);


export default authRoute;
