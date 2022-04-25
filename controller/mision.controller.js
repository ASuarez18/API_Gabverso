const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getMisiones = (req,res) => 
{
    const sql = `SELECT * FROM mision`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getMision = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM mision WHERE idMision = ?`;
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

module.exports.insertMision = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO mision(idNPC, objetivo, nParticipantes, recompensa,
        descripcionM) VALUES(?, ?, ?, ?, ?)`;
    conexion.query(sql, [body.idNPC, body.objetivo, body.nParticipantes, body.recompensa,
        body.descripcionM], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateMision = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE mision SET idNPC = ?, objetivo = ?, nParticipantes = ?,
    recompensa = ?, descripcionM = ? WHERE idMision = ?`;
    conexion.query(sql, [body.idNPC, body.objetivo, body.nParticipantes, body.recompensa,
        body.descripcionM, body.idMision], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteMision = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM mision WHERE idMision = ?`;
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