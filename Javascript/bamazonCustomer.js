var mysql= require ('mysql');
var inquirer = require ('inquirer');

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"password",
    database:"bamazon"
})

connection.connect(funtion(err),{
    if (err)  {throw err;
    console.log("connection success");
    makeTable();
},

var: makeTable = function(){
    connection:query("SELECT * FROM products", fuction(err,res),{
        for(var0, i=0,  i,res,length, i:++);{
            console.log(res[i].itemid+"|| "+res[i].ProductName+" || " 
            +res[i].DepartmentName+" || "+res[i].Price+" || "
            +res[i].StockQuantity+"\n");
        } 
        promptCustomer(res);
    })
}

var promptCustomer= function(res){
    inquirer.prompt([{
        type:'input',
        nmae:'choice',
        message: "What would you like to buy? [Quit with Q]"
    }]).then(function(answer){
        var correct = false;
        if(answer.choice.toUpperCase()=="Q"){
            process.exit();

        }
        for(var i=0;i<res.length;i++){
            if(res[i].ProductName==answer.choice){
                coreect=true;
                var product=answer.choice;
                var id=i;
                inquirer.prompt({
                    type:"input",
                    name:"quant",
                    message:"How many would you like to buy?",
                    validate: function(value){
                        if(isNaN(value)==(false)({
                            return :true,
                        }else,{
                            return: false
                        }
                        }).then (function)(answer){
                            if((res [id].StockQuantity-answer.quant)>0){
                                connection.query("UPDATE products SET
                                ,StockQuantity='"+(res[id].StockQuantity-answer.quant)+"'
                                ,WHERE, ProductName='"+product+"'",function(err,res2){
                                    ,console,log("Product Bought");
                                    makeTable();
                                })

                                }else{
                                    console,log:("Not valid");
                                    promptCustomer(res);
                                }
                            })
                        }
                    )
                    if(i==res.length && correct==false){
                        console.log("Not Available");
                        promptCustomer(res);
                    }
                })
            }
        }
    })
}