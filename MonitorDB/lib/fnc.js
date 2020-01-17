exports._curry = arg => callback => callback(arg);
exports._pipe = (...fns)=>(value) => fns.reduce((acc,fn)=>fn(acc),value);
exports._flat = v=>v.reduce((acc, val) => acc.concat(val), []);

exports.sleep = t=>{
   return new Promise(resolve=>setTimeout(resolve,t));
}

exports.retry = async (n, p)=> {
  
    console.log(n);
    await this.sleep(100);
    return await p().then(r=>{console.log('log: ',r); return r;}).catch(r=>{console.log('error log: ',r);return n < 10 ? this.retry(n+1,p) : r} );
    

}

