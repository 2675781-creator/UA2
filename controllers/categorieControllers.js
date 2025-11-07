import {Categorie} from "../modeles/Categorie.js"

//Lecture de la listes des Categories
export async function getAllCategorie(req, res) {

    try{
        const categories = await Categorie.findAll()
        res.status(200).json({message:"liste de tous les Categories", data: categories})
    }
    
    catch(error){
        res.status(404).json({message:error.message})
    }
}

// Création d'une Categorie

export const addCategorie= async (req, res) =>{
    const newCategorie = req.body
    try{
        const categorie = await Categorie.create(newCategorie)
        res.status(201).json({message: "Categorie ajoute avec succes", categorie})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

//suppression d'un Categorie
export const deleteCategorie = async(req, res) => {
    const {numero} = req.params
    if (!numero) return res.status(404).json({error:true, message: "le numero de la categorie est requis"})
    try {
        const result = await Categorie.destroy({where: {numero}})
        res.status(200).json({message: `La Categorie ${numero} a été supprimé avec succes`})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//voir le profil d'un Categorie par son numéro
export const getCategorieProfile = async (req, res) => {
    const {numero} = req.params

    try{
        const categorie = await Categorie.findByPk(numero)
        res.status(200).json({message:"Profil d'un Categorie", data:categorie})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//mise a jour d'un Categorie
export const updateCategorie = async (req, res) => {
    let {numero} = req.params
    const updatedCategorie = {nom_categorie:req.body.nom_categorie, description:req.body.description}
    
    if (!numero) return res.status(404).json({error:true, message: "le numero de la categorie est requis"})
    try {
        const result = await Categorie.update(updatedCategorie, {where : {numero}})
        res.status(200).json(result)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }

}