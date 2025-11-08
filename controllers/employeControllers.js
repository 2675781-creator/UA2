import {Employe} from "../modeles/Employe.js"

//Lecture de la listes des employes
export async function getAllEmploye(req, res) {

    try{
        const employes = await Employe.findAll()
        res.status(200).json({message:"liste de tous les employes", data: employes})

    }
    
    catch(error){
        res.status(404).json({message:error.message})
    }
}

// Création d'un Employe

export const addEmploye= async (req, res) =>{
    const newEmploye = req.body
    try{
        const employe = await Employe.create(newEmploye)
        res.status(201).json({message: "Employe ajoute avec succes", employe})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

//suppression d'un Employe
export const deleteEmploye = async(req, res) => {
    const {id} = req.params
    if (!id) return res.status(404).json({error:true, message: "L'id de l'employe est requis"})
    try {
        const result = await Employe.destroy({where: {id}})
        res.status(200).json({message: `L'employe ${id} a été supprimé avec succes`})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//voir le profil d'un Employe par son numéro
export const getEmployeProfile = async (req, res) => {
    const {id} = req.params

    try{
        const Employe = await Employe.findByPk(id)
        res.status(200).json({message:"Profil d'un Employe", data:Employe})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//mise a jour d'un Employe
export const updateEmploye = async (req, res) => {
    let {id} = req.params
    const updatedEmploye = {nom:req.body.nom, prenom:req.body.prenom, age:req.body.age, role:req.body.role, date_embauche:req.body.date_embauche, numero_tache:req.body.numero_tache}
    
    if (!id) return res.status(404).json({error:true, message: "L'id de l'employe est requis"})
    try {
        const result = await Employe.update(updatedEmploye, {where : {id}})
        res.status(200).json(result)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }

}