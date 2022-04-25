const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const dataValidation = require('../helpers/dataValidation');

module.exports.insertLogin = (req, res) => 
{
    const user = req.body.user;
    const password = req.body.password;

    let mensaje = "Usuario no autenticado";
    let token = '';

    const payload = {
        id: 1,
        user: req.body.user
    }
    
    if(user === "roy" && password === "123")
    {
        token = jwt.sign(payload, config.key, {expiresIn: 7200})
        mensaje = 'Usuario autenticado'
    }
    
    res.json
    ({
        mensaje: mensaje,
        token: token
    })
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
            VALUES(?, 0, ?, ?, ?, ?, ?, ?, 0, 0)`;
        conexion.query(sql, [body.userName, body.correo,
            body.contrasenia, body.rol, body.edad, body.skin], 
            (error, results, fields) =>{
            if(error){
                res.send(error);
            }
            insertEstadistica();
            res.json(results);
        });
    }
    else{
        res.send("Valores inválidos")
    }
    
};

insertEstadistica = (req, res) => 
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