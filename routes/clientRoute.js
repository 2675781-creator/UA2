import { Router } from "express";
<<<<<<< HEAD
import {
  addClient,
  deleteClient,
  getAllClient,
  getClientProfile,
  updateClient,
} from "../controllers/clientControllers.js";

import {
  createClientValidation,
  updateClientValidation,
} from "../validations/clientValidator.js";

import validate from "../middlewares/validationResult.js";

const clientRoute = Router();

clientRoute
  .get("/", getAllClient)
  .get("/:id_client", getClientProfile)
  .post("/", createClientValidation, validate, addClient)
  .put("/:id_client", updateClientValidation, validate, updateClient)
  .delete("/:id_client", deleteClient);
=======
import { addClient, deleteClient, getAllClient, getClientProfile, updateClient } from "../controllers/clientControllers.js";


const clientRoute = Router()

clientRoute
.get("/", getAllClient)
.get("/:id", getClientProfile)
.post("/", addClient)
.delete("/:id", deleteClient)
.put("/:id", updateClient)
>>>>>>> 80cd90aedf20a33d94ae169d9939c22187feaf5b

export default clientRoute;