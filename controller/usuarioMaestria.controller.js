const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getUsuarioMaestrias = (req,res) => 
{
    const sql = `SELECT * FROM usuarioMaestria`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getUsuarioMaestriaU = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioMaestria WHERE idUsuario = ?`;
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

module.exports.getUsuarioMaestriaM = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioMaestria WHERE idTema = ?`;
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

module.exports.getUsuarioMaestria = (req,res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idTema,start);
    if(start){
        const sql = `SELECT * FROM usuarioMaestria WHERE idUsuario = ? AND idTema = ?`;
        conexion.query(sql, [body.idUsuario, body.idTema] ,(error, results, fields) => {
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

module.exports.insertUsuarioMaestria = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idTema,start);
    if(start){
        const sql = `INSERT INTO usuarioMaestria(idUsuario, idTema, nivel) VALUES(?, ?, ?)`;
        conexion.query(sql, [body.idUsuario, body.idTema, body.nivel], (error, results, fields) =>{
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

module.exports.updateUsuarioMaestria = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idTema,start);
    start = dataValidation.intCheck(body.nivel,start);
    start = dataValidation.intCheck(body.idUsuario1,start);
    start = dataValidation.intCheck(body.idTema1,start);
    if(start){
        const sql = `UPDATE usuarioMaestria SET idUsuario = ?, idTema = ?, nivel = ?
            WHERE idUsuario = ? AND idTema = ?`;
        conexion.query(sql, [body.idUsuario, body.idTema, body.nivel, body.idUsuario1,
            idTema1], (error, results, fields) =>{
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

module.exports.deleteUsuarioMaestria = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idTema,start);
    if(start){
        const sql = `DELETE FROM usuarioMaestria WHERE idUsuario = ? AND idTema = ?`;
        conexion.query(sql, [body.idUsuario, body.idTema] ,(error, results, fields) => {
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