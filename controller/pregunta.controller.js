const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getPreguntas = (req,res) => 
{
    const sql = `SELECT * FROM pregunta`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getPregunta = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM pregunta WHERE idPregunta = ?`;
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

module.exports.insertPregunta = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO pregunta(pregunta,respuesta,
        respuesta1,respuesta2,respuesta3,dificultad, categoria)
        VALUES(?, ?, ?, ?, ?, ?, ?)`;
    conexion.query(sql, [body.pregunta, body.respuesta, body.respuesta1, body.respuesta2,
        body.respuesta3, body.dificultad, body.categoria], 
        (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updatePregunta = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE pregunta SET pregunta = ?, respuesta = ?, respuesta1 = ?,
    respuesta2 = ?, respuesta3 = ?, dificultad = ?, categoria = ? WHERE idPregunta = ?`;
    conexion.query(sql, [body.pregunta, body.respuesta, body.respuesta1, body.respuesta2,
        body.respuesta3, body.dificultad, body.categoria, body.idCategoria],
        (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deletePregunta = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM pregunta WHERE idPregunta = ?`;
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