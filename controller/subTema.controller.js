const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getSubTemas = (req,res) => 
{
    const sql = `SELECT * FROM subTema`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getSubTema = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM subTema WHERE idSubTema = ?`;
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

module.exports.insertSubTema = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO subTema(tema,subTema) VALUES(?,?)`;
    conexion.query(sql, [body.tema, body.subTema], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateSubTema = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE subTema SET tema = ?, subTema = ? WHERE idSubTema = ?`;
    conexion.query(sql, [body.tema, body.subTema, body.idSubTema], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteSubTema = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM subTema WHERE idSubTema = ?`;
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