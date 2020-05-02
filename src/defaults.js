const values={};
values.limit=20;
values.cacheLimit=1000000 * 1000; //11days
values.offset = 0;
values.protocol = 'https';
values.hostName = '://pokeapi.co';
values.version = '/api/v2/';

values.setOffset = newOffset => {
    values.offset = newOffset - 1;
}
values.setLimit = newLimit => {
    values.limit = newLimit + 1;
}
values.setTimeout = newTimeout => {
    values.timeout = newTimeout;
}
values.setCacheLimit = newCacheLimit => {
    values.cacheLimit = newCacheLimit;
}
values.setVersion = newVersionPath => {
    values.version = newVersionPath;
}

exports.values = values;