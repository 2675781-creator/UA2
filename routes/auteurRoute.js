import { Router } from "express";
import {
  addAuteur,
  deleteAuteur,
  getAllAuteur,
  getAuteurProfile,
  updateAuteur,
} from "../controllers/auteurControllers.js";

import {
  createAuteurValidation,
  updateAuteurValidation,
} from "../validations/auteurValidator.js";

import validate from "../middlewares/validationResult.js";

const auteurRoute = Router();

auteurRoute
  .get("/", getAllAuteur)
  .get("/:id_auteur", getAuteurProfile)
  .post("/", createAuteurValidation, validate, addAuteur)
  .put("/:id_auteur", updateAuteurValidation, validate, updateAuteur)
  .delete("/:id_auteur", deleteAuteur);

export default auteurRoute;