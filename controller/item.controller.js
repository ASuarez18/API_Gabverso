const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getItems = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM item`;
            conexion.query(sql, (error, results, fields) => {
            if(error){
                res.send(error);
            }
            res.json(results);
        });
    }
    else{
        res.send("Valores inválidos")
    }
};
    
module.exports.getItem = (req,res) => 
{
    const sql = `SELECT * FROM item WHERE idItem = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertItem = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.stringCheck(body.tipo,start);
    start = dataValidation.stringCheck(body.uso,start);
    if(start){
        const sql = `INSERT INTO item(tipo, uso) VALUES(?, ?)`;
        conexion.query(sql, [body.tipo, body.uso], (error, results, fields) =>{
            if(error){
                res.send(error);
            }
            res.json(results);
        });
    }
    else{
        res.send("Valores inválidos")
    }
};

module.exports.updateItem = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.stringCheck(body.tipo,start);
    start = dataValidation.stringCheck(body.uso,start);
    start = dataValidation.intCheck(body.idItem,start);
    if(start){
        const sql = `UPDATE item SET tipo = ?, uso = ? WHERE idItem = ?`;
        conexion.query(sql, [body.tipo, body.uso, body.idItem], (error, results, fields) =>{
            if(error){
                res.send(error);
            }
            res.json(results);
        });
    }
    else{
        res.send("Valores inválidos")
    }
};

module.exports.deleteItem = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM item WHERE idItem = ?`;
            conexion.query(sql, [req.params.id] ,(error, results, fields) => {
            if(error){
                res.send(error);
            }
            res.json(results);
        });
    }
    else{
        res.send("Valores inválidos")
    }
};