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
////keygen<--
	
     //regexp-->
     if (
/[-_./?&=]+ad[-_./?&=svx0-9]/g.test(url)||
/[-_./?&=]+gg/g.test(url)||
/[-_./?&=]+guangg/g.test(url)||
/[-_./?&=]+union./g.test(url)||
/stat[-_./?&=s]+/g.test(url)||
/[-_./?&=]+admin[0-9]+/g.test(url)||
/[-_./?&=]+pagead[-_./?&=0-9]+/g.test(url)||
/[^c]count/g.test(url)||
/ws+[:]/g.test(url)||
	     /[？]market/g.test(url)||
/mob[0-9./]/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}
	//<---regexp	

	//universe-->	
     if (
/analitycs/g.test(url)||
/analysis/g.test(url)||
/analytics/g.test(url)||
/Analytics/g.test(url)||
/banner/g.test(url)||
/click/g.test(url)||
/cpro/g.test(url)||
/track/g.test(url)||
/trace/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}
	//<--universe	


	//union-->
     if (
/[-_./?&=]cnzz/g.test(url)||
/[-_./?&=]aliyun/g.test(url)||
/[-_./?&=]tanx/g.test(url)||
/[-_./?&=]alibaba/g.test(url)||
/[-_./?&=]alimama/g.test(url)||
/[-_./?&=]miaozhen/g.test(url)||
/[-_./?&=]irs01/g.test(url)||
/[-_./?&=]allyes/g.test(url)||
/[-_./?&=]ipinyou/g.test(url)||
/[-_./?&=]mct01/g.test(url)||
/[-_./?&=]mmstat/g.test(url)||
/[-_./?&=]phpwind/g.test(url)||
/[-_./?&=]admarket/g.test(url)||
/[-_./?&=]admaster/g.test(url)||
/[-_./?&=]adpro/g.test(url)||
/[-_./?&=]adpush/g.test(url)||
/[-_./?&=]adwo/g.test(url)||
/[-_./?&=]onetad/g.test(url)||
/[-_./?&=]imrworldwide/g.test(url)||
/[-_./?&=]oadz/g.test(url)||
/[-_./?&=]tanx/g.test(url)||
/[-_./?&=]adwo/g.test(url)||
/[-_./?&=]wrating/g.test(url)||
/[-_./?&=]adnxs/g.test(url)||
/[-_./?&=]gridsumdissector/g.test(url)||
/[-_./?&=]gentags/g.test(url)||
/[-_./?&=]kejet/g.test(url)||
/[-_./?&=]rubiconproject/g.test(url)||
/[-_./?&=]bloggerads/g.test(url)||
/[-_./?&=]adpro/g.test(url)||
/[-_./?&=]mmstat/g.test(url)||
/[-_./?&=]qucaigg/g.test(url)||
/[-_./?&=]1133/g.test(url)||
/[-_./?&=]appsflyer/g.test(url)||
/[-_./?&=]cooguo/g.test(url)||
/[-_./?&=]dupinpu/g.test(url)||
/[-_./?&=]appjiagu/g.test(url)||
/[-_./?&=]atwola/g.test(url)||
/[-_./?&=]applovin/g.test(url)||
/[-_./?&=]optaim/g.test(url)||
/[-_./?&=]qtmojo/g.test(url)||
/[-_./?&=]adpush/g.test(url)||
/[-_./?&=]criteo/g.test(url)||
/[-_./?&=]madserving/g.test(url)||
/[-_./?&=]jpush/g.test(url)||
/[-_./?&=]adcolony/g.test(url)||
/[-_./?&=]adfuture/g.test(url)||
/[-_./?&=]adtechus/g.test(url)||
/[-_./?&=]airpush/g.test(url)||
/[-_./?&=]moad/g.test(url)||
/[-_./?&=]adtaily/g.test(url)||
/[-_./?&=]aduu/g.test(url)||
/[-_./?&=]vungle/g.test(url)||
/[-_./?&=]rayjump/g.test(url)||
/[-_./?&=]moatads/g.test(url)||
/[-_./?&=]mediav/g.test(url)||
/[-_./?&=]scorecardresearch/g.test(url)||
/[-_./?&=]mookie/g.test(url)||
/[-_./?&=]reachmax/g.test(url)||
/[-_./?&=]xtgreat/g.test(url)||
/[-_./?&=]jiathis/g.test(url)
			) {
			return "PROXY 127.0.0.1:8021";
		}
	//<--union


	//special-->
     if (
/[-_./?&=]acscript[-_./?&=]js/g.test(url)||
/[-_./?&=]52shouyou[-_./?&=]/g.test(url)||
/[-_./?&=]71[-_./?&=]am/g.test(url)||
/[-_./?&=]alikunlun[-_./?&=]/g.test(url)||
/[-_./?&=]baidustatic[-_./?&=]/g.test(url)||
/[-_./?&=]bdx[-_./?&=]playnext[-_./?&=]/g.test(url)||
/[-_./?&=]changyan[-_./?&=]itc[-_./?&=]/g.test(url)||
/[-_./?&=]changyan[-_./?&=]sohu[-_./?&=]/g.test(url)||
/[-_./?&=]cnsptv[-_./?&=]/g.test(url)||
/[-_./?&=]coinhive[-_./?&=]/g.test(url)||
/[-_./?&=]ctsywy[-_./?&=]/g.test(url)||
/[-_./?&=]geiyujieda[-_./?&=]/g.test(url)||
/[-_./?&=]harbinbaojia/g.test(url)||
/[-_./?&=]hm[-_./?&=]baidu/g.test(url)||
/[-_./?&=]idm[-_./?&=]su[-_./?&=]/g.test(url)||
/[-_./?&=]lyunsd[-_./?&=]/g.test(url)||
/[-_./?&=]lzjycy[-_./?&=]/g.test(url)||
/[-_./?&=]msite[-_./?&=]/g.test(url)||
/[-_./?&=]penggua[-_./?&=]/g.test(url)||
/[-_./?&=]pic[-_./?&=]liwo[-_./?&=]/g.test(url)||
/[-_./?&=]pos[-_./?&=]baidu[-_./?&=]/g.test(url)||
/[-_./?&=]pstatic[-_./?&=]xunlei/g.test(url)||
/[-_./?&=]qhres[-_./?&=]/g.test(url)||
/[-_./?&=]qihucdn[-_./?&=]/g.test(url)||
/[-_./?&=]qiqi/g.test(url)||
/[-_./?&=]rongchengxxw[-_./?&=]/g.test(url)||
/[-_./?&=]symag[-_./?&=]/g.test(url)||
/[-_./?&=]t71q[-_./?&=]/g.test(url)||
/[-_./?&=]taboola[-_./?&=]/g.test(url)||
/[-_./?&=]ucqq[-_./?&=]/g.test(url)||
/[-_./?&=]uczzd[-_./?&=]/g.test(url)||
/[-_./?&=]weld[-_./?&=]iefsf[-_./?&=]/g.test(url)||
/[-_./?&=]wnbfw[-_./?&=]/g.test(url)||
/[-_./?&=]xkaqt[-_./?&=]/g.test(url)||
/[-_./?&=]x[-_./?&=]ssp[-_./?&=]/g.test(url)||
/[-_./?&=]ynjczy[-_./?&=]/g.test(url)||
/[-_./?&=]zhanzhang[-_./?&=]/g.test(url)||
/[-_./?&=]videos[-_./?&=]other/g.test(url)||
/[-_./?&=]51[-_./?&=]la/g.test(url)||
/[-_./?&=]serving[-_./?&=]sys/g.test(url)||
/[-_./?&=]app[-_./?&=]measurement/g.test(url)||
/[-_./?&=]s[-_./?&=]zgclmw/g.test(url)||
/[-_./?&=]e[-_./?&=]qxfly[-_./?&=]/g.test(url)||
/[-_./?&=]pkdu[-_./?&=]/g.test(url)||
/[-_./?&=]69lm[-_./?&=]/g.test(url)||
/[-_./?&=]jjxgly[-_./?&=]/g.test(url)||
/[-_./?&=]ksksqa[-_./?&=]/g.test(url)||
/[-_./?&=]zgc987[-_./?&=]/g.test(url)||
/[-_./?&=]199[-_./?&=]180[-_./?&=]100[-_./?&=]185/g.test(url)||
/[-_./?&=]88rpg[-_./?&=]/g.test(url)||
/[-_./?&=]dlhygj[-_./?&=]/g.test(url)||
/[-_./?&=]lrswl[-_./?&=]/g.test(url)||
/[-_./?&=]nszmz[-_./?&=]/g.test(url)||
/[-_./?&=]youle55[-_./?&=]/g.test(url)||
/[-_./?&=]5151gj[-_./?&=]/g.test(url)||
/[-_./?&=]3dwwwgame[-_./?&=]/g.test(url)||
/[-_./?&=]goolpter[-_./?&=]/g.test(url)||
/[-_./?&=]kwiago[-_./?&=]/g.test(url)||
/[-_./?&=]images[-_./?&=]sohu/g.test(url)||
/[-_./?&=]x[-_./?&=]jd[-_./?&=]/g.test(url)||
/[-_./?&=]il8r[-_./?&=]/g.test(url)||
/[-_./?&=]datax[-_./?&=]baidu/g.test(url)||
/[-_./?&=]js[-_./?&=]taipwl[-_./?&=]/g.test(url)||
/[-_./?&=]adm[-_./?&=]/g.test(url)||
/[-_./?&=]pub[-_./?&=]funshion/g.test(url)||
	     /[-_./?&=]zhuyuanp[-_./?&=]top/g.test(url)||
	     /[-_./?&=]bibi100/g.test(url)||
	     /[-_./?&=]xmgysweb[-_./?&=]/g.test(url)||
	     /[-_./?&=]heygugu[-_./?&=]/g.test(url)||
/[-_./?&=]qjhlc[-_./?&=]/g.test(url)||
/[-_./?&=]7895983[-_./?&=]/g.test(url)   
		) {
		return "PROXY 127.0.0.1:8021";
		}
	//<--special

	//app-->
     if (
/[-_./?&=]startappservice[-_./?&=]/g.test(url)||
/[-_./?&=]appodeal/g.test(url)||
/[-_./?&=]jomodns[-_./?&=]/g.test(url)||
/[-_./?&=]applvn[-_./?&=]/g.test(url)||
/[-_./?&=]bjcathay[-_./?&=]/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}



	//<---app
 

