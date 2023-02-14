const express = require('express')
const Imagerouter = require('./routes/images')
const cors = require('cors')
const app = express()

//middlewares
app.use(cors())
app.use(express.static('upload'));

//routes
app.use('/' , Imagerouter)

const port = 5000 || process.env.PORT
module.export = {port};


app.listen(port , () => console.log('app listening on port ' , port))
module.exports = port;

