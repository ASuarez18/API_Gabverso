const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getAmigos = (req,res) => 
{
    const sql = `SELECT * FROM amigos`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getAmigoU1 = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT usuario.userName FROM usuario 
            JOIN amigos ON usuario.idUsuario = amigos.idUsuario2
            WHERE idUsuario1 = ?`;
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

module.exports.getAmigoU2 = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM amigos WHERE idUsuario2 = ?`;
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

module.exports.getAmigo = (req,res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario1,start);
    start = dataValidation.intCheck(body.idUsuario2,start);
    if(start){
        const sql = `SELECT * FROM amigos WHERE idUsuario1 = ? AND idUsuario2 = ?`;
            conexion.query(sql, [body.idUsuario1, body.idUsuario2] ,(error, results, fields) => {
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

module.exports.insertAmigos = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario1,start);
    start = dataValidation.intCheck(body.idUsuario2,start);
    if(start){
        const sql = `INSERT INTO amigos(idUsuario1, idUsuario2) VALUES(?, ?)`;
        conexion.query(sql, [body.idUsuario1, body.idUsuario2], (error, results, fields) =>{
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

module.exports.updateAmigos = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario1,start);
    start = dataValidation.intCheck(body.idUsuario2,start);
    start = dataValidation.intCheck(body.idUsuario11,start);
    start = dataValidation.intCheck(body.idUsuario21,start);
    if(start){
        const sql = `UPDATE amigos SET idUsuario1 = ?, idUsuario2 = ? WHERE idUsuario1 = ?
            AND idUsuario2 = ?`;
        conexion.query(sql, [body.idUsuario1, body.idUsuario2, body.idUsuario11, body.idUsuario21,],
            (error, results, fields) =>{
            if(error){
                res.send(error);
            }
            res.json(results);
        })
    }
    else{
        res.send("Valores inválidos")
    }
};

module.exports.deleteAmigos = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idUsuario1,start);
    start = dataValidation.intCheck(body.idUsuario2,start);
    if(start){    
        const sql = `DELETE FROM amigos WHERE idUsuario1 = ? AND idUsuario2 = ?`;
            conexion.query(sql, [body.idUsuario1, body.idUsuario2] ,(error, results, fields) => {
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