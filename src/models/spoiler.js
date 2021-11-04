import { Sequelize } from "sequelize";
import { sequelize } from "./../../config/db";

const Spoiler = sequelize.define("spoilers", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    titulo: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
            len: [2, 255]
        }
    },
    espoliador: {
        allowNull: false,
        type: Sequelize.STRING(40),
        validate: {
            len: [2, 40]
        }
    },
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
            len: [2, 255]
        }
    }
},
    {
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    });

export { Spoiler };