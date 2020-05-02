const { values } = require('./defaults.js')

exports.setPokedexConfig=config=>{
    if(config){
        if (config.hasOwnProperty('protocol')) {
            values.setProtocol(config.protocol)
        }
        if (config.hasOwnProperty('hostName')) {
            values.setHostName(config.hostName)
        }
        if (config.hasOwnProperty('versionPath')) {
            values.setVersionPath(config.versionPath)
        }
        if (config.hasOwnProperty('cacheLimit')) {
            values.setCacheLimit(config.cacheLimit)
        }
    }
}

exports.setPokedexRootConfig=config=>{
    if(config){
        if (config.hasOwnProperty('protocol')) {
            values.setProtocol(config.protocol)
        }
        if (config.hasOwnProperty('hostName')) {
            values.setHostName(config.hostName)
        }
        if (config.hasOwnProperty('versionPath')) {
            values.setVersionPath(config.versionPath)
        }
        if (config.hasOwnProperty('cacheLimit')) {
            values.setCacheLimit(config.cacheLimit)
        }
    if (config.hasOwnProperty('offset')) {
        values.setOffset(config.offset)
    }
    if (config.hasOwnProperty('limit')) {
        values.setLimit(config.limit)
    }
}
}