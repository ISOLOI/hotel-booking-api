import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use("/api/auth" , authRouter)

app.use((err , req , res , next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
      success : false ,
      status: errorStatus,
      message : errorMessage ,
      stack : err.stack ,
  });
});


app.listen(PORT, () => console.log(`listenting on ${PORT}`))