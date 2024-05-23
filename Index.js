const express = require('express');
const app = express()
const cors = require('cors');
const port =process.env.PORT || 6000;

const chef = require('./data/Chef.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Chef comming')
})

app.get('/chef', (req, res) => {
  res.send(chef);
})

app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  const selectedchef = chef.find(n => n._id === id);
  res.send(selectedchef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})