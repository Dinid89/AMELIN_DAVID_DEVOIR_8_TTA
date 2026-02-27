const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Categorie = require('./Categorie')

const Specialite = sequelize.define('Specialite', {
    id_specialite: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_specialite: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    id_categorie: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'specialite',
    timestamps: false
})

// Association : une spécialité appartient à une catégorie
Specialite.belongsTo(Categorie, { foreignKey: 'id_categorie' })
Categorie.hasMany(Specialite, { foreignKey: 'id_categorie' })

module.exports = Specialite