const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

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
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM maestria WHERE idMaestria = ?`;
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

module.exports.insertMaestria = (req, res) => 
{
    const sql = `INSERT INTO maestria(maestria) VALUES(0)`;
    conexion.query(sql, (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateMaestria = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.maestria,start);
    start = dataValidation.intCheck(body.idMaestria,start);
    if(start){
        const sql = `UPDATE maestria SET maestria = ? WHERE idMaestria = ?`;
        conexion.query(sql, [body.maestria, body.idMaestria], (error, results, fields) =>{
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

module.exports.deleteMaestria = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM maestria WHERE idMaestria = ?`;
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