import { Router } from "express";
<<<<<<< HEAD
import {
  addCategorie,
  deleteCategorie,
  getAllCategorie,
  getCategorieProfile,
  updateCategorie,
} from "../controllers/categorieControllers.js";

import {
  createCategorieValidation,
  updateCategorieValidation,
} from "../validations/categorieValidator.js";

import validate from "../middlewares/validationResult.js";
=======
import { addCategorie, deleteCategorie, getAllCategorie, getCategorieProfile, updateCategorie } from "../controllers/categorieControllers.js";
>>>>>>> 80cd90aedf20a33d94ae169d9939c22187feaf5b

const categorieRoute = Router();

categorieRoute
<<<<<<< HEAD
  .get("/", getAllCategorie)
  .get("/:id_categorie", getCategorieProfile)
  .post("/", createCategorieValidation, validate, addCategorie)
  .put("/:id_categorie", updateCategorieValidation, validate, updateCategorie)
  .delete("/:id_categorie", deleteCategorie);
=======
.get("/", getAllCategorie)
.get("/:id", getCategorieProfile)
.post("/", addCategorie)
.delete("/:id", deleteCategorie)
.put("/:id", updateCategorie)
>>>>>>> 80cd90aedf20a33d94ae169d9939c22187feaf5b

export default categorieRoute;