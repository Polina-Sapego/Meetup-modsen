const Sequelize = require("sequelize");
const {sequelize} = require("../database/sequelize");

const meeting = sequelize.define("meetup", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "id",
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    field: "name",
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    field: "description",
  },
  tags: {
    type: Sequelize.STRING,
    field: "tags",
  },
  location: {
    type: Sequelize.STRING,
    field: "location",
  },
  time:{
    type: Sequelize.DATE,
    field: "time",
    allowNull: false,
  },
 

});

module.exports = {
    meeting
  };

module.exports = meeting;
