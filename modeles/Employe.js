import database from '../config/connection.js';
import { DataTypes} from "sequelize";

const Employe = database.define('Employe', {
    id_employe: {type: DataTypes.INTEGER, allowNull: false, unique: true},
    nom: {type: DataTypes.STRING, allowNull: false},
    prenom: {type: DataTypes.STRING, allowNull: false},
    age: {type: DataTypes.INTEGER, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false},
    date_embauche: DataTypes.DATEONLY,
    numero_tache: {type: DataTypes.INTEGER, allowNull:false}
})

export default Employe