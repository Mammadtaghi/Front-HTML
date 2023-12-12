import express from "express";
// const cors = require("cors")
const app = express()
const port = 3000
app.use(express.json());
// app.use(cors())
let counter = 8

let arr = [
    {"id":1 ,"name":"Albinoni"},
    {"id":2 ,"name":"NoName"},
    {"id":3 ,"name":"Freaky"},
    {"id":4 ,"name":"Chris"},
    {"id":5 ,"name":"NoName"},
    {"id":6 ,"name":"NoName"},
    {"id":7 ,"name":"NoName"},
]

app.get('/', (req, res) => {
    res.send(arr)
})

app.get('/:id', (req, res) => {
    console.log(req.params);
    const {id} = req.params
    const item = arr.find((x)=>x.id===+id)
    res.send(item)
})

app.get('*', (req, res) => {
    res.send('wrong page')
})

app.post('/', (req, res) => {
    const NewItem = {
        "id":counter++,
        "name": req.body.name
    }
    arr.push(NewItem)
    res.send(arr)
})

app.put('/:id', (req, res) => {
    const {id} = req.params
    const itemIndex = arr.findIndex((x)=>x.id===+id)
    arr[itemIndex] = {
        "id": +id,
        ...req.body
    }
    res.send(arr)
})

app.delete('/:id', (req, res) => {
    const {id} = req.params
    arr = arr.filter(x=> x.id !== +id)
    res.send(arr)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
