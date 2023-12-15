import express from "express";
import { userGetAll, userGetById, userLogin, userRegister } from "./../Controllers/userController.js";

const router = express.Router()

router.get("/users", userGetAll);

router.get("/users", userGetById);

router.post("/login", userLogin);

router.post("/register", userRegister);

router.delete("/users", userRegister);

export default router
