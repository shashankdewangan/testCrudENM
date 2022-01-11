const dbconfig =require("../config/db.config.js");

const mongoose =require("mongoose");

const db ={}
db.mongoose=mongoose;
db.url=dbconfig.url;
db.tutorials =require("./tutorial.model.js")(mongoose);

module.exports =db;