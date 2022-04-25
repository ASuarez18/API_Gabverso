const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

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
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM poder WHERE idPoder = ?`;
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

module.exports.insertPoder = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.stringCheck(body.tipo,start);
    start = dataValidation.stringCheck(body.elemento,start);
    start = dataValidation.intCheck(body.costoMana,start);
    start = dataValidation.intCheck(body.danio,start);
    if(start){
        const sql = `INSERT INTO poder(tipo, elemento, costoMana, danio) VALUES(?, ?, ?, ?)`;
        conexion.query(sql, [body.tipo, body.elemento, body.costoMana, body.danio], 
            (error, results, fields) =>{
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

module.exports.updatePoder = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.stringCheck(body.tipo,start);
    start = dataValidation.stringCheck(body.elemento,start);
    start = dataValidation.intCheck(body.costoMana,start);
    start = dataValidation.intCheck(body.danio,start);
    start = dataValidation.intCheck(body.idPoder,start);
    if(start){
        const sql = `UPDATE poder SET tipo = ?, elemento = ?, costoMana = ?, danio = ? 
            WHERE idPoder = ?`;
        conexion.query(sql, [body.tipo, body.elemento, body.costoMana, body.danio, body.idPoder], 
            (error, results, fields) =>{
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

module.exports.deletePoder = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM poder WHERE idPoder = ?`;
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