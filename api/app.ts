import express ,{ Request, Response,Application } from "express";
import { Server } from 'socket.io'
import http from 'http'
const app:Application = express()

import routes from "./src/startup/routes";
import './src/startup/db'
routes(app) // startup
const server = http.createServer(app)
const PORT:any = process.env.PORT || 8003

server.listen(PORT, ()=>{
    console.log(`${PORT} portda ${process.env.NODE_ENV} video service ishlamoqda`)
})

