function FindProxyForURL(url, host)
{
     //if (reg(url)) {return "PROXY 127.0.0.1:8021";}
     //if (unv(url)) {return "PROXY 127.0.0.1:8021";}
     //if (uno(url)) {return "PROXY 127.0.0.1:8021";}
     //if (spe(url)) {return "PROXY 127.0.0.1:8021";}
     //if (noc(url)) {return "PROXY 127.0.0.1:8021";}
     
url=url.replace(/[^0-9a-zA-Z]/ig, "-");

	
//keygen-->
     if (
/acdid[-_./?&=]acd/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}

//app-->
		
     if (
     //nplayer
/[-_./?&=]startappservice[-_./?&=]/g.test(url)||
/[-_./?&=]appodeal/g.test(url)||
/[-_./?&=]jomodns[-_./?&=]/g.test(url)||
/[-_./?&=]applvn[-_./?&=]/g.test(url)||
/[-_./?&=]rayjump[-_./?&=]/g.test(url)||
/[-_./?&=]moatads[-_./?&=]/g.test(url)||
/[-_./?&=]adservice[-_./?&=]/g.test(url)||
/[-_./?&=]doubleclick[-_./?&=]/g.test(url)||
/[-_./?&=]vungle[-_./?&=]/g.test(url)||
		

	 //yangshiyingyin
/[-_./?&=]bjcathay[-_./?&=]/g.test(url)||


	//iqiyi
/[-_./?&=]cupid[-_./?&=i]+qiyi/g.test(url)||
/[-_./?&=]msg[-_./?&=i]+qiyi/g.test(url)||
/[-_./?&=]msg[-_./?&=]video[-_./?&=is]+qiyi/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}



	//<---app
}
