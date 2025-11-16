import {body, param} from "express-validator";

const auteurValidator = [
    body('nom').notEmpty().withMessage('le nom est obligatoire').isLength({min:2}).withMessage('le nom doit avoir au moins 2 caracteres'),
    body('prenom').notEmpty().withMessage('le prenom est obligatoire').isLength({max:50}).withMessage('le prenom ne doit pas depasser 50 caracteres'),
    body('age').notEmpty().withMessage('age est obligaoire').isInt({max:2}).withMessage('age ne doit pas deppasser 2 nombre'),
    body('nationalite').notEmpty().withMessage('la nationalite est obligatoire').isLength({max:40}).withMessage('la naitonalite ne doit pas depasser 40 caracteres'),
    body('langue').notEmpty().withMessage('la langue est obligatoire').isLength({max:30}).withMessage('la langue ne doit pas depasser 30 caracteres')
]

export default auteurValidator;