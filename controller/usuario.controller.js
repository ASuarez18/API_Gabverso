const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);

module.exports.getUsuarios = (req,res) => 
{
    const sql = `SELECT * FROM usuario`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getUsuario = (req,res) => 
{
    const sql = `SELECT * FROM usuario WHERE idUsuario = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertUsuario = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO usuario(idEstadistica, idGremio, userName, correo,
        contrasenia, rol, edad, skin, nivel, experiencia)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    conexion.query(sql, [body.idEstadistica, body.idGremio, body.userName, body.correo,
         body.contrasenia, body.rol, body.edad, body.skin, body.nivel, body.experiencia], 
         (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateUsuario = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE usuario SET idEstadistica = ?, idGremio = ?, userName = ?,
        correo = ?, contrasenia = ?, rol = ?, edad = ?, skin = ?, nivel = ?, experiencia =?
        WHERE idUsuario = ?`;
     conexion.query(sql, [body.idEstadistica, body.idGremio, body.userName, body.correo,
        body.contrasenia, body.rol, body.edad, body.skin, body.nivel, body.experiencia, 
        body.idUsuario], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteUsuario = (req, res) => 
{
    const sql = `DELETE FROM usuario WHERE idUsuario = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};