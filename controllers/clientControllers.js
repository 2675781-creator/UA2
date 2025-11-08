import Client from "../modeles/Client.js"

//Lecture de la listes des Clients
export async function getAllClient(req, res) {

    try{
        const clients = await Client.findAll()
        res.status(200).json({message:"liste de tous les clients", data: clients})

    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}

// Création d'un Client
export const addClient= async (req, res) =>{
    const newClient = req.body
    try{
        const client = await Client.create(newClient)
        res.status(201).json({message: "Client ajoute avec succes", client})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

//suppression d'un Client
export const deleteClient = async(req, res) => {
    const {id} = req.params
    if (!id) return res.status(404).json({error:true, message: "L'id du Client est requis"})
    try {
        const result = await Client.destroy({where: {id}})
        res.status(200).json({message: `Le client ${id} a été supprimé avec succes`})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//voir le profil d'un Client par son numéro
export const getClientProfile = async (req, res) => {
    const {id} = req.params

    try{
        const client = await Client.findByPk(id)
        res.status(200).json({message:"Profil d'un Client", data:client})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//mise a jour d'un client
export const updateClient = async (req, res) => {
    let {id} = req.params
    const updatedClient = {nom:req.body.nom, prenom:req.body.prenom, article_prefere:req.body.article_prefere}
    
    if (!id) return res.status(404).json({error:true, message: "L'id du Client est requis"})
    try {
        const result = await Client.update(updatedClient, {where : {id}})
        res.status(200).json(result)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }

}