/**
 * Created by pc on 8/23/2017.
 */
var mysql = require('mysql');
var con   = mysql.createConnected({
   host : "localhost",
    user: "root",
    password: "",
    database: "db_movies";
});
module.exports = con;