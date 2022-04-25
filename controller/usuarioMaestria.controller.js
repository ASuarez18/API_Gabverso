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
    const sql = `SELECT * FROM usuarioMaestria WHERE idUsuario = ? AND idTema = ?`;
        conexion.query(sql, [body.idUsuario, body.idTema] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertUsuarioMaestria = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO usuarioMaestria(idUsuario, idTema, nivel) VALUES(?, ?, ?)`;
    conexion.query(sql, [body.idUsuario, body.idTema, body.nivel], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateUsuarioMaestria = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE usuarioMaestria SET idUsuario = ?, idTema = ?, nivel = ?
        WHERE idUsuario = ? AND idTema = ?`;
    conexion.query(sql, [body.idUsuario, body.idTema, body.nivel, body.idUsuario,
        idTema], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteUsuarioMaestria = (req, res) => 
{
    const sql = `DELETE FROM usuarioMaestria WHERE idUsuario = ? AND idTema = ?`;
        conexion.query(sql, [body.idUsuario, body.idTema] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};