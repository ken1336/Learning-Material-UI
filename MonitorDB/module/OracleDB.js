var oracledb = require('oracledb');
var fnc = require('../lib/fnc.js');
var mock = require('../mock/dbMock.js');

const GetIndexListQuery = "SELECT OWNER,INDEX_NAME, BLEVEL, DECODE(BLEVEL, 0 , 'OK BLEVEL',1,'OK BLEVEL', 2,'OK BLEVEL', 3, 'OK BLEVEL',4,'OK BLEVEL', 'BLEVEL HIGH')FROM DBA_INDEXES WHERE OWNER = 'UADBKT_9' AND INDEX_NAME NOT LIKE '%SYS%' AND INDEX_NAME NOT LIKE '%UACPESTATH%' AND INDEX_NAME NOT LIKE '%UACPESTATD%' AND INDEX_NAME LIKE 'UACPE_%'";
const AnalyzeIndexQuery = index_id => "ANALYZE INDEX "+index_id+" validate STRUCTURE";
const ResultIndexQuery = " select NAME, DEL_LF_ROWS*100/decode(LF_ROWS, 0, 1, LF_ROWS) PCT_DELETED from index_stats";

const config = {
    user: "uadbkt_9",
    password: "fmsdemo",
    connectString: "10.253.12.178/hems"
    
};

exports.GetIndexFragmentationRatioMock = async () =>{
    return mock.GetIndexFragmentationRatioMock();
}
exports.GetIndexListMock = async () =>{
    return mock.GetIndexListMock();
}


exports.GetIndexFragmentationRatioEx = async () =>{
    const db = fnc._curry(config);
    const b = await db(GetIndexList);
    console.log(b);
    
    
    var out = [];
    for(v of b.map(v=>v[1]).slice(1,8)){
        console.log(v);
        const GetIndexFragmentationRatioByName = GetIndexFragmentationRatio(v);
        const f = await fnc.retry(0,await db(GetIndexFragmentationRatioByName));
        out.push(f);
        
    };
    console.log('out: ', fnc._flat(out));
    return fnc._flat(out);
}

exports.GetIndexListEx = async () =>{

    return GetIndexList(config);
}


const GetIndexFragmentationRatio = index_name=> async config =>  {


    return async () =>{
        
            const conn = await oracledb.getConnection(config)
            .catch(e=>new Promise(new Error(index_name)));

            await conn.execute(AnalyzeIndexQuery(index_name),[])
            .catch(async e=>{
                
                return  await new Promise((resolve,reject)=>{
                    
                     reject(index_name);
                });
               
               
            });

            return await conn.execute(ResultIndexQuery,[])
            .then(v=>v.rows).catch(e=>new Promise(new Error(index_name)));

    };
};


const GetIndexList = async config =>  {
    
    
    try{
        const conn = await oracledb.getConnection(config);
        const result =await conn.execute(GetIndexListQuery,[])
        .catch(e=>doRelease(conn));
        
        return result.rows;
    } catch(e){
        console.log(e)
        await doRelease(conn);
    }
};

const doRelease = connection => {
    connection.release(err=> {
        err? console.error('error:',err):console.error('release:',err);
    });
}
