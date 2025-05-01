import express from 'express'
import dotenv from 'dotenv'

dotenv.config('./.env')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


export default app