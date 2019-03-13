const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const port = 9292
const formater = require('../formater/formater');
const plotter = require('../plotter/plotter');
const queryFormater = require('./queryFormater/queryFormater');


app.use(bodyParser.text({type:'*/*'}));

app.post('/pizzabot', (req, res) => {
  const getMapper = formater(req.body)
  const getInstructions = plotter(getMapper) 
  res.send(
    getInstructions
  )
})

app.get('/pizzabot', function(req, res){
  const gridX = req.query.gridX,
  gridY = req.query.gridY,
  coordX = req.query.coordX,
  coordY = req.query.coordY,
  coordX_2 = req.query.coordX_2,
  coordY_2 = req.query.coordY_2

  const queryString = queryFormater(gridX, gridY, coordX, coordY, coordX_2, coordY_2)
  
  const getMapper = formater(queryString)
  const getInstructions = plotter(getMapper)
  res.send(
    'The instructions for the robot are: ' + getInstructions
  )
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));



