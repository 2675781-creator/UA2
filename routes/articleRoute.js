import { Router } from "express";
import { addArticle, deleteArticle, getAllArticle, getArticleProfile, updateArticle } from "../controllers/articleControllers.js";


const articleRoute = Router();

articleRoute
.get("/", getAllArticle)
.get("/:id", getArticleProfile)
.post("/", addArticle)
.delete("/:id", deleteArticle)
.put("/:id", updateArticle)

export default articleRoute;