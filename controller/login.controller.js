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
    const body = req.body;
    let start = true;
    
    start = dataValidation.stringCheck(body.userName,start);
    start = dataValidation.stringCheck(body.correo,start);
    start = dataValidation.stringCheck(body.contrasenia,start);
    //if(body.contrasenia.length() < 3 || body.contrasenia.length() > 20) start = false;
    start = dataValidation.intCheck(body.rol,start);
    start = dataValidation.intCheck(body.edad,start);
    start = dataValidation.intCheck(body.skin,start);
    
    if(start){
        const sql1 = `SELECT idUsuario FROM usuario WHERE userName = ?`;
        conexion.query(sql1, [body.userName], (error1, results1, fields) =>{
            if(error1){
                res.json("Error en la conexión");
            }
            let result = Object.values(JSON.parse(JSON.stringify(results1)));
            let arrtemp = result.map(object => object.idUsuario);
            let idUser = arrtemp[0];
            if(!(!isNaN(idUser) && idUser > 0)){
                const sql2 = `SELECT idUsuario FROM usuario WHERE correo = ?`;
                conexion.query(sql2, [body.correo], (error2, results2, fields) =>{
                    if(error2){
                        res.json("Error en la conexión");
                    }
                    let result1 = Object.values(JSON.parse(JSON.stringify(results2)));
                    let arrtemp1 = result1.map(object => object.idUsuario);
                    let idUser1 = arrtemp1[0];
                    if(!(!isNaN(idUser1) && idUser1 > 0)){
                        const sql = `INSERT INTO usuario(idGremio, userName, correo, contrasenia, 
                            rol, edad, skin, nivel, experiencia, puntos, horasJuego, wins, loses, 
                            vida, mana, dano, defensa) VALUES (6,?,?,SHA2(?,224),?,?,?,0,0,0,0,0,
                            0,100,100,20,10)`;
                        conexion.query(sql, [body.userName, body.correo,
                            body.contrasenia, body.rol, body.edad, body.skin], 
                            (error, results, fields) =>{
                            if(error){
                                res.json("Error al crear el usuario");
                            }
                            res.json("Usuario creado");
                        });
                    }
                    else{
                        res.json("Correo existente")
                    }
                });
            }
            else{
                res.json("Usuario existente")
            }
        });
    }
    else{
        res.json("Valores inválidos")
    }
};