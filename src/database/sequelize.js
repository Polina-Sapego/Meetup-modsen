const Sequelize = require("sequelize");
const config = require("../config/sequelize");
//const roles = require('../utils/constants').roles;
const sequelize = new Sequelize("modsen", "postgres", "123", config);
//const MongoLogger = require('../utils/MongoLogger');

module.exports = sequelize;

const connect = async () => {
    const models = require("../models/meet");
  
   // await sequelize.authenticate();
    //  Object.values(models).forEach((model) => {
    //  model.associate && model.associate(models);
    // // logging: (command) => MongoLogger.LogDatabase(command)

    //  });
  
    await sequelize.sync({ alter: true });
    await sequelize.sync({ force: true });
  };
  
  module.exports = { sequelize, Sequelize, connect };
  