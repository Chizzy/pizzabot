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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



