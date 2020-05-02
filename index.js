const endpoints=require('./src/endpoints')
const configurator =require('./src/config.js')
const {values}=require('./src/defaults.js')
const rootEnd=require('./src/listRootEnd.js')
const {get}=require('./src/requestGet')
class Pokedex{
constructor(config)
{
    if(config)
    {
    configurator.setPokedexConfig(config);
    configurator.setPokedexRootConfig(config);
    }
    endpoints.forEach(endpoint=>{
        this[endpoint[0]]=(name)=>{
            if(name)
            {
            if(typeof name==='string' || typeof name==='number')
return get(values.protocol+values.hostName+values.version+endpoint[1]+"/"+name);     
else
return new Promise((res,rej)=>res("The entered date should be number or string"));
}
else
    return new Promise((res,rej)=>res("Function requires an argument"));
}})
rootEnd.forEach(rootPoints=>{
    this[rootPoints[0]]=()=>get(values.protocol+values.hostName+values.version+rootPoints[1]+'?limit='+values.limit+'&offset='+values.offset);
})
}}
module.exports=Pokedex;