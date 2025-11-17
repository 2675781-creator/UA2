import { Router } from "express";
<<<<<<< HEAD
import {
  addEmprunt,
  deleteEmprunt,
  getAllEmprunt,
  getEmpruntsByArticle,
  getEmpruntsByClient,
  updateEmprunt,
} from "../controllers/empruntControllers.js";

import {
  createEmpruntValidation,
  updateEmpruntValidation,
} from "../validations/empruntValidator.js";

import validate from "../middlewares/validationResult.js";

const empruntRoute = Router();

empruntRoute
  .get("/", getAllEmprunt)
  .get("/client/:id_client", getEmpruntsByClient)
  .get("/article/:id_article", getEmpruntsByArticle)
  .post("/", createEmpruntValidation, validate, addEmprunt)
  .put("/:id", updateEmpruntValidation, validate, updateEmprunt)
  .delete("/:id", deleteEmprunt);
=======

import { addEmprunt, deleteEmprunt, getAllEmprunt, getEmpruntStatut, updateEmprunt } from "../controllers/empruntControllers.js"


const empruntRoute = Router()

empruntRoute
.get("/", getAllEmprunt)
.get("/:id_client/:id_article", getEmpruntStatut)
.post("/", addEmprunt)
.delete("/:id_client/:id_article", deleteEmprunt)
.put("/:id_client/:id_article", updateEmprunt)
>>>>>>> 80cd90aedf20a33d94ae169d9939c22187feaf5b

export default empruntRoute;