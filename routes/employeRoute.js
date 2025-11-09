import { Router } from "express";
import { addEmploye, deleteEmploye, getAllEmploye, getEmployeProfile, updateEmploye } from "../controllers/employeControllers.js";


const employeRoute = Router()

employeRoute
.get("/", getAllEmploye)
.get("/:id", getEmployeProfile)
.post("/", addEmploye)
.delete("/:id", deleteEmploye)
.put("/:id", updateEmploye)

export default employeRoute;