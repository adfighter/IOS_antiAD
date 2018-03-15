function FindProxyForURL(url, host)
{
 try{
	 if (!/[/]/.test(url)) {alert("/ is ok");
			       return "DIRECT";
			       }
    }catch(err){
	    if(
    /pagead[^0-9]/ig.test(url)
     ){
     //return "PROXY localhost:0";
		    alert("catch it");
     return "PROXY 127.0.0.1:8021";
     
    //return "DIRECT" 
    }
 		}
    
}
