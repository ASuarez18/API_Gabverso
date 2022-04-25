const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getNPCs = (req,res) => 
{
    const sql = `SELECT * FROM NPCs`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getNPC = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM NPCs WHERE idNPC = ?`;
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

module.exports.insertNPC = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO NPCs(idGremio, skin, nombreNPC, sexo, historia) 
        VALUES(?, ?, ?, ?, ?)`;
    conexion.query(sql, [body.idGremio, body.skin, body.nombreNPC, body.sexo,
        body.historia], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateNPC = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE NPCs SET idGremio = ?, skin = ?, nombreNPC = ?, sexo = ?,
        historia = ? WHERE idNPC = ?`;
    conexion.query(sql, [body.idGremio, body.skin, body.nombreNPC, body.sexo,
        body.historia, body.idNPC], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteNPC = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM NPCs WHERE idNPC = ?`;
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