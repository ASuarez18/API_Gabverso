const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getMensajeR = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT idDestinatario,contenido FROM mensaje WHERE idRemitente = ?`;
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

module.exports.getMensajeD = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = 
        `SELECT mensaje.idRemitente,usuario.userName,mensaje.contenido 
        FROM usuario
        INNER JOIN mensaje ON usuario.idUsuario=mensaje.idRemitente
        WHERE idDestinatario = ?`;
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


module.exports.insertMensaje = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idRemitente,start);
    start = dataValidation.stringCheck(body.destinatario,start);
    start = dataValidation.stringCheck(body.contenido,start);
    if(start){
        const sql1 = `SELECT idUsuario FROM usuario WHERE userName = ?`;
        conexion.query(sql1, [body.destinatario], (error1, results1, fields) =>{
            if(error1){
                res.send(error1);
            }
            let result = Object.values(JSON.parse(JSON.stringify(results1)));
            let arrtemp = result.map(object => object.idUsuario);
            let idDest = arrtemp[0];
            if(!isNaN(idDest) && idDest > 0 && idDest != body.idRemitente)
            {
                const sql = `INSERT INTO mensaje(idRemitente, idDestinatario, contenido) VALUES(?, ?, ?)`;
                conexion.query(sql, [body.idRemitente, idDest, body.contenido], (error, results, fields) =>{
                    if(error){
                        res.send(error);
                    }
                    res.json("Enviado");
                });
            }
            else if(idDest == body.idRemitente)
            {
                res.json("Mismo usuario");
            }
            else{
                res.json("Valores inválidos")
            }
        });
    }
    else{
        res.json("Valores inválidos")
    }
};

module.exports.deleteMensaje = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.idRemitente,start);
    start = dataValidation.intCheck(body.idDestinatario,start);
    if(start){
        const sql = `DELETE FROM usuarioPoder WHERE idRemitente = ? AND idDestinatario = ?`;
        conexion.query(sql, [body.idRemitente, body.idDestinatario] ,(error, results, fields) => {
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