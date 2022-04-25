const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getUsuarioMisiones = (req,res) => 
{
    const sql = `SELECT * FROM usuarioMision`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getUsuarioMisionU = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioMision WHERE idUsuario = ?`;
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

module.exports.getUsuarioMisionM = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuarioMision WHERE idMision = ?`;
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

module.exports.getUsuarioMision = (req,res) => 
{
    const sql = `SELECT * FROM usuarioMision WHERE idUsuario = ? AND idMision = ?`;
        conexion.query(sql, [body.idUsuario, body.idMision] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertUsuarioMision = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO usuarioMision(idUsuario, idMision, tiempo) VALUES(?, ?, ?)`;
    conexion.query(sql, [body.idUsuario, body.idMision, body.tiempo], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateUsuarioMision = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE usuarioMision SET idUsuario = ?, idMision = ?, tiempo = ?
        WHERE idUsuario = ? AND idMision = ?`;
    conexion.query(sql, [body.idUsuario, body.idMision, body.tiempo, body.idUsuario,
        idMision], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteUsuarioMision = (req, res) => 
{
    const sql = `DELETE FROM usuarioMision WHERE idUsuario = ? AND idMision = ?`;
        conexion.query(sql, [body.idUsuario, body.idMision] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};