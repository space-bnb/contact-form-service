const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index');
const app = express();
const port = 3001;

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/availability', async (req, res) => {
  const { id } = req.query;
  const response = await db.getAvailability(id);

  res.json(response);
})



app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});