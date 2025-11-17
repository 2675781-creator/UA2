
import {body, param} from "express-validator";

const articleValidator = [
    body('titre').notEmpty().withMessage('le nom est obligatoire').isLength({min:10}).withMessage('le nom doit avoir au moins 10 caracteres'),
    body('status').notEmpty().withMessage('le status est obligaoire').isLength({min:10}).withMessage('le statut ne doit pas depasser 10 caracteres'),
    body('quantite').notEmpty().withMessage('la quantite des article est obligatoire').isLength({min:1}).withMessage('la quantite doit avoir au moins 1 nombre'),
    
]

export default articleValidator