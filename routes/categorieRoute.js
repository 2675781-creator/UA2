import { Router } from "express";
import { addCategorie, deleteCategorie, getAllCategorie, getCategorieProfile, updateCategorie } from "../controllers/categorieControllers.js";

const categorieRoute = Router();

categorieRoute
.get("", getAllCategorie)
.get("/:id", getCategorieProfile)
.post("/", addCategorie)
.delete("/:id", deleteCategorie)
.put("/:id", updateCategorie)

export default categorieRoute;