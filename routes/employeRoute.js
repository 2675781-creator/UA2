import { Router } from "express";
<<<<<<< HEAD
import {
  addEmploye,
  deleteEmploye,
  getAllEmploye,
  getEmployeProfile,
  updateEmploye,
} from "../controllers/employeControllers.js";

import {
  createEmployeValidation,
  updateEmployeValidation,
} from "../validations/employeValidator.js";

import validate from "../middlewares/validationResult.js";

const employeRoute = Router();

employeRoute
  .get("/", getAllEmploye)
  .get("/:id_employe", getEmployeProfile)
  .post("/", createEmployeValidation, validate, addEmploye)
  .put("/:id_employe", updateEmployeValidation, validate, updateEmploye)
  .delete("/:id_employe", deleteEmploye);
=======
import { addEmploye, deleteEmploye, getAllEmploye, getEmployeProfile, updateEmploye } from "../controllers/employeControllers.js";


const employeRoute = Router()

employeRoute
.get("/", getAllEmploye)
.get("/:id", getEmployeProfile)
.post("/", addEmploye)
.delete("/:id", deleteEmploye)
.put("/:id", updateEmploye)
>>>>>>> 80cd90aedf20a33d94ae169d9939c22187feaf5b

export default employeRoute;