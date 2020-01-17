const express = require('express');
const app = express();
var router = require('./router/DBStatisticsAPI')(app);
const path = require('path');
const cors = require('cors');
app.listen(3001, () => {
  console.log('Min api server listening on port 3001!');
});

app
    .use(express.json())
    .use(cors())
    .use(express.static(path.resolve(__dirname,'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html')); 
});