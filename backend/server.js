import express from 'express'
import mongoose from 'mongoose';
import connectDB from './Config/db.js';


import dotenv from 'dotenv'
dotenv.config()

const port=process.env.PORT || 5000;
connectDB()  //connection to mongo db

const app=express()

app.get('/',(req,res) => {
    res.send('hello')
})

app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})