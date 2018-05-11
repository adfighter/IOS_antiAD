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
/[^a-z0-9]cnzz/g.test(url)||
/[^a-z0-9]aliyun/g.test(url)||
/[^a-z0-9]tanx/g.test(url)||
/[^a-z0-9]alibaba/g.test(url)||
/[^a-z0-9]alimama/g.test(url)||
/[^a-z0-9]miaozhen/g.test(url)||
/[^a-z0-9]irs01/g.test(url)||
/[^a-z0-9]allyes/g.test(url)||
/[^a-z0-9]ipinyou/g.test(url)||
/[^a-z0-9]mct01/g.test(url)||
/[^a-z0-9]mmstat/g.test(url)||
/[^a-z0-9]phpwind/g.test(url)||
/[^a-z0-9]admarket/g.test(url)||
/[^a-z0-9]admaster/g.test(url)||
/[^a-z0-9]adpro/g.test(url)||
/[^a-z0-9]adpush/g.test(url)||
/[^a-z0-9]adwo/g.test(url)||
/[^a-z0-9]onetad/g.test(url)||
/[^a-z0-9]imrworldwide/g.test(url)||
/[^a-z0-9]oadz/g.test(url)||
/[^a-z0-9]tanx/g.test(url)||
/[^a-z0-9]adwo/g.test(url)||
/[^a-z0-9]wrating/g.test(url)||
/[^a-z0-9]adnxs/g.test(url)||
/[^a-z0-9]gridsumdissector/g.test(url)||
/[^a-z0-9]gentags/g.test(url)||
/[^a-z0-9]kejet/g.test(url)||
/[^a-z0-9]rubiconproject/g.test(url)||
/[^a-z0-9]bloggerads/g.test(url)||
/[^a-z0-9]adpro/g.test(url)||
/[^a-z0-9]mmstat/g.test(url)||
/[^a-z0-9]qucaigg/g.test(url)||
/[^a-z0-9]1133/g.test(url)||
/[^a-z0-9]appsflyer/g.test(url)||
/[^a-z0-9]cooguo/g.test(url)||
/[^a-z0-9]dupinpu/g.test(url)||
/[^a-z0-9]appjiagu/g.test(url)||
/[^a-z0-9]atwola/g.test(url)||
/[^a-z0-9]applovin/g.test(url)||
/[^a-z0-9]optaim/g.test(url)||
/[^a-z0-9]qtmojo/g.test(url)||
/[^a-z0-9]adpush/g.test(url)||
/[^a-z0-9]criteo/g.test(url)||
/[^a-z0-9]madserving/g.test(url)||
/[^a-z0-9]jpush/g.test(url)||
/[^a-z0-9]adcolony/g.test(url)||
/[^a-z0-9]adfuture/g.test(url)||
/[^a-z0-9]adtechus/g.test(url)||
/[^a-z0-9]airpush/g.test(url)||
/[^a-z0-9]moad/g.test(url)||
/[^a-z0-9]adtaily/g.test(url)||
/[^a-z0-9]aduu/g.test(url)||
/[^a-z0-9]vungle/g.test(url)||
/[^a-z0-9]rayjump/g.test(url)||
/[^a-z0-9]moatads/g.test(url)||
/[^a-z0-9]mediav/g.test(url)||
/[^a-z0-9]scorecardresearch/g.test(url)||
/[^a-z0-9]mookie/g.test(url)||
/[^a-z0-9]reachmax/g.test(url)||
/[^a-z0-9]xtgreat/g.test(url)||
/[^a-z0-9]jiathis/g.test(url)
			) {
			return "PROXY 127.0.0.1:8021";
		}
	//<--union


	//special-->
     if (
/[^a-z0-9]acscript[^a-z0-9]js/g.test(url)||
/[^a-z0-9]52shouyou[^a-z0-9]/g.test(url)||
/[^a-z0-9]71[^a-z0-9]am/g.test(url)||
/[^a-z0-9]alikunlun[^a-z0-9]/g.test(url)||
/[^a-z0-9]baidustatic[^a-z0-9]/g.test(url)||
/[^a-z0-9]bdx[^a-z0-9]playnext[^a-z0-9]/g.test(url)||
/[^a-z0-9]changyan[^a-z0-9]itc[^a-z0-9]/g.test(url)||
/[^a-z0-9]changyan[^a-z0-9]sohu[^a-z0-9]/g.test(url)||
/[^a-z0-9]cnsptv[^a-z0-9]/g.test(url)||
/[^a-z0-9]coinhive[^a-z0-9]/g.test(url)||
/[^a-z0-9]ctsywy[^a-z0-9]/g.test(url)||
/[^a-z0-9]geiyujieda[^a-z0-9]/g.test(url)||
/[^a-z0-9]harbinbaojia/g.test(url)||
/[^a-z0-9]hm[^a-z0-9]baidu/g.test(url)||
/[^a-z0-9]idm[^a-z0-9]su[^a-z0-9]/g.test(url)||
/[^a-z0-9]lyunsd[^a-z0-9]/g.test(url)||
/[^a-z0-9]lzjycy[^a-z0-9]/g.test(url)||
/[^a-z0-9]msite[^a-z0-9]/g.test(url)||
/[^a-z0-9]penggua[^a-z0-9]/g.test(url)||
/[^a-z0-9]pic[^a-z0-9]liwo[^a-z0-9]/g.test(url)||
/[^a-z0-9]pos[^a-z0-9]baidu[^a-z0-9]/g.test(url)||
/[^a-z0-9]pstatic[^a-z0-9]xunlei/g.test(url)||
/[^a-z0-9]qhres[^a-z0-9]/g.test(url)||
/[^a-z0-9]qihucdn[^a-z0-9]/g.test(url)||
/[^a-z0-9]qiqi/g.test(url)||
/[^a-z0-9]rongchengxxw[^a-z0-9]/g.test(url)||
/[^a-z0-9]symag[^a-z0-9]/g.test(url)||
/[^a-z0-9]t71q[^a-z0-9]/g.test(url)||
/[^a-z0-9]taboola[^a-z0-9]/g.test(url)||
/[^a-z0-9]ucqq[^a-z0-9]/g.test(url)||
/[^a-z0-9]uczzd[^a-z0-9]/g.test(url)||
/[^a-z0-9]weld[^a-z0-9]iefsf[^a-z0-9]/g.test(url)||
/[^a-z0-9]wnbfw[^a-z0-9]/g.test(url)||
/[^a-z0-9]xkaqt[^a-z0-9]/g.test(url)||
/[^a-z0-9]x[^a-z0-9]ssp[^a-z0-9]/g.test(url)||
/[^a-z0-9]ynjczy[^a-z0-9]/g.test(url)||
/[^a-z0-9]zhanzhang[^a-z0-9]/g.test(url)||
/[^a-z0-9]videos[^a-z0-9]other/g.test(url)||
/[^a-z0-9]51[^a-z0-9]la/g.test(url)||
/[^a-z0-9]serving[^a-z0-9]sys/g.test(url)||
/[^a-z0-9]app[^a-z0-9]measurement/g.test(url)||
/[^a-z0-9]s[^a-z0-9]zgclmw/g.test(url)||
/[^a-z0-9]e[^a-z0-9]qxfly[^a-z0-9]/g.test(url)||
/[^a-z0-9]pkdu[^a-z0-9]/g.test(url)||
/[^a-z0-9]69lm[^a-z0-9]/g.test(url)||
/[^a-z0-9]jjxgly[^a-z0-9]/g.test(url)||
/[^a-z0-9]ksksqa[^a-z0-9]/g.test(url)||
/[^a-z0-9]zgc987[^a-z0-9]/g.test(url)||
/[^a-z0-9]199[^a-z0-9]180[^a-z0-9]100[^a-z0-9]185/g.test(url)||
/[^a-z0-9]88rpg[^a-z0-9]/g.test(url)||
/[^a-z0-9]dlhygj[^a-z0-9]/g.test(url)||
/[^a-z0-9]lrswl[^a-z0-9]/g.test(url)||
/[^a-z0-9]nszmz[^a-z0-9]/g.test(url)||
/[^a-z0-9]youle55[^a-z0-9]/g.test(url)||
/[^a-z0-9]5151gj[^a-z0-9]/g.test(url)||
/[^a-z0-9]3dwwwgame[^a-z0-9]/g.test(url)||
/[^a-z0-9]goolpter[^a-z0-9]/g.test(url)||
/[^a-z0-9]kwiago[^a-z0-9]/g.test(url)||
/[^a-z0-9]images[^a-z0-9]sohu/g.test(url)||
/[^a-z0-9]x[^a-z0-9]jd[^a-z0-9]/g.test(url)||
/[^a-z0-9]il8r[^a-z0-9]/g.test(url)||
/[^a-z0-9]datax[^a-z0-9]baidu/g.test(url)||
/[^a-z0-9]js[^a-z0-9]taipwl[^a-z0-9]/g.test(url)||
/[^a-z0-9]adm[^a-z0-9]/g.test(url)||
/[^a-z0-9]pub[^a-z0-9]funshion/g.test(url)||
	     /[^a-z0-9]zhuyuanp[^a-z0-9]top/g.test(url)||
	     /[^a-z0-9]bibi100/g.test(url)||
	     /[^a-z0-9]xmgysweb[^a-z0-9]/g.test(url)||
	     /[^a-z0-9]heygugu[^a-z0-9]/g.test(url)||
/[^a-z0-9]qjhlc[^a-z0-9]/g.test(url)||
/[^a-z0-9]7895983[^a-z0-9]/g.test(url)   
		) {
		return "PROXY 127.0.0.1:8021";
		}
	//<--special

	//app-->
     if (
/[^a-z0-9]startappservice[^a-z0-9]/g.test(url)||
/[^a-z0-9]appodeal/g.test(url)||
/[^a-z0-9]jomodns[^a-z0-9]/g.test(url)||
/[^a-z0-9]applvn[^a-z0-9]/g.test(url)
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
/[^a-z0-9]iface[-./a-z0-9]+qiyi/g.test(url)||
/[^a-z0-9]msg[-./a-z0-9]+qiyi/g.test(url)||
/[^a-z0-9]afp[-./a-z0-9]+qiyi/g.test(url)||
/[^a-z0-9]ckm[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]cloudpush[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]cm[^a-z0-9]passport[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]cmts[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]cupid[^a-z0-9]iqiyi/g.test(url)||
/[^a-z0-9]feedback[^a-z0-9]iqiyi/g.test(url)||
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
