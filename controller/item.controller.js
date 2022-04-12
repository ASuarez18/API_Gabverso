const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);

module.exports.getItems = (req,res) => 
{
    const sql = `SELECT * FROM item`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
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
    const sql = `INSERT INTO item(tipo, uso) VALUES(?, ?)`;
    conexion.query(sql, [body.tipo, body.uso], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateItem = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE item SET tipo = ?, uso = ? WHERE idItem = ?`;
    conexion.query(sql, [body.tipo, body.uso, body.idItem], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteItem = (req, res) => 
{
    const sql = `DELETE FROM item WHERE idItem = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};