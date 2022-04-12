const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const config = require('../config/jwt')

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
        token = jwt.sign(payload, config.key, {expiresIn: 72000})
        mensaje = 'Usuario autenticado'
    }
    
    res.json
    ({
        mensaje: mensaje,
        token: token
    })
};