import { Router } from "express";
<<<<<<< HEAD
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  addArticle,
  deleteArticle,
  getAllArticle,
  getArticleProfile,
  updateArticle,
} from "../controllers/articleControllers.js";

import {
  createArticleValidation,
  updateArticleValidation,
} from "../validations/articleValidator.js";

import validate from "../middlewares/validationResult.js";
=======
import { addArticle, deleteArticle, getAllArticle, getArticleProfile, updateArticle } from "../controllers/articleControllers.js";

>>>>>>> 80cd90aedf20a33d94ae169d9939c22187feaf5b

const articleRoute = Router();

articleRoute
<<<<<<< HEAD
  .get("/", getAllArticle)
  .get("/:id_article", getArticleProfile)
  .post("/", createArticleValidation, validate, addArticle)
  .delete("/:id_article", authMiddleware, deleteArticle)
  .put("/:id_article", updateArticleValidation, validate, updateArticle);
=======
.get("/", getAllArticle)
.get("/:id", getArticleProfile)
.post("/", addArticle)
.delete("/:id", deleteArticle)
.put("/:id", updateArticle)
>>>>>>> 80cd90aedf20a33d94ae169d9939c22187feaf5b

export default articleRoute;