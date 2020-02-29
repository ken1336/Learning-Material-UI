import express from 'express';
import cors from 'cors';
import redis from 'redis';
import bodyParser from 'body-parser';
//mport CardDB from './db/mockDB';
const app = express();





// (async ()=>{
//   const client = await redis.createClient(6379,'10.253.8.188');
//   await client.on('connect',await function() {
//     console.log('connected');
//   });
//   await console.log(typeof( client.get('min',[])));


// })();

//var cardDB  = new Map();
var cardDB  = new Map();
app.listen(3001, () => {
  console.log('Min api server listening on port 3001!');
});
app
    .use(express.json())
    .use(cors())
    //.use(express.static(path.resolve(__dirname,'build')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended : true}));


app.post("/getList",(req,res) =>{

  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  
  
  var sendData = Array.from(cardDB.values());
  console.log("db:",cardDB.values());
  console.log("sendData: ",sendData);

  res.send(sendData);
})
.post("/remove",(req,res) =>{

  console.log("remove:",req.body);
  
  cardDB.delete(req.body.ids);

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  console.log("db:",cardDB.values());
  var sendData = Array.from(cardDB.s());
  res.send(sendData);

})

.post("/move",(req,res) =>{

  console.log("move:",req.body);
  
  cardDB.set(req.body.id,req.body);

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  console.log("db:",cardDB.values());
  var sendData = Array.from(cardDB.values());
  res.send(sendData);

})
.post("/put",(req,res) =>{

  console.log("put:",req.body);
  req.body.id = cardDB.size;
  cardDB.set(cardDB.size,req.body);
  console.log(cardDB);
  console.log("send: ",req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  var sendData = Array.from(cardDB.values());
  res.send(sendData);

})
.post("/getCardCount",(req,res) =>{


  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  

  const obj = {"cardCount": cardDB.size}
  const cardCount = JSON.stringify(obj);
  console.log("card count:",cardCount);
  res.send(cardCount);

})
.post("/TestAPI",(req,res)=>{

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  console.log("request:\n",req.route,"\n",req.body);
  res.send("hello");
})