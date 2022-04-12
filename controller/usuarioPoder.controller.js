const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);

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
    const sql = `SELECT * FROM usuarioPoder WHERE idUsuario = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getUsuarioPoderP = (req,res) => 
{
    const sql = `SELECT * FROM usuarioPoder WHERE idPoder = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getUsuarioPoder = (req,res) => 
{
    const sql = `SELECT * FROM usuarioPoder WHERE idUsuario = ? AND idPoder = ?`;
        conexion.query(sql, [body.idUsuario, body.idPoder] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertUsuarioPoder = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO usuarioPoder(idUsuario, idPoder) VALUES(?, ?)`;
    conexion.query(sql, [body.idUsuario, body.idPoder], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateUsuarioPoder = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE usuarioPoder SET idUsuario = ?, idPoder = ? WHERE idUsuario = ?
        AND idPoder = ?`;
    conexion.query(sql, [body.idUsuario, body.idPoder, body.idUsuario, body.idPoder,],
        (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteUsuarioPoder = (req, res) => 
{
    const sql = `DELETE FROM usuarioPoder WHERE idUsuario = ? AND idPoder = ?`;
        conexion.query(sql, [body.idUsuario, body.idPoder] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};