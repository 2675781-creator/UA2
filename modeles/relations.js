import Auteur from "./Auteur.js";
import Article from "./Article.js";
import Categorie from "./Categorie.js";
import Client from "./Client.js";
import Employe from "./Employe.js";
import Emprunt from "./Emprunt.js";


//un auteur a plusieurs articles
Auteur.hasMany(Article, { foreignKey: 'numero_auteur'});
Article.belongsTo(Auteur, { foreignKey: 'numero_auteur'})

//un article peut se situe dans plusieurs catégories
Categorie.hasMany(Article, { foreignKey: 'numero_categorie'});
Article.belongsTo(Categorie, {foreignKey: 'numero_categorie'});

//Un article peut etre gere par plusieurs employe
Article.hasMany(Employe, { foreignKey: 'id_employe'});
Employe.belongsTo(Article, { foreignKey: 'id_employe'})

//plusieurs articles peuvent etre emprunter par plusieurs clients
Article.belongsToMany(Emprunt, {through: 'ArticleEmprunt'})
//plusieurs clients peuvent emprunter plusieurs articles
Client.belongsToMany(Emprunt, {through: 'Emprunt'})


export {Auteur, Article, Categorie, Client, Employe, Emprunt}

