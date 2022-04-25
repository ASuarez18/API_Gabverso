const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getUsuarioLogros = (req,res) => 
{
    const sql = `SELECT * FROM usuarioLogro`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getUsuarioLogroU = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioLogro WHERE idUsuario = ?`;
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

module.exports.getUsuarioLogroL = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioLogro WHERE idLogro = ?`;
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

module.exports.getUsuarioLogro = (req,res) => 
{
    const sql = `SELECT * FROM usuarioLogro WHERE idUsuario = ? AND idLogro = ?`;
        conexion.query(sql, [body.idUsuario, body.idLogro] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertUsuarioLogro = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO usuarioLogro(idUsuario, idLogro, fecha) VALUES(?, ?, ?)`;
    conexion.query(sql, [body.idUsuario, body.idLogro, body.fecha], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateUsuarioLogro = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE usuarioLogro SET idUsuario = ?, idLogro = ?, fecha = ?
        WHERE idUsuario = ? AND idLogro = ?`;
    conexion.query(sql, [body.idUsuario, body.idLogro, body.fecha, body.idUsuario,
        idLogro], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteUsuarioLogro = (req, res) => 
{
    const sql = `DELETE FROM usuarioLogro WHERE idUsuario = ? AND idLogro = ?`;
        conexion.query(sql, [body.idUsuario, body.idLogro] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};