const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const dataValidation = require('../helpers/dataValidation');

module.exports.searchUser = (req, res) =>
{
    let body = req.body;
    const sql = `SELECT idUsuario FROM usuario
        WHERE userName = ? AND contrasenia = SHA2(?,224)`
    conexion.query(sql, [body.user, body.password], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    });
}

module.exports.insertLogin = (req, res) => 
{
    const user = req.body.user;
    const password = req.body.password;
    
    let start = true;
    start = dataValidation.stringCheck(user,start);
    start = dataValidation.stringCheck(password,start);

    if(start){
        let url ="http://localhost:3001/api/search"
        let mensaje = "Usuario no autenticado";
        let token = '';
        let data = fetch(url,  {
                                    method: 'GET',
                                    headers: {
                                    "Content-type": "application/json"
                                    },
                                    body: { "user": user, "password": password }
                                });
        data.json
        if(!isNaN(idUser) && idUser > 0)
        {
            const payload = {
                id: idUser,
                user: req.body.user
            }
            token = jwt.sign(payload, config.key, {expiresIn: 7200})
            mensaje = 'Usuario autenticado'
        }
        
        res.json
        ({
            mensaje: mensaje,
            token: token
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