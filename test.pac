function FindProxyForURL(url, host)
{
 
    if(
    
/videos[-_./?&=%$~]other/g.test(url)||
/[-_./?&=%$~]ad[-_./?&=svx0-9]/g.test(url)||
/[-_./?&=%$~]gg/g.test(url)||
/[-_./?&=%$~]guangg/g.test(url)||
/[-_./?&=%$~]union[-_./?&=%$~]/g.test(url)||
/[-_./?&=%$~]stat[-_./?&=s]+/g.test(url)||
/[-_./?&=%$~]admin[0-9]+/g.test(url)||
/[^/][^g]\.alicdn/g.test(url)||
/[^c]count/g.test(url)||
/[-_./?&=%$~]ws$/g.test(url)

     )  {
     //return "PROXY localhost:0";
     return "PROXY 127.0.0.1:8021";
    //return "DIRECT" 
   }
}
