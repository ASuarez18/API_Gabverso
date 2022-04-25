const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getModulosWeb = (req,res) => 
{
    const sql = `SELECT * FROM moduloWeb`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getModuloWebU = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM moduloWeb WHERE idUsuario = ?`;
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

module.exports.getModuloWebP = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM moduloWeb WHERE idPregunta = ?`;
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

module.exports.getModuloWeb = (req,res) => 
{
    const body = req.body; 
    const sql = `SELECT * FROM moduloWeb WHERE idUsuario = ? AND idPregunta = ?`;
        conexion.query(sql, [body.idUsuario, body.idPregunta] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertModuloWeb = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO moduloWeb(idUsuario, idPregunta, estadoActivo) VALUES(?, ?, TRUE)`;
    conexion.query(sql, [body.idUsuario, body.idPregunta], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateModuloWeb = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE moduloWeb SET estadoActivo = ? WHERE idUsuario = ? AND idPregunta = ?`;
    conexion.query(sql, [body.estado, body.idUsuario, body.idPregunta], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteModuloWeb = (req, res) => 
{
    const body = req.body;
    const sql = `DELETE FROM moduloWeb WHERE idUsuario = ? AND idPregunta = ?`;
        conexion.query(sql, [body.idUsuario, body.idPregunta] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};