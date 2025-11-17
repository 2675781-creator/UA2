import { Router } from "express";
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

export default empruntRoute;