//video-->
     if (
/qq/g.test(url)||
/gtimg/g.test(url)||
/qiyi/g.test(url)||
/youku/g.test(url)||
/tudou/g.test(url)||
/ykimg/g.test(url)
		) {


 	//qq
     if (
	   
/[-_./?&=][tm]push/g.test(url)||
/[-_./?&=]ad[a-z0-9_\.\-]+[-.]qq/g.test(url)||
/[-_./?&=]mqqad/g.test(url)||
/[-_./?&=]omgmta([0-9]?)+[-_./?&=]qq/g.test(url)||
/[-_./?&=]qqshow([0-9]?)+[-_./?&=]]item[-_./?&=]qq/g.test(url)||
/[-_./?&=]analy[-_./?&=]qq/g.test(url)||
/[-_./?&=]beacon[-_./?&=]qq/g.test(url)||
/[-_./?&=]bugly[-_./?&=]qq/g.test(url)||
/[-_./?&=]d3g[-_./?&=]qq/g.test(url)||
/[-_./?&=]dp3[-_./?&=]qq/g.test(url)||
/[-_./?&=]e[-_./?&=]qq/g.test(url)||
/[-_./?&=]gdt[-_./?&=]qq/g.test(url)||
/[-_./?&=]ic[-_./?&=]qq/g.test(url)||
/[-_./?&=]jqmt[-_./?&=]qq/g.test(url)||
/[-_./?&=]jsqmt[-_./?&=]qq/g.test(url)||
/[-_./?&=]l[-_./?&=]qq/g.test(url)||
/[-_./?&=]masdk[-_./?&=]3g[-_./?&=]qq/g.test(url)||
/[-_./?&=]mini2015[-_./?&=]qq/g.test(url)||
/[-_./?&=]mta[-_./?&=]qq/g.test(url)||
/[-_./?&=]pingma[-_./?&=]qq/g.test(url)||
/[-_./?&=]pmir[-_./?&=]3g[-_./?&=]qq/g.test(url)||
/[-_./?&=]rqd[-_./?&=]qq/g.test(url)||
/[-_./?&=]scdown[-_./?&=]qq/g.test(url)||
/[-_./?&=]sngmta[-_./?&=]qq/g.test(url)||
/[-_./?&=]snswin[-_./?&=]qq/g.test(url)||
/[-_./?&=]ta[-_./?&=]qq/g.test(url)||
/[-_./?&=]tajs[-_./?&=]qq/g.test(url)||
/[-_./?&=]tbs[-_./?&=]qq/g.test(url)||
/[-_./?&=]tcss[-_./?&=]qq/g.test(url)||
/[-_./?&=]updatecenter[-_./?&=]qq/g.test(url)||
/[-_./?&=]uu[-_./?&=]qq/g.test(url)||
/[-_./?&=]wit[-_./?&=]qq/g.test(url)||
/[-_./?&=]yeah[-_./?&=]qq/g.test(url)||
/[-_./?&=]act[-_./?&=]qq/g.test(url)||
/[-_./?&=]ca[-_./?&=]gt/g.test(url)||
/[-_./?&=]etg[-_./?&=]qq/g.test(url)||
/[-_./?&=]lb[-_./?&=]gt/g.test(url)||
/[-_./?&=]pgdt[-_./?&=]gt/g.test(url)||
/[-_./?&=]pms[-_./?&=]mb[-_./?&=]qq/g.test(url)||
/[-_./?&=]report[-_./?&=]qq/g.test(url)||
/[-_./?&=]res[-_./?&=]imtt[-_./?&=]qq/g.test(url)||
/[-_./?&=]wb[-_./?&=]gt/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}
 
	
	//iqiyi	
     if (
/[-_./?&=]iface[-./a-z0-9]+qiyi/g.test(url)||
/[-_./?&=]msg[-./a-z0-9]+qiyi/g.test(url)||
/[-_./?&=]afp[-./a-z0-9]+qiyi/g.test(url)||
/[-_./?&=]ckm[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]cloudpush[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]cm[-_./?&=]passport[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]cmts[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]cupid[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]feedback[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]gamecenter[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]im[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]mbdapp[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]mbdlog[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]notice[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]ota[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]paopao[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]policy[-_./?&=]video[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]rcd[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]sns[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]static[-_./?&=]g[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]store[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]uaa[-_./?&=]iqiyi/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}


	//youku
	if (
		/vali[-_./?&=]cp31[-_./?&=]ott[-_./?&=]cibntv[-_./?&=]net/g.test(url)||
/ems[-_./?&=]youku[-_./?&=]com/g.test(url)||
/val[-_./?&=]atm[-_./?&=]youku[-_./?&=]com/g.test(url)||
/yktd[-_./?&=]m[-_./?&=]cn[-_./?&=]miaozhen[-_./?&=]com/g.test(url)||
/v2[-_./?&=]reachmax[-_./?&=]cn/g.test(url)||
/trace[-_./?&=]rtbasia[-_./?&=]com/g.test(url)||
/ipm[-_./?&=]atm[-_./?&=]youku[-_./?&=]com/g.test(url)||
/gxb[-_./?&=]mmstat[-_./?&=]com/g.test(url)||
/pmptrack-youku[-_./?&=]gentags[-_./?&=]net/g.test(url)||
/mini[-_./?&=]cadillac[-_./?&=]com[-_./?&=]cn/g.test(url)||
/campaign[-_./?&=]lorealparis[-_./?&=]com[-_./?&=]cn/g.test(url)||
/ef-dongfeng[-_./?&=]tanx[-_./?&=]com/g.test(url)||
/rdstat[-_./?&=]tanx[-_./?&=]com/g.test(url)||
/df[-_./?&=]tanx[-_./?&=]com/g.test(url)||
/et[-_./?&=]tanx[-_./?&=]com/g.test(url)||
/click[-_./?&=]tanx[-_./?&=]com/g.test(url)||
/item[-_./?&=]jd[-_./?&=]com/g.test(url)||
/clickc[-_./?&=]admaster[-_./?&=]com[-_./?&=]cn/g.test(url)||
/vyk[-_./?&=]admaster[-_./?&=]com[-_./?&=]cn/g.test(url)||
/[-_./?&=][-./a-z0-9]?msg[-_./?&=]youku/g.test(url)||
/[-_./?&=][a-z]?yes[-_./?&=]youku/g.test(url)||
/[-_./?&=]api[-./a-z0-9]+youku/g.test(url)||
/[-_./?&=]das[-_./?&=][-./a-z0-9]+youku/g.test(url)||
/[-_./?&=]hu[o]?dong[-./a-z0-9]+youku/g.test(url)||
/[-_./?&=]push[-./a-z0-9]+youku/g.test(url)||
/[-_./?&=]sdk[-./a-z0-9]+youku/g.test(url)||
/[-_./?&=]actives[-_./?&=]youku/g.test(url)||
/[-_./?&=]adcontrol[-_./?&=]tudou/g.test(url)||
/[-_./?&=]adplay[-_./?&=]tudou/g.test(url)||
/[-_./?&=]atm[-_./?&=]youku/g.test(url)||
/[-_./?&=]danmu[-_./?&=]youku/g.test(url)||
/[-_./?&=]dl[-_./?&=]g[-_./?&=]youku/g.test(url)||
/[-_./?&=]dmapp[-_./?&=]youku/g.test(url)||
/[-_./?&=]gamex[-_./?&=]mobile[-_./?&=]youku/g.test(url)||
/[-_./?&=]hz[-_./?&=]youku/g.test(url)||
/[-_./?&=]l[-_./?&=]ykimg/g.test(url)||
/[-_./?&=]l[-_./?&=]youku/g.test(url)||
/[-_./?&=]log[-_./?&=]ykimg/g.test(url)||
/[-_./?&=]log[-_./?&=]youku/g.test(url)||
/[-_./?&=]lvip[-_./?&=]youku/g.test(url)||
/[-_./?&=]s[-_./?&=]p[-_./?&=]youku/g.test(url)||
/[-_./?&=]smartvideo[-_./?&=]youku/g.test(url)||
/[-_./?&=]tdrec[-_./?&=]youku/g.test(url)||
/[-_./?&=]test[-_./?&=]ott[-_./?&=]youku/g.test(url)||
/[-_./?&=]wan[-_./?&=]youku/g.test(url)||
/[-_./?&=]ykatr[-_./?&=]youku/g.test(url)||
/[-_./?&=]ykrec[-_./?&=]youku/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}

		
		}
