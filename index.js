//NPM requires
const express = require('express')
const cors = require('cors')
const http = require('http')
const path = require('path')
//Project's require
const exampleRouter = require('./src/Routes/exampleRouter')
//Initialization
const version = '/api/v1';
const PORT = process.env.PORT || 2000
const back_end = express()
back_end.use(express.json())
back_end.use(express.Router())
back_end.use(cors())
//Routes
back_end.use(version+"/example", exampleRouter)

//Server
back_end.set('port', PORT);
const server = http.createServer(back_end)
server.listen(PORT, () => console.log(`Backend corriendo en localhost:${PORT}`));