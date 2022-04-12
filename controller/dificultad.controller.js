const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);

module.exports.getDificultades = (req,res) => 
{
    const sql = `SELECT * FROM dificultad`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getDificultad = (req,res) => 
{
    const sql = `SELECT * FROM dificultad WHERE idDif = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertDificultad = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO dificultad(dif) VALUES(?)`;
    conexion.query(sql, [body.dif], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateDificultad = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE dificultad SET dif = ? WHERE idDif = ?`;
    conexion.query(sql, [body.dif, body.idDif], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteDificultad = (req, res) => 
{
    const sql = `DELETE FROM dificultad WHERE idDif = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};