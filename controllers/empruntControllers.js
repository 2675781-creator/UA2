import {Emprunt} from "../modeles/Emprunt.js"

//Lecture de la listes des emprunts
export async function getAllEmprunt(req, res) {

    try{
        const emprunts = await Emprunt.findAll()
        res.status(200).json({message:"liste de tous les emprunts", data: employes})

    }
    
    catch(error){
        res.status(404).json({message:error.message})
    }
}

// Création d'un emprunt

export const addEmprunt= async (req, res) =>{
    const newEmprunt = req.body
    try{
        const emprunt = await Employe.create(newEmprunt)
        res.status(201).json({message: "Employe ajoute avec succes", emprunt})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

//suppression d'un Emprunt
export const deleteEmprunt = async(req, res) => {
    const {id_client, id_article} = req.params
    if (!id_client || !id_article) return res.status(404).json({error:true, message: "id_client et id_article sont requis"});
    try {
        const result = await Emprunt.destroy({where: {id_client, id_article}});
        res.status(200).json({message: `L'emprunt a été supprimé avec succes`})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//voir un emprunt par son numéro
export const getEmpruntStatut = async (req, res) => {
    const {id_client, id_article} = req.params
    try{
        const Emprunt = await Emprunt.findByPk(id_client, id_article)
        res.status(200).json({message:"statut d'un emprunt", data:Emprunt})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//mise a jour d'un Emprunt
export const updateEmprunt = async (req, res) => {
    let {numero} = req.params
    const updatedEmprunt = { }
    
    if (!numero) return res.status(404).json({error:true, message: "le numero de l'employe et/ou le numero de l'article est requis"})
    try {
        const result = await Emprunt.update(updatedEmprunt, {where : {numero}})
        res.status(200).json(result)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }

}