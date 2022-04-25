const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const dataValidation = require('../helpers/dataValidation');

module.exports.getCategorias = (req,res) => 
{
    const sql = `SELECT * FROM categoria`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};
    
module.exports.getCategoria = (req,res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `SELECT * FROM categoria WHERE idCat = ?`;
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

module.exports.insertCategoria = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.subTema,start);
    start = dataValidation.stringCheck(body.cat,start);
    if(start){
        const sql = `INSERT INTO categoria(subTema,cat) VALUES(?,?)`;
        conexion.query(sql, [body.subTema,body.cat], (error, results, fields) =>{
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

module.exports.updateCategoria = (req, res) => 
{
    const body = req.body;
    let start = true;
    start = dataValidation.intCheck(body.subTema,start);
    start = dataValidation.stringCheck(body.cat,start);
    start = dataValidation.intCheck(body.idCat,start);
    if(start){
        const sql = `UPDATE categoria SET subTema = ?, cat = ? WHERE idCat = ?`;
        conexion.query(sql, [body.subTema, body.cat, body.idCat], (error, results, fields) =>{
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

module.exports.deleteCategoria = (req, res) => 
{
    let start = true;
    start = dataValidation.intCheck(req.params.id,start);
    if(start){
        const sql = `DELETE FROM categoria WHERE idCat = ?`;
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