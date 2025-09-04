import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import cookieParser from 'cookie-parser';
import authRoute from './route/authRoute.js';
import cors from 'cors';
import userRouter from './route/userRoute.js';
dotenv.config();

const port = process.env.PORT || 8000;
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use("/api/auth", authRoute)
app.use("/api/user", userRouter)

// Connect to MongoDB BEFORE starting the server

connectDB();
app.get('/', (req, res) => {
  res.send("Hello from Server");
});

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
  // console.log("🔗 Mongo URI:", process.env.MONGODB_URL);
});
