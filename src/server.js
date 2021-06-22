// Express
const express= require('express')
const app = express()
const port= process.env.PORT || 8090

// system file
const fs= require('fs')

// data
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
  extended: true
}));
 app.use(bodyParser.json())

// set path
const path= require('path')
const dirRoot= path.join(__dirname, '../')

// set views
const ejs= require('ejs')
app.set('view engine', 'ejs')
app.use(express.static(dirRoot + 'public'))

// route form
app.get('/', (req, res)=>{
  res.render('template')
})

//route cadastro
app.post('/cadastro', (req, res)=>{
  
  // get data in form
  let user ={
    'nome': req.body.name,
    'email': req.body.email
  }

  // create file data
  fs.appendFile('data.json', JSON.stringify(user), (err)=>{
    if (err){
      console.log(err)
    }else{
      return 'Dados armazanados com sucesso! '
    }
  })

  res.render('cadastro', {dados: JSON.parse(JSON.stringify(user))})
})

// server started
app.listen(port, ()=>{
    console.log('-->>> CONECTION SUCCESS!' )
}) 