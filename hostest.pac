var proxy = "PROXY server01.pac.itzmx.com:25;";
function FindProxyForURL(url, host){
if(/google/.test(url)){
return proxy;
   }
}
