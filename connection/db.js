const mysql = require("mysql2");
require("dotenv").config()
const db = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD_DB,
    database:process.env.DATABASE
});
module.exports = db; 