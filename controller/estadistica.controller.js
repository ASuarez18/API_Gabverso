const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getEstadisticas = (req,res) => 
{
    const sql = `SELECT * FROM estadistica`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getEstadistica = (req,res) => 
{
    const sql = `SELECT * FROM estadistica WHERE idEstadistica = ?`;
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
            if(error){
                res.send(error);
            }
        res.json(results);
        })
    }
    else{
        res.send("Valores inválidos")
    }
};

module.exports.insertEstadistica = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO estadistica(puntos, horasJuego, wins, loses, vida, 
        mana, dano, defensa) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;
    conexion.query(sql, [body.puntos, body.horasJuego, body.wins, body.loses, body.vida,
        body.mana, body.dano, body.defensa], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateEstadistica = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE estadistica SET puntos = ?, horasJuego = ?, wins = ?,
        loses = ?, vida = ?, mana = ?, dano = ?, defensa = ? WHERE idEstadistica = ?`;
    conexion.query(sql, [body.puntos, body.horasJuego, body.wins, body.loses, body.vida, 
        body.mana, body.dano, body.defensa, body.idEstadistica], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteEstadistica = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM estadistica WHERE idEstadistica = ?`;
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