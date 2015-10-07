var SERVER_DOMAIN = 'localhost';
var SERVER_PORT = '3000';
var HTTP = 'http';

function requestUrl(pagePath){
    return HTTP + '://' + SERVER_DOMAIN + ':' + SERVER_PORT + '/' + pagePath;
}
