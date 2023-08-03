import express from 'express'
import cors from "cors"
import { dbConnect } from './databases/database.config'
import dotenv from 'dotenv';

const app = express()
app.use(cors({
    credentials:true
}))
app.use(express.json()) //transforma req.body en json
dotenv.config();
dbConnect()



app.get('/ping', (req, res) =>{

    console.log('Cargado')
    res.send('pong')
})


const PORT = 3000
app.listen(PORT, () => {
    console.log("Servidor conectado en http://localhost:"+ PORT)
})