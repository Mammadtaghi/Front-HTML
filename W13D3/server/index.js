import fileupload from "express-fileupload";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import express from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

// dotenv.config()

// const PORT = process.env.PORT
// const PASSWORD = process.env.PASSWORD
// const URL = process.env.CON_URL.replace("<password>", PASSWORD)

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(express.json())
app.use(fileupload())
app.use(cors())

const __dirname = path.resolve()

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// app.post('/upload', function (req, res) {

//     const file = req.files.image

//     console.log(file);

//     res.send('OK!')
// });


app.post('/upload', (req, res) => {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    sampleFile = req.files;
    // console.log(sampleFile);

    for (const key in sampleFile) {
        // console.log(sampleFile[key].name)
        uploadPath = path.join( __dirname , 'src', 'Images' , sampleFile[key].name)
    
        sampleFile[key].mv(uploadPath, function (err) {
            if (err)
                return res.status(500).send(err);
    
        });
    }
    res.send('File uploaded!');

});

// mongoose.connect(URL).catch((err)=>console.log(err))

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
})
