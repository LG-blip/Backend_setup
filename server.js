if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()                     // this ensures that we are running in the production environment or not.
                                                  // .load() or .parse() can be used   
}

const express = require("express")      // importing the express modules in file
const app = express();                    // creating an express app server
const expressLayouts = require("express-ejs-layouts")


const indexRouter = require('./routes/index')           
app.set('view engine', 'ejs')                 // View engines allow us to render web pages using template files.
app.set('views', __dirname + '/views') 
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose'))

app.use('/', indexRouter)
app.listen(process.env.PORT || 3000)