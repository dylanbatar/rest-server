
// requires
const express = require('express')
const app = express()
require('./config/configs')
const bodyParser = require('body-parser')

//----------------body parser------------------

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


// ---------------------------------------------


// -------------- express ----------------------

app.get('/',(req,res)=>{ 
	res.send('en el index')
})

app.get('/usuario', (req, res) =>{
  res.json('peticion get')
})

app.post('/usuario', (req, res) =>{

    let body = req.body

    if (body.nombre === undefined) {
        res.status(400).json({
            ok:false,
            nombre:'se necesita el nombre'
        })
    }
    else{
        res.json({
            persona:body
        })
    }
})

app.put('/usuario/:id/:name', (req, res) =>{
    let id = req.params.id
    let name = req.params.name
    res.json({
      id,
      name
  })
})

// app.delete('/usuario', (req, res) =>{
//   	res.json('peticion get')
// })  
 
app.listen(3000,()=> console.log(`escuchando en el puerto ${process.env.port}`))

// ---------------------------------------------