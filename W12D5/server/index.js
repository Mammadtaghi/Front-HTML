import cors from "cors";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import userRoute from "./src/Routes/userRoute.js";


const app = express()

app.use(express.json())
app.use(cors())
app.use(session({
    secret:"sdjh323523hkjf",
    resave:false,
    saveUninitialized:true
}))

const PORT = 3000
const url = 'mongodb+srv://albinoni1423:xeshil@cluster0.wsbsjfu.mongodb.net/'

app.use("/", userRoute)

mongoose.connect(url).catch(err=>console.log(err))

app.listen(PORT, () => {
    console.log(`Ehmed Salam app listening on port ${PORT}`)
})
