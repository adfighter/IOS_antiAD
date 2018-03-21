function FindProxyForURL(url, host)
{
    
     
url=url.replace(/\//ig, ".");

     //regexp
     if (
/[-_./?&=]+ad[-_./?&=svx0-9]/g.test(url)||
/[-_./?&=]+gg/g.test(url)||
/[-_./?&=]+guangg/g.test(url)||
/[-_./?&=]+union./g.test(url)||
/stat[-_./?&=s]+/g.test(url)||
/[-_./?&=]+admin[0-9]+/g.test(url)||
/[^/][^g].alicdn/g.test(url)||
/[-_./?&=]+pagead[-_./?&=0-9]+/g.test(url)||
/[^c]count/g.test(url)||
/[-./]ws$/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}



}
