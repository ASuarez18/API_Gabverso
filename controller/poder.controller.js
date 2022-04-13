const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);

module.exports.getPoderes = (req,res) => 
{
    const sql = `SELECT * FROM poder`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getPoder = (req,res) => 
{
    const sql = `SELECT * FROM poder WHERE idPoder = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertPoder = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO poder(tipo, elemento, costoMana, danio) VALUES(?, ?, ?, ?)`;
    conexion.query(sql, [body.tipo, body.elemento, body.costoMana, body.danio], 
        (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updatePoder = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE poder SET tipo = ?, elemento = ?, costoMana = ?, danio = ? 
        WHERE idPoder = ?`;
    conexion.query(sql, [body.tipo, body.elemento, body.costoMana, body.danio, body.idPoder], 
        (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deletePoder = (req, res) => 
{
    const sql = `DELETE FROM poder WHERE idPoder = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};