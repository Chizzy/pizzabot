const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const port = 9292
const formater = require('../formater/formater');
const plotter = require('../plotter/plotter');



app.use(bodyParser.text({type:'*/*'}));

app.post('/pizzabot', (req, res) => {
  const getMapper = formater(req.body)
  const getInstructions = plotter(getMapper) 
  res.send(
    getInstructions
  )
})

app.get('/pizzabot', function(req, res){
  const gridX = req.query.gridX
  const gridY = req.query.gridY
  const coordX = req.query.coordX
  const coordY = req.query.coordY

  const newString = gridX + 'x' + gridY + ' (' + coordX + ', ' + coordY + ')'
  const getMapper = formater(newString)
  const getInstructions = plotter(getMapper)
  res.send(
    'The instructions for the robot are: ' + getInstructions
  )
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));



