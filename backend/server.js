import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import userRouter from './auth/user.js'
import connectdb from './db/config.js'
import authRouter from './auth/auth.js';
import cors from 'cors';
const app = express()
app.use(express.json())
 
 app.use(cors())
 connectdb();


 app.use('/api/auth',authRouter);

 app.use('/api/user',userRouter);
 
app.listen(4001)