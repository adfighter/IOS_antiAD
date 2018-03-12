function FindProxyForURL(url, host)
{
 
    if(


/videos\Wother/i.test(url)||
     
/\Wad[_svx0-9]?\W/i.test(url)||
/\Wgg/i.test(url)||
/\Wguangg/i.test(url)

    )  {
     //return "PROXY localhost:0";
     return "PROXY 127.0.0.1:8021";
    //return "DIRECT" 
   }
}
