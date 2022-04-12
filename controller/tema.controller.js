const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);

module.exports.getTemas = (req,res) => 
{
    const sql = `SELECT * FROM tema`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getTema = (req,res) => 
{
    const sql = `SELECT * FROM tema WHERE idTema = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertTema = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO tema(tema) VALUES(?)`;
    conexion.query(sql, [body.tema], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateTema = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE tema SET tema = ? WHERE idTema = ?`;
    conexion.query(sql, [body.tema, body.idTema], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteTema = (req, res) => 
{
    const sql = `DELETE FROM tema WHERE idTema = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};