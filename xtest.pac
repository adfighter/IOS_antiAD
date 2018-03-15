function FindProxyForURL(url, host)
{
 try{
	 if (!/[/]/.test(url)) {alert("/ is ok");}
    }catch(err){
	    if(
    /pagead[^0-9]/ig.test(url)
     ){
     //return "PROXY localhost:0";
     //return "PROXY 127.0.0.1:8021";
     alert("catch it");
    //return "DIRECT" 
    }
 		}
    
}
