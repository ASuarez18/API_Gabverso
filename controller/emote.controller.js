const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);

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
    const sql = `SELECT * FROM emote WHERE idEmote = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
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
    const sql = `DELETE FROM emote WHERE idEmote = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};