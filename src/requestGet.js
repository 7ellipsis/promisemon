const req=require('request-promise');
const memcache=require('memory-cache');
const {values}=require('./defaults')
exports.get=(url)=>{
    let isRejected=false;
        const cache=memcache.get(url);
        if(cache!==null)
        {
        return new Promise((res,rej)=>res(cache)) ;
        }
        else
        {
            result=req(url).catch((err)=>{
                isRejected=true;
                return new Promise((res,rej)=>res(err.name)) });
                
if(isRejected)
return new Promise((res,rej)=>res(result.message)) ;
    if(values.cacheLimit>0)
        result.then((data)=>memcache.put(url,data,values.cacheLimit));
        else
        return new Promise((res,rej)=>res("The cache limit is 0 or less. Increase")) 
return new Promise((res,rej)=>res(result)) ;
}}

