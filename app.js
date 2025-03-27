const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');


dotenv.config();
const connectDB = require("./db/conn.js");
connectDB();

const allowedOrigins = [
    "https://donation-point-git-main-omkartuptewars-projects.vercel.app", // Your deployed frontend
    "http://localhost:3000", // Local development
  ];
  
  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
    })
  );
app.use(express.json());
const User=require('./model/userSchema');

app.use(require('./router/auth'));

const PORT=process.env.PORT;

 
app.listen(PORT,()=>{
console.log(`server is running at port ${PORT}`);
})