
import {body, param} from "express-validator";

const articleValidator = [
    body('date_retour')
    .notEmpty().withMessage('la date de retour est obligatoire')
    .isISO8601().withMessage('la date de retour doit être une date valide au format YYYY-MM-DD')    
]

export default articleValidator