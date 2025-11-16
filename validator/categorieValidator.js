import {body, param} from "express-validator";

const categorieValidator = [
    body('nom_categorie').notEmpty().withMessage('le nom de la categorie est obligatoire').isLength({min:5}).withMessage('le nom de la categorie doit avoir au moins 5 caracteres')
]

export default categorieValidator