//<---video

 
	//nocoin
     if (
/[-_./?&=]cnhv[.]co/g.test(url)||
/[-_./?&=]coin[-]hive[.]com/g.test(url)||
/[-_./?&=]coinhive[.]com/g.test(url)||
/[-_./?&=]jsecoin[.]com/g.test(url)||
/[-_./?&=]miner[.]pr0gramm[.]com/g.test(url)||
/[-_./?&=]miner[.]pr0gramm[.]com/g.test(url)||
/[-_./?&=]minemytraffic[.]com/g.test(url)||
/[-_./?&=]ppoi[.]org/g.test(url)||
/[-_./?&=]projectpoi[.]com/g.test(url)||
/[-_./?&=]2giga[.]link/g.test(url)||
/[-_./?&=]crypto[-]loot[.]com/g.test(url)||
/[-_./?&=]coinerra[.]com/g.test(url)||
/[-_./?&=]coin[-]have[.]com/g.test(url)||
/[-_./?&=]minero[.]pw/g.test(url)||
/[-_./?&=]api[.]inwemo[.]com/g.test(url)||
/[-_./?&=]rocks[.]io/g.test(url)||
/[-_./?&=]jsccnn[.]com/g.test(url)||
/[-_./?&=]jscdndel[.]com/g.test(url)||
/[-_./?&=]coinhiveproxy[.]com/g.test(url)||
/[-_./?&=]coinblind[.]com/g.test(url)||
/[-_./?&=]coinnebula[.]com/g.test(url)||
/[-_./?&=]monerominer[.]rocks/g.test(url)||
/[-_./?&=]cdn[.]cloudcoins[.]co/g.test(url)||
/[-_./?&=]coinlab[.]biz/g.test(url)||
/[-_./?&=]go[.]megabanners[.]cf/g.test(url)||
/[-_./?&=]go[.]megabanners[.]cf/g.test(url)||
/[-_./?&=]baiduccdn1[.]com/g.test(url)||
/[-_./?&=]wsp[.]marketgid[.]com/g.test(url)||
/[-_./?&=]papoto[.]com/g.test(url)||
/[-_./?&=]flare[-]analytics[.]com/g.test(url)||
/[-_./?&=]sparechange[.]io/g.test(url)||
/[-_./?&=]zlx[.]com[.]br/g.test(url)||
/[-_./?&=]m[.]anyfiles[.]ovh/g.test(url)||
/[-_./?&=]freecontent[.]bid/g.test(url)||
/[-_./?&=]freecontent[.]loan/g.test(url)||
/[-_./?&=]freecontent[.]win/g.test(url)||
/[-_./?&=]mutuza[.]win/g.test(url)||
/[-_./?&=]cryptonoter[.]com/g.test(url)||
/[-_./?&=]crypto[-]webminer[.]com/g.test(url)||
/[-_./?&=]cryweb[.]github[.]io/g.test(url)||
/[-_./?&=]crywebber[.]github[.]io/g.test(url)||
/[-_./?&=]adless[.]io/g.test(url)||
/[-_./?&=]hemnes[.]win/g.test(url)||
/[-_./?&=]tidafors[.]xyz/g.test(url)||
/[-_./?&=]moneone[.]ga/g.test(url)||
/[-_./?&=]plexcoin[.]info/g.test(url)||
/[-_./?&=]monkeyminer[.]net/g.test(url)||
/[-_./?&=]mercy[.]ga/g.test(url)||
/[-_./?&=]coinpirate[.]cf/g.test(url)||
/[-_./?&=]cpufan[.]club/g.test(url)||
/[-_./?&=]devphp[.]org[.]ua/g.test(url)||
/[-_./?&=]mining[.]best/g.test(url)||
/[-_./?&=]nfwebminer[.]com/g.test(url)||
/[-_./?&=]webxmr[.]com/g.test(url)||
/[-_./?&=]cryptoloot[.]pro/g.test(url)||
/[-_./?&=]bjorksta[.]men/g.test(url)||
/[-_./?&=]crypto[.]csgocpu[.]com/g.test(url)||
/[-_./?&=]noblock[.]pro/g.test(url)||
/[-_./?&=]cryptobara[.]com/g.test(url)||
/[-_./?&=]reservedoffers[.]club/g.test(url)||
/[-_./?&=]adminer[.]com/g.test(url)||
/[-_./?&=]ad[-]miner[.]com/g.test(url)||
/[-_./?&=]77[.]162[.]125[.]199/g.test(url)||
/[-_./?&=]host[.]d[-]ns[.]ga/g.test(url)||
/[-_./?&=]abc[.]pema[.]cl/g.test(url)||
/[-_./?&=]webmine[.]cz/g.test(url)||
/[-_./?&=]analytics[.]blue/g.test(url)||
/[-_./?&=]smectapop12[.]pl/g.test(url)||
/[-_./?&=]berserkpl[.]net[.]pl/g.test(url)||
/[-_./?&=]webminepool[.]com/g.test(url)||
/[-_./?&=]webminepool[.]tk/g.test(url)||
/[-_./?&=]playerassets[.]info/g.test(url)||
/[-_./?&=]tokyodrift[.]ga/g.test(url)||
/[-_./?&=]webassembly[.]stream/g.test(url)||
/[-_./?&=]okeyletsgo[.]ml/g.test(url)||
/[-_./?&=]hodlers[.]party/g.test(url)||
/[-_./?&=]hodling[.]faith/g.test(url)||
/[-_./?&=]chainblock[.]science/g.test(url)||
/[-_./?&=]candid[.]zone/g.test(url)||
/[-_./?&=]webmine[.]pro/g.test(url)||
/[-_./?&=]1q2w3[.]fun/g.test(url)||
/[-_./?&=]1q2w3[.]me/g.test(url)||
/[-_./?&=]1q2w3[.]top/g.test(url)||
/[-_./?&=]andlache[.]com/g.test(url)||
/[-_./?&=]bablace[.]com/g.test(url)||
/[-_./?&=]bewaslac[.]com/g.test(url)||
/[-_./?&=]biberukalap[.]com/g.test(url)||
/[-_./?&=]bowithow[.]com/g.test(url)||
/[-_./?&=]butcalve[.]com/g.test(url)||
/[-_./?&=]evengparme[.]com/g.test(url)||
/[-_./?&=]gridiogrid[.]com/g.test(url)||
/[-_./?&=]hatcalter[.]com/g.test(url)||
/[-_./?&=]hegrinhar[.]com/g.test(url)||
/[-_./?&=]kedtise[.]com/g.test(url)||
/[-_./?&=]ledinund[.]com/g.test(url)||
/[-_./?&=]nathetsof[.]com/g.test(url)||
/[-_./?&=]renhertfo[.]com/g.test(url)||
/[-_./?&=]rintindown[.]com/g.test(url)||
/[-_./?&=]sparnove[.]com/g.test(url)||
/[-_./?&=]verresof[.]com/g.test(url)||
/[-_./?&=]witthethim[.]com/g.test(url)||
/[-_./?&=]minescripts[.]info/g.test(url)||
/[-_./?&=]nablabee[.]com/g.test(url)||
/[-_./?&=]dronml[.]ml/g.test(url)||
/[-_./?&=]niematego[.]tk/g.test(url)||
/[-_./?&=]tulip18[.]com/g.test(url)||
/[-_./?&=]didnkinrab[.]com/g.test(url)||
/[-_./?&=]ledhenone[.]com/g.test(url)||
/[-_./?&=]losital[.]ru/g.test(url)||
/[-_./?&=]mebablo[.]com/g.test(url)||
/[-_./?&=]moonsade[.]com/g.test(url)||
/[-_./?&=]nebabrop[.]com/g.test(url)||
/[-_./?&=]pearno[.]com/g.test(url)||
/[-_./?&=]rintinwa[.]com/g.test(url)||
/[-_./?&=]willacrit[.]com/g.test(url)||
/[-_./?&=]minr[.]pw/g.test(url)||
/[-_./?&=]staticsfs[.]host/g.test(url)||
/[-_./?&=]cdn[-]code[.]host/g.test(url)||
/[-_./?&=]g[-]content[.]bid/g.test(url)||
/[-_./?&=]static[-]cnt[.]bid/g.test(url)||
/[-_./?&=]statistic[.]date/g.test(url)||
/[-_./?&=]jquery[-]uim[.]download/g.test(url)||
/[-_./?&=]cdn[-]jquery[.]host/g.test(url)||
/[-_./?&=]interestingz[.]pw/g.test(url)||
/[-_./?&=]kippbeak[.]cf/g.test(url)||
/[-_./?&=]pasoherb[.]gq/g.test(url)||
/[-_./?&=]axoncoho[.]tk/g.test(url)||
/[-_./?&=]depttake[.]ga/g.test(url)||
/[-_./?&=]flophous[.]cf/g.test(url)||
/[-_./?&=]pr0gram[.]org/g.test(url)||
/[-_./?&=]authedmine[.]eu/g.test(url)||
/[-_./?&=]monero[-]miner[.]com/g.test(url)||
/[-_./?&=]datasecu[.]download/g.test(url)||
/[-_./?&=]jquery[-]cdn[.]download/g.test(url)||
/[-_./?&=]bhzejltg[.]info/g.test(url)||
/[-_./?&=]pzoifaum[.]info/g.test(url)||
/[-_./?&=]cfcdist[.]loan/g.test(url)||
/[-_./?&=]cfcnet[.]top/g.test(url)||
/[-_./?&=]etzbnfuigipwvs[.]ru/g.test(url)||
/[-_./?&=]freshrefresher[.]com/g.test(url)||
/[-_./?&=]terethat[.]ru/g.test(url)||
/[-_./?&=]gustaver[.]ddns[.]net/g.test(url)||
/[-_./?&=]appelamule[.]com/g.test(url)||
/[-_./?&=]mepirtedic[.]com/g.test(url)||
/[-_./?&=]streambeam[.]io/g.test(url)||
/[-_./?&=]adzjzewsma[.]cf/g.test(url)||
/[-_./?&=]ffinwwfpqi[.]gq/g.test(url)||
/[-_./?&=]ininmacerad[.]pro/g.test(url)||
/[-_./?&=]mhiobjnirs[.]gq/g.test(url)||
/[-_./?&=]cfcdist[.]gdn/g.test(url)||
/[-_./?&=]open[-]hive[-]server[-]1[.]pp[.]ua/g.test(url)||
/[-_./?&=]clickwith[.]bid/g.test(url)||
/[-_./?&=]intactoffers[.]club/g.test(url)||
/[-_./?&=]openkatalog[.]com/g.test(url)||
/[-_./?&=]mine[.]torrent[.]pw/g.test(url)||
/[-_./?&=]mine[.]nahnoji[.]cz/g.test(url)||
/[-_./?&=]hive[.]tubetitties[.]com/g.test(url)||
/[-_./?&=]miner[.]nablabee[.]com/g.test(url)||
/[-_./?&=]p[.]estream[.]to/g.test(url)||
/[-_./?&=]www2[.]adfreetv[.]ch/g.test(url)||
/[-_./?&=]worker[.]salon[.]com/g.test(url)||
/[-_./?&=]pool[.]supportxmr[.]com/g.test(url)||
/[-_./?&=]grf[.]easyhash[.]io/g.test(url)||
/[-_./?&=]1beb2a44[.]space/g.test(url)||
/[-_./?&=]300ca0d0[.]space/g.test(url)||
/[-_./?&=]310ca263[.]space/g.test(url)||
/[-_./?&=]320ca3f6[.]space/g.test(url)||
/[-_./?&=]330ca589[.]space/g.test(url)||
/[-_./?&=]340ca71c[.]space/g.test(url)||
/[-_./?&=]360caa42[.]space/g.test(url)||
/[-_./?&=]370cabd5[.]space/g.test(url)||
/[-_./?&=]3c0cb3b4[.]space/g.test(url)||
/[-_./?&=]3d0cb547[.]space/g.test(url)||
/[-_./?&=]xbasfbno[.]info/g.test(url)||
/[-_./?&=]azvjudwr[.]info/g.test(url)||
/[-_./?&=]jroqvbvw[.]info/g.test(url)||
/[-_./?&=]jyhfuqoh[.]info/g.test(url)||
/[-_./?&=]kdowqlpt[.]info/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}


}
