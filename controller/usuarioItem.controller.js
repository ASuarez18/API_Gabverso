const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getUsuarioItems = (req,res) => 
{
    const sql = `SELECT * FROM usuarioItem`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getUsuarioItemU = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioItem WHERE idUsuario = ?`;
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

module.exports.getUsuarioItemI = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioItem WHERE idItem = ?`;
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

module.exports.getUsuarioItem = (req,res) => 
{
    const sql = `SELECT * FROM usuarioItem WHERE idUsuario = ? AND idItem = ?`;
        conexion.query(sql, [body.idUsuario, body.idItem] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertUsuarioItem = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO usuarioItem(idUsuario, idItem, cantidad) VALUES(?, ?, ?)`;
    conexion.query(sql, [body.idUsuario, body.idItem, body.cantidad], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateUsuarioItem = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE usuarioItem SET idUsuario = ?, idItem = ?, cantidad = ?
        WHERE idUsuario = ? AND idItem = ?`;
    conexion.query(sql, [body.idUsuario, body.idItem, body.cantidad, body.idUsuario,
        idItem], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteUsuarioItem = (req, res) => 
{
    const sql = `DELETE FROM usuarioItem WHERE idUsuario = ? AND idItem = ?`;
        conexion.query(sql, [body.idUsuario, body.idItem] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};