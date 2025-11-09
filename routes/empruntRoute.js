import { Router } from "express";

import { addEmprunt, deleteEmprunt, getAllEmprunt, getEmpruntStatut, updateEmprunt } from "../controllers/empruntControllers.js"


const empruntRoute = Router()

empruntRoute
.get("/", getAllEmprunt)
.get("/:id_client/:id_article", getEmpruntStatut)
.post("/", addEmprunt)
.delete("/:id_client/:id_article", deleteEmprunt)
.put("/:id_client/:id_article", updateEmprunt)

export default empruntRoute;