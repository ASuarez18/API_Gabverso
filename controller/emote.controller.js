const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getEmotes = (req,res) => 
{
    const sql = `SELECT * FROM emote`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getEmote = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM emote WHERE idEmote = ?`;
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

module.exports.insertEmote = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO emote(imagen, nombreEmote) VALUES(?, ?)`;
    conexion.query(sql, [body.imagen, body.nombreEmote], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateEmote = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE emote SET imagen = ?, nomberEmote = ? WHERE idEmote = ?`;
    conexion.query(sql, [body.imagen, body.nombreEmote, body.idEmote], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteEmote = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM emote WHERE idEmote = ?`;
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