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

  console.log(req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  
  var sendData = cardDB.values();
  
  console.log("sendData: ",sendData);
  res.send(cardDB);
})
.post("/put",(req,res) =>{

  console.log(req.body);
  cardDB.set(req.body.id,req.body);
  console.log(cardDB.values());
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  res.send("ok");

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