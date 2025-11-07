import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import database from './config/connection.js'
import { addArticle, deleteArticle, getAllArticle, getArticleProfile, updateArticle } from './controllers/articleControllers.js';

//import articleRoute from './routes/articleRoute.js';

const app = express()

//Utilisation des middlewares globaux
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Démarrer le serveur

const ENV = dotenv.config().parsed;

const PORT= ENV.PORT || 8000
console.log("variables d'environement :", ENV);

app.get("/api/article", getAllArticle)
app.get("/api/article", getArticleProfile)
app.post("/api/article", addArticle)
app.delete("/api/article", deleteArticle)
app.put("/api/article", updateArticle)
//app.use("/api/articles", articleRoute)

// Creation des tables
database.sync({ alter: true })  //alter: modifie une table
                                //force : refaire toute la table

app.listen(PORT, () => {
    console.log(`Le serveur est demarre sur le port ${PORT}`)
})