function FindProxyForURL(url, host)
{
     //if (reg(url)) {return "PROXY 127.0.0.1:8021";}
     //if (unv(url)) {return "PROXY 127.0.0.1:8021";}
     //if (uno(url)) {return "PROXY 127.0.0.1:8021";}
     //if (spe(url)) {return "PROXY 127.0.0.1:8021";}
     //if (noc(url)) {return "PROXY 127.0.0.1:8021";}
     
//url=url.replace(/\//ig, ".");

	
	//keygen-->
     if (
/acdid[^a-z0-9]acd/g.test(url)
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
/mob[0-9./]/g.test(url)||
/[?]market/g.test(url)
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
/[-_./?&=]1133/g.test(url)||
/[-_./?&=]adcolony/g.test(url)||
/[-_./?&=]adfuture/g.test(url)||
/[-_./?&=]admarket/g.test(url)||
/[-_./?&=]admaster/g.test(url)||
/[-_./?&=]adnxs/g.test(url)||
/[-_./?&=]adpro/g.test(url)||
/[-_./?&=]adpro/g.test(url)||
/[-_./?&=]adpush/g.test(url)||
/[-_./?&=]adpush/g.test(url)||
/[-_./?&=]adtaily/g.test(url)||
/[-_./?&=]adtechus/g.test(url)||
/[-_./?&=]aduu/g.test(url)||
/[-_./?&=]adwo/g.test(url)||
/[-_./?&=]adwo/g.test(url)||
/[-_./?&=]airpush/g.test(url)||
/[-_./?&=]alibaba/g.test(url)||
/[-_./?&=]alimama/g.test(url)||
/[-_./?&=]aliyun/g.test(url)||
/[-_./?&=]allyes/g.test(url)||
/[-_./?&=]appjiagu/g.test(url)||
/[-_./?&=]applovin/g.test(url)||
/[-_./?&=]appsflyer/g.test(url)||
/[-_./?&=]atwola/g.test(url)||
/[-_./?&=]bloggerads/g.test(url)||
/[-_./?&=]cnzz/g.test(url)||
/[-_./?&=]cooguo/g.test(url)||
/[-_./?&=]criteo/g.test(url)||
/[-_./?&=]dupinpu/g.test(url)||
/[-_./?&=]gentags/g.test(url)||
/[-_./?&=]gridsumdissector/g.test(url)||
/[-_./?&=]imrworldwide/g.test(url)||
/[-_./?&=]ipinyou/g.test(url)||
/[-_./?&=]irs01/g.test(url)||
/[-_./?&=]jiathis/g.test(url)||
/[-_./?&=]jpush/g.test(url)||
/[-_./?&=]kejet/g.test(url)||
/[-_./?&=]madserving/g.test(url)||
/[-_./?&=]mct01/g.test(url)||
/[-_./?&=]mediav/g.test(url)||
/[-_./?&=]miaozhen/g.test(url)||
/[-_./?&=]moad/g.test(url)||
/[-_./?&=]moatads/g.test(url)||
/[-_./?&=]mookie/g.test(url)||
/[-_./?&=]oadz/g.test(url)||
/[-_./?&=]onetad/g.test(url)||
/[-_./?&=]optaim/g.test(url)||
/[-_./?&=]phpwind/g.test(url)||
/[-_./?&=]qtmojo/g.test(url)||
/[-_./?&=]qucaigg/g.test(url)||
/[-_./?&=]rayjump/g.test(url)||
/[-_./?&=]reachmax/g.test(url)||
/[-_./?&=]rubiconproject/g.test(url)||
/[-_./?&=]scorecardresearch/g.test(url)||
/[-_./?&=]tanx/g.test(url)||
/[-_./?&=]tanx/g.test(url)||
/[-_./?&=]vungle/g.test(url)||
/[-_./?&=]wrating/g.test(url)||
/[-_./?&=]xtgreat/g.test(url)
			) {
			return "PROXY 127.0.0.1:8021";
		}
	//<--union


	//special-->
     if (
/[-_./?&=]199[-_./?&=]180[-_./?&=]100[-_./?&=]185/g.test(url)||
/[-_./?&=]3dwwwgame[-_./?&=]/g.test(url)||
/[-_./?&=]51[-_./?&=]la/g.test(url)||
/[-_./?&=]5151gj[-_./?&=]/g.test(url)||
/[-_./?&=]52shouyou[-_./?&=]/g.test(url)||
/[-_./?&=]69lm[-_./?&=]/g.test(url)||
/[-_./?&=]71[-_./?&=]am/g.test(url)||
/[-_./?&=]7895983[-_./?&=]/g.test(url)||
/[-_./?&=]88rpg[-_./?&=]/g.test(url)||
/[-_./?&=]acscript[-_./?&=]js/g.test(url)||
/[-_./?&=]adm[-_./?&=]/g.test(url)||
/[-_./?&=]alikunlun[-_./?&=]/g.test(url)||
/[-_./?&=]app[-_./?&=]measurement/g.test(url)||
/[-_./?&=]baidustatic[-_./?&=]/g.test(url)||
/[-_./?&=]baisuijk[-_./?&=]/g.test(url)||
/[-_./?&=]bdx[-_./?&=]playnext[-_./?&=]/g.test(url)||
/[-_./?&=]bibi100/g.test(url)||
/[-_./?&=]changyan[-_./?&=]itc[-_./?&=]/g.test(url)||
/[-_./?&=]changyan[-_./?&=]sohu[-_./?&=]/g.test(url)||
/[-_./?&=]chuantu[-_./?&=]/g.test(url)||
/[-_./?&=]cnsptv[-_./?&=]/g.test(url)||
/[-_./?&=]coinhive[-_./?&=]/g.test(url)||
/[-_./?&=]cqjjlsy[-_./?&=]/g.test(url)||
/[-_./?&=]ctsywy[-_./?&=]/g.test(url)||
/[-_./?&=]datax[-_./?&=]baidu/g.test(url)||
/[-_./?&=]dlhygj[-_./?&=]/g.test(url)||
/[-_./?&=]duapp[-_./?&=]/g.test(url)||
/[-_./?&=]e[-_./?&=]qxfly[-_./?&=]/g.test(url)||
/[-_./?&=]erdsyzb[-_./?&=]/g.test(url)||
/[-_./?&=]fuimg[-_./?&=]/g.test(url)||
/[-_./?&=]geiyujieda[-_./?&=]/g.test(url)||
/[-_./?&=]goolpter[-_./?&=]/g.test(url)||
/[-_./?&=]harbinbaojia/g.test(url)||
/[-_./?&=]heygugu[-_./?&=]/g.test(url)||
/[-_./?&=]hm[-_./?&=]baidu/g.test(url)||
/[-_./?&=]idm[-_./?&=]su[-_./?&=]/g.test(url)||
/[-_./?&=]il8r[-_./?&=]/g.test(url)||
/[-_./?&=]images[-_./?&=]sohu/g.test(url)||
/[-_./?&=]jjxgly[-_./?&=]/g.test(url)||
/[-_./?&=]js[-_./?&=]taipwl[-_./?&=]/g.test(url)||
/[-_./?&=]kongmeishi[-_./?&=]/g.test(url)||
/[-_./?&=]ksksqa[-_./?&=]/g.test(url)||
/[-_./?&=]kwiago[-_./?&=]/g.test(url)||
/[-_./?&=]leamain[-_./?&=]/g.test(url)||
/[-_./?&=]lrswl[-_./?&=]/g.test(url)||
/[-_./?&=]lyunsd[-_./?&=]/g.test(url)||
/[-_./?&=]lzjycy[-_./?&=]/g.test(url)||
/[-_./?&=]msite[-_./?&=]/g.test(url)||
/[-_./?&=]nszmz[-_./?&=]/g.test(url)||
/[-_./?&=]penggua[-_./?&=]/g.test(url)||
/[-_./?&=]pic[-_./?&=]liwo[-_./?&=]/g.test(url)||
/[-_./?&=]pkdu[-_./?&=]/g.test(url)||
/[-_./?&=]pos[-_./?&=]baidu[-_./?&=]/g.test(url)||
/[-_./?&=]pstatic[-_./?&=]xunlei/g.test(url)||
/[-_./?&=]pub[-_./?&=]funshion/g.test(url)||
/[-_./?&=]qhres[-_./?&=]/g.test(url)||
/[-_./?&=]qihucdn[-_./?&=]/g.test(url)||
/[-_./?&=]qiqi/g.test(url)||
/[-_./?&=]qjhlc[-_./?&=]/g.test(url)||
/[-_./?&=]railscon[-_./?&=]/g.test(url)||
/[-_./?&=]rongchengxxw[-_./?&=]/g.test(url)||
/[-_./?&=]s[-_./?&=]zgclmw/g.test(url)||
/[-_./?&=]serving[-_./?&=]sys/g.test(url)||
/[-_./?&=]symag[-_./?&=]/g.test(url)||
/[-_./?&=]t71q[-_./?&=]/g.test(url)||
/[-_./?&=]taboola[-_./?&=]/g.test(url)||
/[-_./?&=]ucqq[-_./?&=]/g.test(url)||
/[-_./?&=]uczzd[-_./?&=]/g.test(url)||
/[-_./?&=]videos[-_./?&=]other/g.test(url)||
/[-_./?&=]weld[-_./?&=]iefsf[-_./?&=]/g.test(url)||
/[-_./?&=]wnbfw[-_./?&=]/g.test(url)||
/[-_./?&=]x[-_./?&=]jd[-_./?&=]/g.test(url)||
/[-_./?&=]xkaqt[-_./?&=]/g.test(url)||
/[-_./?&=]xmgysweb[-_./?&=]/g.test(url)||
/[-_./?&=]x[-_./?&=]ssp[-_./?&=]/g.test(url)||
/[-_./?&=]ynjczy[-_./?&=]/g.test(url)||
/[-_./?&=]youle55[-_./?&=]/g.test(url)||
/[-_./?&=]zgc987[-_./?&=]/g.test(url)||
/[-_./?&=]zhanzhang[-_./?&=]/g.test(url)||
/[-_./?&=]zhuyuanp[-_./?&=]top/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}
	//<--special

	//app-->
     if (
/[-_./?&=]startappservice[-_./?&=]/g.test(url)||
/[-_./?&=]appodeal/g.test(url)||
/[-_./?&=]jomodns[-_./?&=]/g.test(url)||
/[-_./?&=]applvn[-_./?&=]/g.test(url)
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
	    
/[^a-z0-9][tm]push/g.test(url)||
/[^a-z0-9]ad[a-z0-9_\.\-]+[-.]qq/g.test(url)||
/[^a-z0-9]mqqad/g.test(url)||
/[^a-z0-9]omgmta([0-9]?)+[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]qqshow([0-9]?)+[^a-z0-9]]item[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]analy[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]beacon[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]bugly[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]d3g[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]dp3[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]e[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]gdt[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]ic[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]jqmt[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]jsqmt[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]l[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]masdk[^a-z0-9]3g[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]mini2015[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]mta[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]pingma[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]pmir[^a-z0-9]3g[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]rqd[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]scdown[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]sngmta[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]snswin[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]ta[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]tajs[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]tbs[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]tcss[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]updatecenter[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]uu[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]wit[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]yeah[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]act[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]ca[^a-z0-9]gt/g.test(url)||
/[^a-z0-9]etg[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]lb[^a-z0-9]gt/g.test(url)||
/[^a-z0-9]pgdt[^a-z0-9]gt/g.test(url)||
/[^a-z0-9]pms[^a-z0-9]mb[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]report[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]res[^a-z0-9]imtt[^a-z0-9]qq/g.test(url)||
/[^a-z0-9]wb[^a-z0-9]gt/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}
 
	
	//iqiyi	
     if (
/[^a-z0-9]gamecenter[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]im[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]mbdapp[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]mbdlog[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]notice[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]ota[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]paopao[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]policy[^a-z0-9]video[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]rcd[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]sns[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]static[^a-z0-9]g[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]store[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]uaa[^a-z0-9]iqiyi/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}


	//youku
	if (
/[^a-z0-9][-./a-z0-9]?msg[^a-z0-9]youku/g.test(url)||
/[^a-z0-9][a-z]?yes[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]api[-./a-z0-9]+youku/g.test(url)||
/[^a-z0-9]das[^a-z0-9][-./a-z0-9]+youku/g.test(url)||
/[^a-z0-9]hu[o]?dong[-./a-z0-9]+youku/g.test(url)||
/[^a-z0-9]push[-./a-z0-9]+youku/g.test(url)||
/[^a-z0-9]sdk[-./a-z0-9]+youku/g.test(url)||
/[^a-z0-9]actives[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]adcontrol[^a-z0-9]tudou/g.test(url)||
/[^a-z0-9]adplay[^a-z0-9]tudou/g.test(url)||
/[^a-z0-9]atm[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]danmu[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]dl[^a-z0-9]g[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]dmapp[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]gamex[^a-z0-9]mobile[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]hz[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]l[^a-z0-9]ykimg/g.test(url)||
/[^a-z0-9]l[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]log[^a-z0-9]ykimg/g.test(url)||
/[^a-z0-9]log[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]lvip[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]s[^a-z0-9]p[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]smartvideo[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]tdrec[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]test[^a-z0-9]ott[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]wan[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]ykatr[^a-z0-9]youku/g.test(url)||
/[^a-z0-9]ykrec[^a-z0-9]youku/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}

		
		}
