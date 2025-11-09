import { Router } from "express";
import { addClient, deleteClient, getAllClient, getClientProfile, updateClient } from "../controllers/clientControllers.js";


const clientRoute = Router()

clientRoute
.get("", getAllClient)
.get("/:id", getClientProfile)
.post("/", addClient)
.delete("/:id", deleteClient)
.put("/:id", updateClient)

export default clientRoute;