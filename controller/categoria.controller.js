const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);

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
    const sql = `SELECT * FROM categoria WHERE idCat = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertCategoria = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO categoria(cat) VALUES(?)`;
    conexion.query(sql, [body.categoria], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateCategoria = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE categoria SET cat = ? WHERE idCat = ?`;
    conexion.query(sql, [body.categoria, body.idCat], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteCategoria = (req, res) => 
{
    const sql = `DELETE FROM categoria WHERE idCat = ?`;
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};