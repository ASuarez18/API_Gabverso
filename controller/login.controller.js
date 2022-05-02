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
    
    let start = true;
    start = dataValidation.stringCheck(user,start);
    start = dataValidation.stringCheck(password,start);

    if(start){
        const sql = `SELECT idUsuario FROM usuario
            WHERE userName = ? AND contrasenia = SHA2(?,224)`;
        conexion.query(sql, [user, password], (error, results, fields) =>{
            if(error){
                res.send(error);
            }
            let mensaje = "Usuario no autenticado";
            let token = "";
            const result = Object.values(JSON.parse(JSON.stringify(results)));
            let arrtemp = result.map(object => object.idUsuario);
            let idUser = arrtemp[0];

            if(!isNaN(idUser) && idUser > 0)
            {
                const payload = {
                    id: idUser,
                    usuario: user
                }
                token = jwt.sign(payload, config.key, {expiresIn: 7200})
                mensaje = 'Usuario autenticado'
            }

            res.json
            ({
                mensaje: mensaje,
                token: token
            });
        });
    }
    else{
        res.send("Valores inválidos")
    }
};

module.exports.insertUsuario = (req, res) => 
{

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

    const body = req.body;
    let start = true;
    start = dataValidation.stringCheck(body.userName,start);
    start = dataValidation.stringCheck(body.correo,start);
    start = dataValidation.stringCheck(body.contrasenia,start);
    if(body.contrasenia.length() < 3 || body.contrasenia.length() > 20) start = false;
    start = dataValidation.intCheck(body.rol,start);
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