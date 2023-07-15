const express = require('express')
const app = express()
const port = 8000

require("dotenv").config()

require("./config/mongoose.config")

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const routeAttacher = require('./routes/joke.routes')

routeAttacher(app)


app.listen( port, () => console.log("server online") );