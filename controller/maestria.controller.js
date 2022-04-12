const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);

module.exports.getMaestrias = (req,res) => 
{
    const sql = `SELECT * FROM maestria`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getMaestria = (req,res) => 
{
    const sql = `SELECT * FROM maestria WHERE idMaestria = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertMaestria = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO maestria(maestria) VALUES(?)`;
    conexion.query(sql, [body.maestria], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateMaestria = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE maestria SET maestria = ? WHERE idMaestria = ?`;
    conexion.query(sql, [body.maestria, body.idMaestria], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteMaestria = (req, res) => 
{
    const sql = `DELETE FROM maestria WHERE idMaestria = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};