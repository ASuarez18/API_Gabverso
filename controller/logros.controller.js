const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getLogros = (req,res) => 
{
    const sql = `SELECT * FROM logro`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getLogro = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM logro WHERE idLogro = ?`;
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

module.exports.insertLogro = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.stringCheck(body.nombreLogro,start);
    start = dataValidation.stringCheck(body.descripcion,start);
    if(start){
        const sql = `INSERT INTO logro(nombreLogro, descripcion) VALUES(?, ?)`;
        conexion.query(sql, [body.nombreLogro, body.descripcion], (error, results, fields) =>{
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

module.exports.updateLogro = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.stringCheck(body.nombreLogro,start);
    start = dataValidation.stringCheck(body.descripcion,start);
    start = dataValidation.intCheck(body.idLogro,start);
    if(start){
        const body = req.body; 
        const sql = `UPDATE logro SET nombreLogro = ?, descripcion = ? WHERE idLogro = ?`;
        conexion.query(sql, [body.nombreLogro, body.descripcion, body.idLogro], (error, results, fields) =>{
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

module.exports.deleteLogro = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM logro WHERE idLogro = ?`;
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