const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(__dirname + '/../public'));
app.use('/buildings/:id', express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/availability', async (req, res) => {

  const { id } = req.query;

  if (!id) {

    res.status(400).send('Must Supply a ID parameter with request');

  } else {

    const response = await db.getAvailability(id);

    if (!response) {
      res.status(400).send('Unable to find ID')
    } else {
      res.json(response);
    }

  }

});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});