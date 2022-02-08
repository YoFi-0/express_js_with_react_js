// .env file variabls
require('dotenv').config()
const port = process.env.PORT

// requiring libs 
const express = require('express')
const expressReact = require('express-react-views');
const app = express()

// routs
const route = require('./routes/route.js')
app.use('/route', route)

// dom files
app.use(express.static('public'))
app.set('views', './views')
app.engine('jsx', expressReact.createEngine());
app.set('view engine', 'jsx')



app.get('/', (req, res)=>{
    res.render('Home', {page: 'home'})
})

// run the server
app.listen(port, ()=>{
    console.log(`server is on on port ==> ${port}`)
})