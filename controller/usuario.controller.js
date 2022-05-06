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

module.exports.getUsuarioOe = (req,res) => 
{
    let start = true;
    if(start){
        const sql = `SELECT userName, nivel FROM usuario ORDER BY(nivel) DESC LIMIT 5`;
            conexion.query(sql ,(error, results, fields) => {
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

module.exports.getUsuarioOp = (req,res) => 
{
    let start = true;
    if(start){
        const sql = `SELECT userName, puntos FROM usuario ORDER BY(puntos) DESC LIMIT 5`;
            conexion.query(sql ,(error, results, fields) => {
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
    start = dataValidation.intCheck(body.rol,start);
    start = dataValidation.intCheck(body.edad,start);
    start = dataValidation.intCheck(body.skin,start);
    if(start){
        const sql = `INSERT INTO usuario(idGremio, userName, correo,
            contrasenia, rol, edad, skin, nivel, experiencia, puntos, 
            horasJuego, wins, loses, vida, mana, dano, defensa)
            VALUES(6, ?, ?, SHA2(?,224), ?, ?, ?, 0, 0, 0, 0, 0, 0, 
            100, 100, 20, 10)`;
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
    start = dataValidation.intCheck(body.puntos,start);
    start = dataValidation.intCheck(body.horasJuego,start);
    start = dataValidation.intCheck(body.wins,start);
    start = dataValidation.intCheck(body.loses,start);
    start = dataValidation.intCheck(body.vida,start);
    start = dataValidation.intCheck(body.mana,start);
    start = dataValidation.intCheck(body.dano,start);
    start = dataValidation.intCheck(body.defensa,start);    
    start = dataValidation.intCheck(body.idEstadistica,start);
    start = dataValidation.intCheck(body.idGremio,start);
    start = dataValidation.stringCheck(body.userName,start);
    start = dataValidation.stringCheck(body.correo,start);
    start = dataValidation.stringCheck(body.contrasenia,start);
    start = dataValidation.intCheck(body.rol,start);
    start = dataValidation.intCheck(body.edad,start);
    start = dataValidation.intCheck(body.skin,start);
    start = dataValidation.intCheck(body.nivel,start);
    start = dataValidation.intCheck(body.experiencia,start);
    start = dataValidation.intCheck(body.idUsuario,start);
    if(start){
        const sql = `UPDATE usuario SET idGremio = ?, userName = ?,
            correo = ?, contrasenia = SHA2(?,224), rol = ?, edad = ?, 
            skin = ?, nivel = ?, experiencia =?, puntos = ?, horasJuego = ?, 
            wins = ?, loses = ?, vida = ?, mana = ?, dano = ?, defensa = ?
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

module.exports.increasePuntos = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.puntos,start);
    start = dataValidation.intCheck(body.idUsuario,start);
    if(body.puntos < 0) start = false;
    if(start){
        const sql1 = `SELECT puntos FROM usuario WHERE idUsuario = ?`
        conexion.query(sql1, [body.idUsuario], (error, results, fields) =>{
            if(error){
                res.send(error);
            }
            let result = Object.values(JSON.parse(JSON.stringify(results)));
            let arrtemp = result.map(object => object.puntos);
            let pts = arrtemp[0];

            pts = pts + body.puntos;

            const sql = `UPDATE usuario SET puntos = ? WHERE idUsuario = ?`;
            conexion.query(sql, [pts, body.idUsuario], (error, results, fields) =>{
                if(error){
                    res.send(error);
                }
                res.json(results);
            });
        });
    }
    else{
        res.send("Valores inválidos")
    }
};

module.exports.increaseExperiencia = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.experiencia,start);
    start = dataValidation.intCheck(body.idUsuario,start);
    if(body.experiencia < 0) start = false;
    if(start){
        const sql1 = `SELECT experiencia FROM usuario WHERE idUsuario = ?`
        conexion.query(sql1, [body.idUsuario], (error, results, fields) =>{
            if(error){
                res.send(error);
            }
            let result = Object.values(JSON.parse(JSON.stringify(results)));
            let arrtemp = result.map(object => object.experiencia);
            let exp = arrtemp[0];

            exp = exp + body.experiencia;

            if(exp >= 1000){
                exp = exp - 1000;

                const sql2 = `SELECT nivel FROM usuario WHERE idUsuario = ?`
                conexion.query(sql2, [body.idUsuario], (error1, results1, fields) =>{
                    if(error1){
                        res.send(error);
                    }
                    let result1 = Object.values(JSON.parse(JSON.stringify(results1)));
                    let arrtemp1 = result1.map(object => object.nivel);
                    let lvl = arrtemp1[0];

                    lvl = lvl + 1;

                    const sql = `UPDATE usuario SET nivel = ?, experiencia = ? WHERE idUsuario = ?`;
                    conexion.query(sql, [lvl, exp, body.idUsuario], (error2, results2, fields) =>{
                        if(error){
                            res.send(error2);
                        }
                        res.json(results2);
                    });
                });
            }
            else{
                const sql = `UPDATE usuario SET experiencia = ? WHERE idUsuario = ?`;
                conexion.query(sql, [exp, body.idUsuario], (error1, results1, fields) =>{
                    if(error){
                        res.send(error1);
                    }
                    res.json(results1);
                });
            }
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