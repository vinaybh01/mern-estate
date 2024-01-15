import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on the port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
