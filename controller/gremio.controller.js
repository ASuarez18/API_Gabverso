const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);

module.exports.getGremios = (req,res) => 
{
    const sql = `SELECT * FROM gremio`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getGremio = (req,res) => 
{
    const sql = `SELECT * FROM gremio WHERE idGremio = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertGremio = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO gremio(logo, nombreGremio, elemento, nIntegrantes, descripcionG)
        VALUES(?, ?, ?, ?)`;
    conexion.query(sql, [body.logo, body.nombreGremio, body.elemento, body.nIntegrantes,
        body.descripcionG], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateGremio = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE gremio SET logo = ?, nombreGremio = ?, elemento = ?, nIntegrantes = ?, 
    descripcionG = ? WHERE idGremio = ?`;
    conexion.query(sql, [body.logo, body.nombreGremio, body.elemento, body.nIntegrantes,
        body.descripcionG, body.idGremio], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteGremio = (req, res) => 
{
    const sql = `DELETE FROM gremio WHERE idGremio = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};