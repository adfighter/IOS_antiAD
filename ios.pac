function FindProxyForURL(url, host)
{
     //if (reg(url)) {return "PROXY 127.0.0.1:8021";}
     //if (unv(url)) {return "PROXY 127.0.0.1:8021";}
     //if (uno(url)) {return "PROXY 127.0.0.1:8021";}
     //if (spe(url)) {return "PROXY 127.0.0.1:8021";}
     //if (noc(url)) {return "PROXY 127.0.0.1:8021";}
     
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
//ws$/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}


	//universe	
     if (
/akamaihd/g.test(url)||
/analitycs/g.test(url)||
/analysis/g.test(url)||
/analytics/g.test(url)||
/Analytics/g.test(url)||
/banner/g.test(url)||
/click/g.test(url)||
/cpro/g.test(url)||
/track/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}



	//union
     if (
/[-./]cnzz/g.test(url)||
/[-./]aliyun/g.test(url)||
/[-./]tanx/g.test(url)||
/[-./]alibaba/g.test(url)||
/[-./]alimama/g.test(url)||
/[-./]miaozhen/g.test(url)||
/[-./]irs01/g.test(url)||
/[-./]domob/g.test(url)||
/[-./]allyes/g.test(url)||
/[-./]ipinyou/g.test(url)||
/[-./]mct01/g.test(url)||
/[-./]mmstat/g.test(url)||
/[-./]phpwind/g.test(url)||
/[-./]admarket/g.test(url)||
/[-./]admaster/g.test(url)||
/[-./]adpro/g.test(url)||
/[-./]adpush/g.test(url)||
/[-./]adwo/g.test(url)||
/[-./]onetad/g.test(url)||
/[-./]imrworldwide/g.test(url)||
/[-./]oadz/g.test(url)||
/[-./]tanx/g.test(url)||
/[-./]adwo/g.test(url)||
/[-./]wrating/g.test(url)||
/[-./]adnxs/g.test(url)||
/[-./]gridsumdissector/g.test(url)||
/[-./]gentags/g.test(url)||
/[-./]kejet/g.test(url)||
/[-./]rubiconproject/g.test(url)||
/[-./]bloggerads/g.test(url)||
/[-./]adpro/g.test(url)||
/[-./]mmstat/g.test(url)||
/[-./]qucaigg/g.test(url)||
/[-./]1133/g.test(url)||
/[-./]appsflyer/g.test(url)||
/[-./]cooguo/g.test(url)||
/[-./]dupinpu/g.test(url)||
/[-./]appjiagu/g.test(url)||
/[-./]atwola/g.test(url)||
/[-./]applovin/g.test(url)||
/[-./]optaim/g.test(url)||
/[-./]qtmojo/g.test(url)||
/[-./]serving-sys/g.test(url)||
/[-./]adpush/g.test(url)||
/[-./]criteo/g.test(url)||
/[-./]madserving/g.test(url)||
/[-./]jpush/g.test(url)||
/[-./]adcolony/g.test(url)||
/[-./]adfuture/g.test(url)||
/[-./]adtechus/g.test(url)||
/[-./]airpush/g.test(url)||
/[-./]moad/g.test(url)||
/[-./]adtaily/g.test(url)||
/[-./]aduu/g.test(url)
			) {
			return "PROXY 127.0.0.1:8021";
		}


	//special
     if (
/[-./]acscript[-./]js/g.test(url)||
/[-./]52shouyou[-./]/g.test(url)||
/[-./]71[-./]am/g.test(url)||
/[-./]alikunlun[-./]/g.test(url)||
/[-./]baidustatic[-./]/g.test(url)||
/[-./]bdx[-./]playnext[-./]/g.test(url)||
/[-./]changyan[-./]itc[-./]/g.test(url)||
/[-./]changyan[-./]sohu[-./]/g.test(url)||
/[-./]cnsptv[-./]/g.test(url)||
/[-./]coinhive[-./]/g.test(url)||
/[-./]ctsywy[-./]/g.test(url)||
/[-./]geiyujieda[-./]/g.test(url)||
/[-./]harbinbaojia/g.test(url)||
/[-./]hm[-./]baidu/g.test(url)||
/[-./]idm[-./]su[-./]/g.test(url)||
/[-./]lyunsd[-./]/g.test(url)||
/[-./]lzjycy[-./]/g.test(url)||
/[-./]msite[-./]/g.test(url)||
/[-./]penggua[-./]/g.test(url)||
/[-./]pic[-./]liwo[-./]/g.test(url)||
/[-./]pos[-./]baidu[-./]/g.test(url)||
/[-./]pstatic[-./]xunlei/g.test(url)||
/[-./]qhres[-./]/g.test(url)||
/[-./]qihucdn[-./]/g.test(url)||
/[-./]qiqi/g.test(url)||
/[-./]rongchengxxw[-./]/g.test(url)||
/[-./]symag[-./]/g.test(url)||
/[-./]t71q[-./]/g.test(url)||
/[-./]taboola[-./]/g.test(url)||
/[-./]ucqq[-./]/g.test(url)||
/[-./]uczzd[-./]/g.test(url)||
/[-./]weld[-./]iefsf[-./]/g.test(url)||
/[-./]wnbfw[-./]/g.test(url)||
/[-./]xkaqt[-./]/g.test(url)||
/[-./]x[-./]ssp[-./]/g.test(url)||
/[-./]ynjczy[-./]/g.test(url)||
/[-./]zhanzhang[-./]/g.test(url)||
/[-./]cpro/g.test(url)||
/[-./]videos[-./]other/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}



}
