import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import { CheckIfAdmin } from "./src/middleware/CheckAdmin";

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(cors())
const port = 3000

const WriteLogged = (req, res, next) => {
    console.log("Logged<a href='/albinoni'></a>");
    next()
}

const GetTime = (req, res, next) => {
    console.log(new Date(Date.now()));
    next()
}



app.get('/albinoni', WriteLogged, (req, res) => {
    res.send('Hello Albi!')
})

app.get('/products', WriteLogged, GetTime, (req, res) => {
    res.send('Hello World!')
})

app.get('/users', GetTime, (req, res) => {
    res.send('Hello World!')
})

app.post('/users/:id', CheckIfAdmin, (req, res) => {
    res.send('Hello Albinoni!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})