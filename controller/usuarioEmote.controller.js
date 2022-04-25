const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getUsuarioEmotes = (req,res) => 
{
    const sql = `SELECT * FROM usuarioEmote`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getUsuarioEmoteU = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioEmote WHERE idUsuario = ?`;
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

module.exports.getUsuarioEmoteE = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioEmote WHERE idEmote = ?`;
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

module.exports.getUsuarioEmote = (req,res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idEmote,start);
    if(start){
        const sql = `SELECT * FROM usuarioEmote WHERE idUsuario = ? AND idEmote = ?`;
        conexion.query(sql, [body.idUsuario, body.idEmote] ,(error, results, fields) => {
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

module.exports.insertUsuarioEmote = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idEmote,start);
    if(start){
        const sql = `INSERT INTO usuarioEmote(idUsuario, idEmote) VALUES(?, ?)`;
        conexion.query(sql, [body.idUsuario, body.idEmote], (error, results, fields) =>{
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

module.exports.updateUsuarioEmote = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idEmote,start);
    start = dataValidation.intCheck(body.idUsuario1,start);
    start = dataValidation.intCheck(body.idEmote1,start);
    if(start){
        const sql = `UPDATE usuarioEmote SET idUsuario = ?, idEmote = ? WHERE idUsuario = ?
            AND idMaestria = ?`;
        conexion.query(sql, [body.idUsuario, body.idEmote, body.idUsuario1, body.idEmote1,],
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

module.exports.deleteUsuarioEmote = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario,start);
    start = dataValidation.intCheck(body.idEmote,start);
    if(start){
        const sql = `DELETE FROM usuarioEmote WHERE idUsuario = ? AND idEmote = ?`;
            conexion.query(sql, [body.idUsuario, body.idEmote] ,(error, results, fields) => {
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