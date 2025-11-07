import { Router } from "express";
import { addAuteur, deleteAuteur, getAllAuteur, getAuteurProfile, updateAuteur } from "../controllers/auteurControllers";


const auteurRoute = Router();

auteurRoute
.get("", getAllAuteur)
.get("/:id", getAuteurProfile)
.post("/", addAuteur)
.delete("/:id", deleteAuteur)
.put("/:id", updateAuteur)

export default auteurRoute;