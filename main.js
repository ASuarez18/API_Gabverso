const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const jwt = require('jsonwebtoken');

const config = require('./config/jwt');
const login = require('./routes/login');
const tema = require('./routes/tema');
const subTema = require('./routes/subTema');
const pregunta = require('./routes/pregunta');
const dificultad = require('./routes/dificultad');
const moduloWeb = require('./routes/moduloWeb');
const usuario = require('./routes/usuario');
const categoria = require('./routes/categoria');
const gremio = require('./routes/gremio');
//const maestria = require('./routes/maestria');
const logros = require('./routes/logros');
const emote = require('./routes/emote');
const NPCs = require('./routes/NPCs');
const mision = require('./routes/mision');
const poderes = require('./routes/poder');
const item = require('./routes/item');
const amigos = require('./routes/amigos');
const usuarioMaestria = require('./routes/usuarioMaestria');
const usuarioEmote = require('./routes/usuarioEmote');
const usuarioMision = require('./routes/usuarioMision');
const usuarioLogro = require('./routes/usuarioLogro');
const usuarioPoder = require('./routes/usuarioPoder');
const usuarioItem = require('./routes/usuarioItem');
const mensaje = require('./routes/mensaje');

app.use(express.json());
app.use(multer().array());
app.use(cors());
app.set("key", config.key);
app.use('/api', login);
app.use('/database', tema);
app.use('/database', subTema);
app.use('/database', categoria);
app.use('/database', dificultad);
app.use('/database', pregunta);
app.use('/database', gremio);
app.use('/database', usuario);
//app.use('/database', maestria);
app.use('/database', logros);
app.use('/database', emote);
app.use('/database', NPCs);
app.use('/database', mision);
app.use('/database', poderes);
app.use('/database', item);
app.use('/bridge', amigos);
app.use('/bridge', usuarioMaestria);
app.use('/bridge', moduloWeb);
app.use('/bridge', usuarioEmote);
app.use('/bridge', usuarioMision);
app.use('/bridge', usuarioLogro);
app.use('/bridge', usuarioPoder);
app.use('/bridge', usuarioItem);
app.use('/bridge', mensaje);


//Callback >- función que se ejecuta como respuesta a un evento o acción
app.listen(port, () => 
{
    console.log(`Servidor iniciado en el puerto ${port}`)
});