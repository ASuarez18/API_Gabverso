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
    const sql = `INSERT INTO estadistica(puntos, horasJuego, wins, loses, vida, 
        mana, dano, defensa) VALUES(0, 0, 0, 0, 100, 100, 20, 10)`;
    conexion.query(sql, (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.updateEstadistica = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.puntos,start);
    start = dataValidation.intCheck(body.horasJuego,start);
    start = dataValidation.intCheck(body.wins,start);
    start = dataValidation.intCheck(body.loses,start);
    start = dataValidation.intCheck(body.vida,start);
    start = dataValidation.intCheck(body.mana,start);
    start = dataValidation.intCheck(body.dano,start);
    start = dataValidation.intCheck(body.defensa,start);    
    start = dataValidation.intCheck(body.idEstadistica,start);    
    if(start){
        const sql = `UPDATE estadistica SET puntos = ?, horasJuego = ?, wins = ?,
            loses = ?, vida = ?, mana = ?, dano = ?, defensa = ? WHERE idEstadistica = ?`;
        conexion.query(sql, [body.puntos, body.horasJuego, body.wins, body.loses, body.vida, 
            body.mana, body.dano, body.defensa, body.idEstadistica], (error, results, fields) =>{
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