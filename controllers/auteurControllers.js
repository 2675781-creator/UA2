import Auteur from "../modeles/Auteur.js"

//Lecture de la listes des auteurs
export async function getAllAuteur(req, res) {

    try{
        const auteurs = await Auteur.findAll()
        res.status(200).json({message:"liste de tous les auteurs", data: auteurs})

    }
    
    catch(error){
        res.status(404).json({message:error.message})
    }
}

// Création d'un auteur

export const addAuteur= async (req, res) =>{
    const newAuteur = req.body
    try{
        const auteur = await Auteur.create(newAuteur)
        res.status(201).json({message: "Auteur ajoute avec succes", auteur})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

//suppression d'un auteur
export const deleteAuteur = async(req, res) => {
    const {id} = req.params
    if (!id) return res.status(404).json({error:true, message: "L'id de l'auteur est requis"})
    try {
        const result = await Auteur.destroy({where: {id}})
        res.status(200).json({message: `L'auteur ${id} a été supprimé avec succes`})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//voir le profil d'un auteur par son numéro
export const getAuteurProfile = async (req, res) => {
    const {id} = req.params

    try{
        const auteur = await Auteur.findByPk(id)
        res.status(200).json({message:"Profil d'un auteur", data:auteur})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//mise a jour d'un auteur
export const updateAuteur = async (req, res) => {
    let {id} = req.params
    const updatedAuteur = {nom:req.body.nom, prenom:req.body.prenom, age:req.body.age, nationalite:req.body.nationalite, langue:req.body.langue}
    
    if (!id) return res.status(404).json({error:true, message: "L'id de l'auteur est requis"})
    try {
        const result = await Auteur.update(updatedAuteur, {where : {id}})
        res.status(200).json(result)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }

}