import { Sequelize } from "sequelize";

const database = new Sequelize('sun_optic', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default database;