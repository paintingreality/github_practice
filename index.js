const express = require('express')
const app = express()
const PORT = 3000

var cars = ['VW', 'Mercedes', 'Honda', 'Toyota', 'Subaru']

app.get('/', function(req, res){
  var message = 'Welcome to my car make collection'
  message = message + '\n'
  message = message + cars
  res.send(message)

})

app.post('/cars/:name', function (req,res) {
  colors.push(req.params.name)
  res.send('Added a new car')
})

app.get('/cars', function(req, res){
  var message = 'Here are all cars in the DB'
  message = message + '\n'
  message = message + cars
  res.send(message)
})

app.post('/cars/:oldname/:newname', function (req,res) {
  cars.push(req.params.name)
  var i = cars.indexOf(req.params.oldname)
  cars[i] = req.params.newname
  res.send('Changed cars')
})

app.delete('/cars/:name', function (req,res) {
  console.log('I am going to delete', req.params)
  var i = cars.indexOf(req.params.name)
  cars.splice(i, 1)
  res.send('Cars deleted')
})

app.listen(PORT, function () {
  console.log('Server started on port', PORT)
})
