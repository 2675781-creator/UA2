import { Router } from "express";

import { addEmprunt, deleteEmprunt, getAllEmprunt, getEmpruntStatut, updateEmprunt } from "../controllers/empruntControllers.js"


const empruntRoute = Router()

empruntRoute
.get("", getAllEmprunt)
.get("/:id", getEmpruntStatut)
.post("/", addEmprunt)
.delete("/:id", deleteEmprunt)
.put("/:id", updateEmprunt)

export default empruntRoute;