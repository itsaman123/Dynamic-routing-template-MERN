const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const morgan=require("morgan")
const colors=require('colors')
const port=process.env.PORT ||8000
const connectDB=require('./config/db')

dotenv.config()
// connectDB();
const app=express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes 
app.use('/api/v1/user',require("./routes/userRoutes"));


app.listen(port,()=>{
    console.log("listening at 3000".bgMagenta)
})