//<---video

 
	//nocoin
     if (
/[^a-z0-9]cnhv[.]co/g.test(url)||
/[^a-z0-9]coin[-]hive[.]com/g.test(url)||
/[^a-z0-9]coinhive[.]com/g.test(url)||
/[^a-z0-9]jsecoin[.]com/g.test(url)||
/[^a-z0-9]miner[.]pr0gramm[.]com/g.test(url)||
/[^a-z0-9]miner[.]pr0gramm[.]com/g.test(url)||
/[^a-z0-9]minemytraffic[.]com/g.test(url)||
/[^a-z0-9]ppoi[.]org/g.test(url)||
/[^a-z0-9]projectpoi[.]com/g.test(url)||
/[^a-z0-9]2giga[.]link/g.test(url)||
/[^a-z0-9]crypto[-]loot[.]com/g.test(url)||
/[^a-z0-9]coinerra[.]com/g.test(url)||
/[^a-z0-9]coin[-]have[.]com/g.test(url)||
/[^a-z0-9]minero[.]pw/g.test(url)||
/[^a-z0-9]api[.]inwemo[.]com/g.test(url)||
/[^a-z0-9]rocks[.]io/g.test(url)||
/[^a-z0-9]jsccnn[.]com/g.test(url)||
/[^a-z0-9]jscdndel[.]com/g.test(url)||
/[^a-z0-9]coinhiveproxy[.]com/g.test(url)||
/[^a-z0-9]coinblind[.]com/g.test(url)||
/[^a-z0-9]coinnebula[.]com/g.test(url)||
/[^a-z0-9]monerominer[.]rocks/g.test(url)||
/[^a-z0-9]cdn[.]cloudcoins[.]co/g.test(url)||
/[^a-z0-9]coinlab[.]biz/g.test(url)||
/[^a-z0-9]go[.]megabanners[.]cf/g.test(url)||
/[^a-z0-9]go[.]megabanners[.]cf/g.test(url)||
/[^a-z0-9]baiduccdn1[.]com/g.test(url)||
/[^a-z0-9]wsp[.]marketgid[.]com/g.test(url)||
/[^a-z0-9]papoto[.]com/g.test(url)||
/[^a-z0-9]flare[-]analytics[.]com/g.test(url)||
/[^a-z0-9]sparechange[.]io/g.test(url)||
/[^a-z0-9]zlx[.]com[.]br/g.test(url)||
/[^a-z0-9]m[.]anyfiles[.]ovh/g.test(url)||
/[^a-z0-9]freecontent[.]bid/g.test(url)||
/[^a-z0-9]freecontent[.]loan/g.test(url)||
/[^a-z0-9]freecontent[.]win/g.test(url)||
/[^a-z0-9]mutuza[.]win/g.test(url)||
/[^a-z0-9]cryptonoter[.]com/g.test(url)||
/[^a-z0-9]crypto[-]webminer[.]com/g.test(url)||
/[^a-z0-9]cryweb[.]github[.]io/g.test(url)||
/[^a-z0-9]crywebber[.]github[.]io/g.test(url)||
/[^a-z0-9]adless[.]io/g.test(url)||
/[^a-z0-9]hemnes[.]win/g.test(url)||
/[^a-z0-9]tidafors[.]xyz/g.test(url)||
/[^a-z0-9]moneone[.]ga/g.test(url)||
/[^a-z0-9]plexcoin[.]info/g.test(url)||
/[^a-z0-9]monkeyminer[.]net/g.test(url)||
/[^a-z0-9]mercy[.]ga/g.test(url)||
/[^a-z0-9]coinpirate[.]cf/g.test(url)||
/[^a-z0-9]cpufan[.]club/g.test(url)||
/[^a-z0-9]devphp[.]org[.]ua/g.test(url)||
/[^a-z0-9]mining[.]best/g.test(url)||
/[^a-z0-9]nfwebminer[.]com/g.test(url)||
/[^a-z0-9]webxmr[.]com/g.test(url)||
/[^a-z0-9]cryptoloot[.]pro/g.test(url)||
/[^a-z0-9]bjorksta[.]men/g.test(url)||
/[^a-z0-9]crypto[.]csgocpu[.]com/g.test(url)||
/[^a-z0-9]noblock[.]pro/g.test(url)||
/[^a-z0-9]cryptobara[.]com/g.test(url)||
/[^a-z0-9]reservedoffers[.]club/g.test(url)||
/[^a-z0-9]adminer[.]com/g.test(url)||
/[^a-z0-9]ad[-]miner[.]com/g.test(url)||
/[^a-z0-9]77[.]162[.]125[.]199/g.test(url)||
/[^a-z0-9]host[.]d[-]ns[.]ga/g.test(url)||
/[^a-z0-9]abc[.]pema[.]cl/g.test(url)||
/[^a-z0-9]webmine[.]cz/g.test(url)||
/[^a-z0-9]analytics[.]blue/g.test(url)||
/[^a-z0-9]smectapop12[.]pl/g.test(url)||
/[^a-z0-9]berserkpl[.]net[.]pl/g.test(url)||
/[^a-z0-9]webminepool[.]com/g.test(url)||
/[^a-z0-9]webminepool[.]tk/g.test(url)||
/[^a-z0-9]playerassets[.]info/g.test(url)||
/[^a-z0-9]tokyodrift[.]ga/g.test(url)||
/[^a-z0-9]webassembly[.]stream/g.test(url)||
/[^a-z0-9]okeyletsgo[.]ml/g.test(url)||
/[^a-z0-9]hodlers[.]party/g.test(url)||
/[^a-z0-9]hodling[.]faith/g.test(url)||
/[^a-z0-9]chainblock[.]science/g.test(url)||
/[^a-z0-9]candid[.]zone/g.test(url)||
/[^a-z0-9]webmine[.]pro/g.test(url)||
/[^a-z0-9]1q2w3[.]fun/g.test(url)||
/[^a-z0-9]1q2w3[.]me/g.test(url)||
/[^a-z0-9]1q2w3[.]top/g.test(url)||
/[^a-z0-9]andlache[.]com/g.test(url)||
/[^a-z0-9]bablace[.]com/g.test(url)||
/[^a-z0-9]bewaslac[.]com/g.test(url)||
/[^a-z0-9]biberukalap[.]com/g.test(url)||
/[^a-z0-9]bowithow[.]com/g.test(url)||
/[^a-z0-9]butcalve[.]com/g.test(url)||
/[^a-z0-9]evengparme[.]com/g.test(url)||
/[^a-z0-9]gridiogrid[.]com/g.test(url)||
/[^a-z0-9]hatcalter[.]com/g.test(url)||
/[^a-z0-9]hegrinhar[.]com/g.test(url)||
/[^a-z0-9]kedtise[.]com/g.test(url)||
/[^a-z0-9]ledinund[.]com/g.test(url)||
/[^a-z0-9]nathetsof[.]com/g.test(url)||
/[^a-z0-9]renhertfo[.]com/g.test(url)||
/[^a-z0-9]rintindown[.]com/g.test(url)||
/[^a-z0-9]sparnove[.]com/g.test(url)||
/[^a-z0-9]verresof[.]com/g.test(url)||
/[^a-z0-9]witthethim[.]com/g.test(url)||
/[^a-z0-9]minescripts[.]info/g.test(url)||
/[^a-z0-9]nablabee[.]com/g.test(url)||
/[^a-z0-9]dronml[.]ml/g.test(url)||
/[^a-z0-9]niematego[.]tk/g.test(url)||
/[^a-z0-9]tulip18[.]com/g.test(url)||
/[^a-z0-9]didnkinrab[.]com/g.test(url)||
/[^a-z0-9]ledhenone[.]com/g.test(url)||
/[^a-z0-9]losital[.]ru/g.test(url)||
/[^a-z0-9]mebablo[.]com/g.test(url)||
/[^a-z0-9]moonsade[.]com/g.test(url)||
/[^a-z0-9]nebabrop[.]com/g.test(url)||
/[^a-z0-9]pearno[.]com/g.test(url)||
/[^a-z0-9]rintinwa[.]com/g.test(url)||
/[^a-z0-9]willacrit[.]com/g.test(url)||
/[^a-z0-9]minr[.]pw/g.test(url)||
/[^a-z0-9]staticsfs[.]host/g.test(url)||
/[^a-z0-9]cdn[-]code[.]host/g.test(url)||
/[^a-z0-9]g[-]content[.]bid/g.test(url)||
/[^a-z0-9]static[-]cnt[.]bid/g.test(url)||
/[^a-z0-9]statistic[.]date/g.test(url)||
/[^a-z0-9]jquery[-]uim[.]download/g.test(url)||
/[^a-z0-9]cdn[-]jquery[.]host/g.test(url)||
/[^a-z0-9]interestingz[.]pw/g.test(url)||
/[^a-z0-9]kippbeak[.]cf/g.test(url)||
/[^a-z0-9]pasoherb[.]gq/g.test(url)||
/[^a-z0-9]axoncoho[.]tk/g.test(url)||
/[^a-z0-9]depttake[.]ga/g.test(url)||
/[^a-z0-9]flophous[.]cf/g.test(url)||
/[^a-z0-9]pr0gram[.]org/g.test(url)||
/[^a-z0-9]authedmine[.]eu/g.test(url)||
/[^a-z0-9]monero[-]miner[.]com/g.test(url)||
/[^a-z0-9]datasecu[.]download/g.test(url)||
/[^a-z0-9]jquery[-]cdn[.]download/g.test(url)||
/[^a-z0-9]bhzejltg[.]info/g.test(url)||
/[^a-z0-9]pzoifaum[.]info/g.test(url)||
/[^a-z0-9]cfcdist[.]loan/g.test(url)||
/[^a-z0-9]cfcnet[.]top/g.test(url)||
/[^a-z0-9]etzbnfuigipwvs[.]ru/g.test(url)||
/[^a-z0-9]freshrefresher[.]com/g.test(url)||
/[^a-z0-9]terethat[.]ru/g.test(url)||
/[^a-z0-9]gustaver[.]ddns[.]net/g.test(url)||
/[^a-z0-9]appelamule[.]com/g.test(url)||
/[^a-z0-9]mepirtedic[.]com/g.test(url)||
/[^a-z0-9]streambeam[.]io/g.test(url)||
/[^a-z0-9]adzjzewsma[.]cf/g.test(url)||
/[^a-z0-9]ffinwwfpqi[.]gq/g.test(url)||
/[^a-z0-9]ininmacerad[.]pro/g.test(url)||
/[^a-z0-9]mhiobjnirs[.]gq/g.test(url)||
/[^a-z0-9]cfcdist[.]gdn/g.test(url)||
/[^a-z0-9]open[-]hive[-]server[-]1[.]pp[.]ua/g.test(url)||
/[^a-z0-9]clickwith[.]bid/g.test(url)||
/[^a-z0-9]intactoffers[.]club/g.test(url)||
/[^a-z0-9]openkatalog[.]com/g.test(url)||
/[^a-z0-9]mine[.]torrent[.]pw/g.test(url)||
/[^a-z0-9]mine[.]nahnoji[.]cz/g.test(url)||
/[^a-z0-9]hive[.]tubetitties[.]com/g.test(url)||
/[^a-z0-9]miner[.]nablabee[.]com/g.test(url)||
/[^a-z0-9]p[.]estream[.]to/g.test(url)||
/[^a-z0-9]www2[.]adfreetv[.]ch/g.test(url)||
/[^a-z0-9]worker[.]salon[.]com/g.test(url)||
/[^a-z0-9]pool[.]supportxmr[.]com/g.test(url)||
/[^a-z0-9]grf[.]easyhash[.]io/g.test(url)||
/[^a-z0-9]1beb2a44[.]space/g.test(url)||
/[^a-z0-9]300ca0d0[.]space/g.test(url)||
/[^a-z0-9]310ca263[.]space/g.test(url)||
/[^a-z0-9]320ca3f6[.]space/g.test(url)||
/[^a-z0-9]330ca589[.]space/g.test(url)||
/[^a-z0-9]340ca71c[.]space/g.test(url)||
/[^a-z0-9]360caa42[.]space/g.test(url)||
/[^a-z0-9]370cabd5[.]space/g.test(url)||
/[^a-z0-9]3c0cb3b4[.]space/g.test(url)||
/[^a-z0-9]3d0cb547[.]space/g.test(url)||
/[^a-z0-9]xbasfbno[.]info/g.test(url)||
/[^a-z0-9]azvjudwr[.]info/g.test(url)||
/[^a-z0-9]jroqvbvw[.]info/g.test(url)||
/[^a-z0-9]jyhfuqoh[.]info/g.test(url)||
/[^a-z0-9]kdowqlpt[.]info/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}


}
