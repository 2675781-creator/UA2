import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import database from './config/connection.js'
//import { addArticle, deleteArticle, getAllArticle, getArticleProfile, updateArticle } from './controllers/articleControllers.js';

import auteurRoute from './routes/auteurRoute.js';
import categorieRoute from './routes/categorieRoute.js';
import clientRoute from './routes/clientRoute.js';
import employeRoute from './routes/employeRoute.js';
import empruntRoute from './routes/empruntRoute.js';
import articleRoute from './routes/articleRoute.js';

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

app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API UA2 !");
});

app.use("/api/articles", articleRoute);
app.use("/api/categories", categorieRoute);
app.use("/api/clients", clientRoute);
app.use("/api/employes", employeRoute)
app.use("/api/auteurs", auteurRoute);
app.use("/api/emprunts", empruntRoute)


// Creation des tables
//database.sync({ alter: true })  //alter: modifie une table
                                //force : refaire toute la table

app.listen(PORT, () => {
    console.log(`Le serveur est demarre sur le port ${PORT}`);
})