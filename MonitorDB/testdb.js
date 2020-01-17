var minDB = require('./OracleDB.js');
var oracledb = require('oracledb');
var fnc = require('./lib/fnc.js');
var config = {
    user: "uadbkt_9",
    password: "fmsdemo",
    connectString: "10.253.12.178/hems"
    
};

exports.GetDBFragmentationRate = async () =>{
    const db = fnc._curry(config);
    const b = await db(minDB.getIndexList);
    console.log(b);
    
    
    var out = [];
    for(v of b.map(v=>v[1]).slice(1,5)){
        console.log(v);
        const GetIndexFragmentationRatioByName = minDB.GetIndexFragmentationRatio(v);
        const f = await fnc.retry(0,await db(GetIndexFragmentationRatioByName));
        out.push(f);
        
    };
    console.log('out: ', fnc._flat(out));
    return fnc._flat(out);
}
minDB.GetDBFragmentationRate();
// (async ()=>{

//     const db = fnc._curry(config);
//     const b = await db(minDB.getIndexList);
//     console.log(b);
    
    
//     var out = [];
//     for(v of b.map(v=>v[1])){
//         console.log(v);
//         const GetIndexFragmentationRatioByName = minDB.GetIndexFragmentationRatio(v);
//         const f = await fnc.retry(0,await db(GetIndexFragmentationRatioByName));
//         out.push(f);
        
//     };
//     console.log('out: ', fnc._flat(out));
 // })();
 


    
   

// (async ()=>{
//     const conn =await oracledb.getConnection(config);
//     const db = fnc._curry(conn);
    
//     const b = await db(getIndexList);
    
//     const index_name = b.map(v=>v[1]).slice(1,7);
//     for(v of index_name){
        
//         const GetIndexFragmentationRatioByName = await GetIndexFragmentationRatio(v);
//         //const r =await retry(3, db(GetIndexFragmentationRatioByName));
//         console.log('name: ', v);
//         const t = await retry(1,await db(GetIndexFragmentationRatioByName));
//         console.log('out: ', t);
        

//     };
    
    

//   })();
 