import { Router } from "express";
<<<<<<< HEAD
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
=======
import { addAuteur, deleteAuteur, getAllAuteur, getAuteurProfile, updateAuteur } from "../controllers/auteurControllers.js";

>>>>>>> 80cd90aedf20a33d94ae169d9939c22187feaf5b

const auteurRoute = Router();

auteurRoute
<<<<<<< HEAD
  .get("/", getAllAuteur)
  .get("/:id_auteur", getAuteurProfile)
  .post("/", createAuteurValidation, validate, addAuteur)
  .put("/:id_auteur", updateAuteurValidation, validate, updateAuteur)
  .delete("/:id_auteur", deleteAuteur);
=======
.get("/", getAllAuteur)
.get("/:id", getAuteurProfile)
.post("/", addAuteur)
.delete("/:id", deleteAuteur)
.put("/:id", updateAuteur)
>>>>>>> 80cd90aedf20a33d94ae169d9939c22187feaf5b

export default auteurRoute;