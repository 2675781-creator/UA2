import {body, param} from "express-validator";

const clientValidator = [
    body('nom').notEmpty().withMessage('le nom est obligatoire')
    .isLength({max:20}).withMessage('le nom du client ne doit pas avoir dépassé 20 caracteres'),
    body('prenom').notEmpty().withMessage('le prenom est obligatoire')
    .isLength({max:20}).withMessage('le prenom du client ne doit pas avoir dépassé 20 caracteres'),
    body('article_prefere').notEmpty().withMessage('article prefere est obligatoire')
    .isLength({max:30}).withMessage('article prefere ne doit pas avoir dépassé 30 caracteres'),
    body('numero_article').notEmpty().withMessage("le numero de l'article est obligatoire")
    .isInt({min:10000}).withMessage("le numero de l'article du client doit avoir au moins 10000 numero"),
    body('userName')
    .notEmpty().withMessage("L'adresse email est obligatoire")
    .isEmail().withMessage("Format d'email invalide"),
    body('motDePasse')
    .notEmpty().withMessage("Le mot de passe est obligatoire")
    .isLength().withMessage("Le mot de passe doit contenir au moins 6 caractères"),
]

export default clientValidator;