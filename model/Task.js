const Sequelize = require("sequelize");
const db = require("../config/database.js");

module.exports = db.sequelize.define(
  "todolist",
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    task_name: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);