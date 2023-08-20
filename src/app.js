const express = require("express");
const app = express();
//methods for file, dirpath
const path = require('path')

//here we insert ejs
app.set('view engine', 'ejs')

//tell app where to find views
app.set('views', path.join(__dirname, 'views'))

// create folder called views
// add file.ejs and render to routes e.g. home.ejs
app.get('/', (req,res) =>{
    res.render('home')
})

// start server
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})