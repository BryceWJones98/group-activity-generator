const config = require("config");
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const axios = require('axios');

app.get('/', (req, res) => {
  console.log(req);
  res.send('Hello world!');
});

app.post('/', (req, res) => {

  if(req.body.sender_type === 'user'){

    console.log(req.body);

      axios.post(config.groupme.message_post_url, {
        "token" : config.groupme.token,
        "bot_id"  : config.groupme.bot_id,
        "text"    : "Got it. I can't do anything yet."
      }).then(res => {
        console.log(res);
      }).catch(error => {
        console.error(error);
      });

  }

});

app.listen(config.server.port, () => {
  console.log(`Server running and listening on port ${config.server.port}`);
});