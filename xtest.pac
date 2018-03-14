function FindProxyForURL(url, host)
{
 
    if(
    

/pagead[^0-9]/g.test(url)

     )  {
     //return "PROXY localhost:0";
     return "PROXY 127.0.0.1:8021";
    //return "DIRECT" 
   }
}
