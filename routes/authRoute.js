// routes/authRoute.js
import { Router } from "express";
import { register, login } from "../controllers/authController.js";

const authRoute = Router();

// Optionnel : inscription
authRoute.post("/register", register);

// Obligatoire : login
authRoute.post("/login", login);

export default authRoute;