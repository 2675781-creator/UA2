import Article from "../modeles/Article.js";

//Lecture de la listes des articles
export async function getAllArticle(req, res) {

    try{
        const articles = await Article.findAll()
        res.status(200).json({message:"liste de tous les articles", data: articles})

    }
    catch(error){
        res.status(404).json({message:error.message})
    } 
}


// Création d'un article
export const addArticle= async (req, res) =>{
    const newArticle = req.body
    try{
        const article = await Article.create(newArticle)
        res.status(201).json({message: "Article ajoute avec succes", article})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}


//suppression d'un article
export const deleteArticle = async(req, res) => {
    const {id} = req.params
    if (!id) return res.status(404).json({error:true, message: "L'id de l'article est requis"})
    try {
        const result = await Article.destroy({where: {id_article: id}});
        res.status(200).json({message: `L'article ${id} a été supprimé avec succes`})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//voir le profil d'un article par son numéro
export const getArticleProfile = async (req, res) => {
    const {id} = req.params

    try{
        const article = await Article.findByPk(id)
        res.status(200).json({message:"Profil d'un article", data:article})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

//mise a jour d'un article
export const updateArticle = async (req, res) => {
    let {id} = req.params
    const updatedArticle = {titre:req.body.titre, date_publication:req.body.date_publication, status:req.body.status, quantite:req.body.quantite}
    
    if (!id) return res.status(404).json({error:true, message: "L'id de l'article est requis"})
    try {
        const result = await Article.update(updatedArticle, {where : {id_article: id}});
        res.status(200).json(result)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}