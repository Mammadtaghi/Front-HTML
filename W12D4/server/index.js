import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config()

const PORT = process.env.PORT
const PASSWORD = process.env.PASSWORD
const URL = process.env.CONNECTION_URL.replace("<password>", PASSWORD)

const app = express()

app.use(cors())
app.use(express.json())

const { Schema } = mongoose

const categorySchema = new Schema({
    name: { type: String, required: true }
})

const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: [{ type:String, required: true }],
    image: { type: String, required: true }
})

const Books = mongoose.model('books', bookSchema)
const Categories = mongoose.model('categories', categorySchema)

// Get All

app.get('/books', async (req, res) => {
    try {
        const books = await Books.find({})
        res.send(books)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

// Get By ID

app.get('/books/:id', async (req, res) => {
    try {
        const book = await Books.findById(req.params.id)
        res.send(book)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

// Post

app.post('/books', async (req, res) => {
    try {
        const newBooks = await Books.create(req.body)
        await newBooks.save()
        res.status(200).json({ message: "book created" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

// Delete By ID

app.delete('/books/:id', async (req, res) => {
    try {
        await Books.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Book Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

// Delete Many

app.delete('/books', async (req, res) => {
    try {
        await Books.deleteMany(req.body)
        res.status(200).json({ message: "Book Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

// Put

app.put('/books/:id', async (req, res) => {
    try {
        await Books.findByIdAndUpdate(req.params.id, { ...req.body })
        res.status(200).json({ message: "Book Updated" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})



mongoose.connect(URL).catch(err => console.log(err))

app.listen(PORT, () => {
    console.log("Server Online");
})
