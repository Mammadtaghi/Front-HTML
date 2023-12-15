import { userModel } from "./../Models/userModel.js"
import bcrypt from "bcrypt";


// User Register

export const userRegister = async (req,res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const user = new userModel({
            username:req.body.username,
            password:hashedPassword
        })
        await user.save()
        res.status(200).send("User Created")
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// User Login

export const userLogin = async (req,res)=>{
    try {
        const user = await userModel.findOne({username:req.body.username})
        if (user && await bcrypt.compare(req.body.password,user.password)) {
            req.session.userId = user._id
            res.status(200).send("You Signed In Successfully")
        }
        else{
            res.status(404).send("Username or Password is wrong!")
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// Get All Users

export const userGetAll = async (req,res)=>{
    try {
        const users = await userModel.find({})
        res.status(202).send(users)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// Get User By Id

export const userGetById = async (req,res)=>{
    try {
        const user = await userModel.findById(req.params.id)
        res.status(201).send(user)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// Delete User By Id

export const userDeleteById = async (req,res)=>{
    try {
        const user = await userModel.findByIdAndDelete(req.params.id)
        res.status(201).send(user)
    } catch (error) {
        res.status(500).json({message:error})
    }
}