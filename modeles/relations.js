import Auteur from "./Auteur.js";
import Article from "./Article.js";
import Categorie from "./Categorie.js";
import Client from "./Client.js";
import Employe from "./Employe.js";
import Emprunt from "./Emprunt.js";


//un auteur a plusieurs articles
Auteur.hasMany(Article, { foreignKey: 'id_auteur'});
Article.belongsTo(Auteur, { foreignKey: 'id_auteur'})

//un article peut se situe dans plusieurs catégories
Categorie.hasMany(Article, { foreignKey: 'id_categorie'});
Article.belongsTo(Categorie, {foreignKey: 'id_categorie'});

//Un article peut etre gere par plusieurs employe
Employe.hasMany(Article, { foreignKey: 'id_article'})
Article.belongsTo(Employe, { foreignKey: 'id_article'});

//plusieurs articles peuvent etre emprunter par plusieurs clients
Emprunt.belongsTo(Client, {foreignKey: 'id_client'})
//plusieurs clients peuvent emprunter plusieurs articles
Client.hasMany(Emprunt, {foreignKey: 'id_client'})

Article.hasMany(Emprunt, {foreignKey: 'id_article'});
Emprunt.belongsTo(Article, {foreignKey: 'id_article'});

export {Auteur, Article, Categorie, Client, Employe, Emprunt}

