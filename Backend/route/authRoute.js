import express from 'express';
import { login, logOut, signup } from '../controller/authController.js';

const authRoute = express.Router();

authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.get("/logout", logOut);

export default authRoute;
