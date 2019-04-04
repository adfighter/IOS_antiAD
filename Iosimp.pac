function FindProxyForURL(url, host)
{
     //if (reg(url)) {return "PROXY 127.0.0.1:8021";}
     //if (unv(url)) {return "PROXY 127.0.0.1:8021";}
     //if (uno(url)) {return "PROXY 127.0.0.1:8021";}
     //if (spe(url)) {return "PROXY 127.0.0.1:8021";}
     //if (noc(url)) {return "PROXY 127.0.0.1:8021";}
     
url=url.replace(/\//ig, ".");

   
   //keygen-->
     if (
/acdid[-_./?&=]acd/g.test(url)
      ) {
      return "PROXY 127.0.0.1:8021";
      }

//app-->
     if (true
      ) {
      return "PROXY 127.0.0.1:8021";
      }



   //<---app
}
