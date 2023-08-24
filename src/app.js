const express = require("express");
const app = express();
//methods for file, dirpath
const path = require('path')

//bcrypt
const bcrypt = require("bcrypt")
const saltRounds = 13
const password = "test"



//here we insert ejs
app.set('view engine', 'ejs')

//tell app where to find views
app.set('views', path.join(__dirname, 'views'))

// create folder called views
// add file.ejs and render to routes e.g. home.ejs
app.get('/', (req,res) =>{
    res.render('home')
})


bcrypt
  .hash(password, saltRounds)
  .then(hash => {
    console.log('Hash ', hash)
  })
  .catch(err => console.error(err.message))

function validateUser(hash) {
    bcrypt
      .compare(password, hash)
      .then(res => {
        console.log("Her", res) // return true
      })
      .catch(err => console.error(err.message))        
}
validateUser('$2b$10$mEhFMtBUw50ollEDODZV7.7si3Cw.fwXyZPnSkNKreXjViH9JL1Ta')

// start server
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})