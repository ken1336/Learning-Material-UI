const express = require('express');
const app = express();
var router = require('./router/DBStatisticsAPI')(app);
var bodyParser = require('body-parser'); 
const path = require('path');
const cors = require('cors');
app.listen(3001, () => {
  console.log('Min api server listening on port 3001!');
});

app
    .use(express.json())
    .use(cors())
    .use(express.static(path.resolve(__dirname,'build')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended : true}));


app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html')); 
});
app.post("/TestAPI",(req,res)=>{

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  console.log("request:\n",req.route,"\n",req.body);
  res.send("hello");
})