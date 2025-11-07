import Auteur from "./Auteur.js";
import Article from "./Article.js";
import Categorie from "./Categorie.js";
import Client from "./Client.js";
import Employe from "./Employe.js";
import Emprunt from "./Emprunt.js";


//un auteur a plusieurs articles
Auteur.hasMany(Article)
Article.belongsTo(Auteur)

//un article peut se situe dans plusieurs catégories
Categorie.hasMany(Article)
Article.belongsTo(Categorie)

//Un article peut etre gere par plusieurs employe
Article.hasMany(Employe)
Employe.belongsTo(Article)

//plusieurs articles peuvent etre emprunter par plusieurs clients
Article.belongsToMany(Emprunt, {through: 'ArticleEmprunt'})
//plusieurs clients peuvent emprunter plusieurs articles
Client.belongsToMany(Emprunt, {through: 'ClientEmprunt'})


export {Auteur, Article, Categorie, Client, Employe, Emprunt}

