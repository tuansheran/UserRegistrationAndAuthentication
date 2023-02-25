const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrl = require('./routes/routes')
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACESS, () => console.log("databse connected"))

app.use(express.json()) //activated body passer 
app.use(cors())
app.use('/app', routesUrl)
app.listen(4000, () => console.log("server is up and running"))