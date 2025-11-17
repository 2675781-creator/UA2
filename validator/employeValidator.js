import {body, param} from "express-validator";

const employeValidator = [
    body('nom').notEmpty().withMessage('le nom est obligatoire')
    .isLength({max:20}).withMessage('le nom ne doit pas avoir dépassé 20 caracteres'),
    body('prenom').notEmpty().withMessage('le prenom est obligatoire')
    .isLength({max:20}).withMessage('le prenom ne doit pas avoir dépassé 20 caracteres'),
    body('age').notEmpty().withMessage("l'age est obligatoire")
    .isInt({min:2}).withMessage("L'age doit avoir au moins 2 nombre"),
    body('role').notEmpty().withMessage("le role est obligatoire")
    .isLength({max:40}).withMessage("le role de l'employe ne doit pas depasse au 40 caracteres"),
    body('numero_tache').notEmpty().withMessage("le numero de la tache est obligatoire")
    .isInt({max:1000}).withMessage("Le numero de la tache ne doit pas depasse 1000"),
    body('userName')
    .notEmpty().withMessage("L'adresse email est obligatoire")
    .isEmail().withMessage("Format d'email invalide"),
    body('motDePasse')
    .notEmpty().withMessage("Le mot de passe est obligatoire")
    .isLength().withMessage("Le mot de passe doit contenir au moins 6 caractères"),
]

export default clientValidator;