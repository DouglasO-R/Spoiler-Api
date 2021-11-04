import { Sequelize } from "sequelize";

// const sequelize = new Sequelize({
//     username:process.env.DB_USER,
//     password:process.env.DB_PASS,
//     database:process.env.DB_DATABASE,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect:'mysql',
// });

const sequelize = new Sequelize({
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect:'postgres',
});

export { sequelize };