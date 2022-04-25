const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

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
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM dificultad WHERE idDif = ?`;
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

module.exports.insertDificultad = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.stringCheck(body.dif,start);
    if(start){
        const sql = `INSERT INTO dificultad(dif) VALUES(?)`;
        conexion.query(sql, [body.dif], (error, results, fields) =>{
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

module.exports.updateDificultad = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.stringCheck(body.dif,start);
    start = dataValidation.intCheck(body.idDif,start);
    if(start){
        const sql = `UPDATE dificultad SET dif = ? WHERE idDif = ?`;
        conexion.query(sql, [body.dif, body.idDif], (error, results, fields) =>{
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

module.exports.deleteDificultad = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM dificultad WHERE idDif = ?`;
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