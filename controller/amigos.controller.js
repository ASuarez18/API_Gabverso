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
        const sql = `SELECT * FROM amigos WHERE idUsuario1 = ?`;
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
    const sql = `SELECT * FROM amigos WHERE idUsuario1 = ? AND idUsuario2 = ?`;
        conexion.query(sql, [body.idUsuario1, body.idUsuario2] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertAmigos = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO amigos(idUsuario1, idUsuario2) VALUES(?, ?)`;
    conexion.query(sql, [body.idUsuario1, body.idUsuario2], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateAmigos = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE amigos SET idUsuario1 = ?, idUsuario2 = ? WHERE idUsuario1 = ?
        AND idUsuario2 = ?`;
    conexion.query(sql, [body.idUsuario1, body.idUsuario2, body.idUsuario1, body.idUsuario2,],
        (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteAmigos = (req, res) => 
{
    const sql = `DELETE FROM amigos WHERE idUsuario1 = ? AND idUsuario2 = ?`;
        conexion.query(sql, [body.idUsuario1, body.idUsuario2] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};