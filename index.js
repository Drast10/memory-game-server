const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app
  .use(cors())
  .use(bodyParser.json())



app.get('/number', (req, res) => {
  let mode = req.query.mode;
  let numbers = []
  while (numbers.length < Number(mode)) {
    var number = Math.floor(Math.random() * 100) + 1;
    if (numbers.indexOf(number) === -1) numbers.push(number);
  }
  res.send({ randomArray: numbers });
})

app.listen(port, () => console.log(`Listening on port ${port}`))
