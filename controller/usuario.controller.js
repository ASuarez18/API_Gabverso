const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

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
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM usuario WHERE idUsuario = ?`;
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

module.exports.insertUsuario = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.stringCheck(body.userName,start);
    start = dataValidation.stringCheck(body.correo,start);
    start = dataValidation.stringCheck(body.contrasenia,start);
    start = dataValidation.stringCheck(body.rol,start);
    start = dataValidation.intCheck(body.edad,start);
    start = dataValidation.intCheck(body.skin,start);
    if(start){
        const sql = `INSERT INTO usuario(idGremio, userName, correo,
            contrasenia, rol, edad, skin, nivel, experiencia)
            VALUES(0, ?, ?, SHA2(?,224), ?, ?, ?, 0, 0)`;
        conexion.query(sql, [body.userName, body.correo,
            body.contrasenia, body.rol, body.edad, body.skin], 
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

module.exports.updateUsuario = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idGremio,start);
    start = dataValidation.stringCheck(body.userName,start);
    start = dataValidation.stringCheck(body.correo,start);
    start = dataValidation.stringCheck(body.contrasenia,start);
    start = dataValidation.stringCheck(body.rol,start);
    start = dataValidation.intCheck(body.edad,start);
    start = dataValidation.intCheck(body.skin,start);
    start = dataValidation.intCheck(body.nivel,start);
    start = dataValidation.intCheck(body.experiencia,start);
    start = dataValidation.intCheck(body.idUsuario,start);
    if(start){
        const sql = `UPDATE usuario SET idGremio = ?, userName = ?,
            correo = ?, contrasenia = SHA2(?,224), rol = ?, edad = ?, skin = ?, nivel = ?, experiencia =?
            WHERE idUsuario = ?`;
        conexion.query(sql, [body.idGremio, body.userName, body.correo,
            body.contrasenia, body.rol, body.edad, body.skin, body.nivel, body.experiencia, 
            body.idUsuario], (error, results, fields) =>{
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

module.exports.deleteUsuario = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM usuario WHERE idUsuario = ?`;
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