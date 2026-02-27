const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Specialite = require('./Specialite')

const Artisan = sequelize.define('Artisan', {
    id_artisan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_artisan: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    id_specialite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    note_artisan: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: false
    },
    rue_artisan: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    codepostal_artisan: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    ville_artisan: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apropos_artisan: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email_artisan: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    site_artisan: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    photo_artisan: {
        type: DataTypes.STRING(300),
        allowNull: false
    }
}, {
    tableName: 'artisan',
    timestamps: false
})

// Association : un artisan appartient à une spécialité
Artisan.belongsTo(Specialite, { foreignKey: 'id_specialite' })
Specialite.hasMany(Artisan, { foreignKey: 'id_specialite' })

module.exports = Artisan