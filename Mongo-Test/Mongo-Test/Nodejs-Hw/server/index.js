import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()

const { Schema } = mongoose

const userSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
},{versionKey:false})


const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT
const URL = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

const Users = mongoose.model('users', userSchema)


// Get All Users

app.get('/users', async (req, res) => {
    try {
        const users = await Users.find({})
        res.send(users)
    } catch (error) {
        res.status(404).json({ message: "Nvm" })
    }
})

// Get By ID

app.get('/users/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id)
        res.send(user)
    } catch (error) {
        res.status(404).json({ message: "No User Like That" })
    }
})

// Post

app.post('/users',async (req, res) => {
    try {
        console.log(req.body);
        const newUser = await Users.create([...req.body])
        newUser.save()
        res.send(newUser)
    } catch (error) {
        res.status(404).json({ message: error })
    }
})



// Delete

app.delete('/users/:id', async (req, res) => {
    try {
        const DeletedUser = await Users.findByIdAndDelete(req.params.id)
        res.send(DeletedUser)
    } catch (error) {
        res.status(404).json({ message: error })
    }
})

// Delete All

app.delete('/users', async (req, res) => {
    try {
        const DeletedUser = await Users.deleteMany()
        res.send(DeletedUser)
    } catch (error) {
        res.status(404).json({ message: error })
    }
})


// Put

app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const UpdatedUser = await Users.findByIdAndUpdate(id, { ...req.body })
        res.send(UpdatedUser)
    } catch (error) {
        res.status(404).json({ message: error })
    }

})




mongoose.connect(URL).catch(err => console.log(err))

app.listen(PORT, () => {
    console.log("Salam Server");
})

// He silmek his codes then he wrote them yene