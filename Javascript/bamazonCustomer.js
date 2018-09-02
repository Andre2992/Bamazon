var mysql= require ('mysql');
var inquirer = ('inquirer');

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"hblock1299",
    database:"bamazon"
})

connection.connect(funtion(err){
    if (err) throw
})