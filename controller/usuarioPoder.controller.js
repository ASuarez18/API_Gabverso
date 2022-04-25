const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getUsuarioPoderes = (req,res) => 
{
    const sql = `SELECT * FROM usuarioPoder`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getUsuarioPoderU = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioPoder WHERE idUsuario = ?`;
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

module.exports.getUsuarioPoderP = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioPoder WHERE idPoder = ?`;
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

module.exports.getUsuarioPoder = (req,res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idPoder,start);
    if(start){
        const sql = `SELECT * FROM usuarioPoder WHERE idUsuario = ? AND idPoder = ?`;
        conexion.query(sql, [body.idUsuario, body.idPoder] ,(error, results, fields) => {
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

module.exports.insertUsuarioPoder = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idPoder,start);
    if(start){
        const sql = `INSERT INTO usuarioPoder(idUsuario, idPoder) VALUES(?, ?)`;
        conexion.query(sql, [body.idUsuario, body.idPoder], (error, results, fields) =>{
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

module.exports.updateUsuarioPoder = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idPoder,start);
    start = dataValidation.intCheck(body.idUsuario1,start);
    start = dataValidation.intCheck(body.idPoder1,start);
        if(start){
        const sql = `UPDATE usuarioPoder SET idUsuario = ?, idPoder = ? WHERE idUsuario = ?
            AND idPoder = ?`;
        conexion.query(sql, [body.idUsuario, body.idPoder, body.idUsuario1, body.idPoder1,],
            (error, results, fields) =>{
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

module.exports.deleteUsuarioPoder = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idPoder,start);
    if(start){
        const sql = `DELETE FROM usuarioPoder WHERE idUsuario = ? AND idPoder = ?`;
        conexion.query(sql, [body.idUsuario, body.idPoder] ,(error, results, fields) => {
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