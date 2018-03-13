function FindProxyForURL(url, host)
{
 
    if(
    
/[-_./?&=%$~]ad[-_./?&=%$~svx]/g.test(url)||
/[-_./?&=%$~]cnzz[-_./?&=%$~]com[-_./?&=%$~]/g.test(url)

     )  {
     //return "PROXY localhost:0";
     return "PROXY 127.0.0.1:8021";
    //return "DIRECT" 
   }
}
