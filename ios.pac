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
/[-/]ws$/g.test(url)||
/mob[0-9./]/g.test(url)
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
/[-./]aduu/g.test(url)||
/[-./]vungle/g.test(url)||
/[-./]rayjump/g.test(url)
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
/[-./]videos[-./]other/g.test(url)||
/[-./]51[-./]la/g.test(url)||
/[-./]serving[-./]sys/g.test(url)||
/[-./]s[-./]zgclmw/g.test(url)||
/[-./]app[-./]measurement/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}

	//nocoin
     if (
/[-./]cnhv[.]co/g.test(url)||
/[-./]coin[-]hive[.]com/g.test(url)||
/[-./]coinhive[.]com/g.test(url)||
/[-./]jsecoin[.]com/g.test(url)||
/[-./]miner[.]pr0gramm[.]com/g.test(url)||
/[-./]miner[.]pr0gramm[.]com/g.test(url)||
/[-./]minemytraffic[.]com/g.test(url)||
/[-./]ppoi[.]org/g.test(url)||
/[-./]projectpoi[.]com/g.test(url)||
/[-./]2giga[.]link/g.test(url)||
/[-./]crypto[-]loot[.]com/g.test(url)||
/[-./]coinerra[.]com/g.test(url)||
/[-./]coin[-]have[.]com/g.test(url)||
/[-./]minero[.]pw/g.test(url)||
/[-./]api[.]inwemo[.]com/g.test(url)||
/[-./]rocks[.]io/g.test(url)||
/[-./]jsccnn[.]com/g.test(url)||
/[-./]jscdndel[.]com/g.test(url)||
/[-./]coinhiveproxy[.]com/g.test(url)||
/[-./]coinblind[.]com/g.test(url)||
/[-./]coinnebula[.]com/g.test(url)||
/[-./]monerominer[.]rocks/g.test(url)||
/[-./]cdn[.]cloudcoins[.]co/g.test(url)||
/[-./]coinlab[.]biz/g.test(url)||
/[-./]go[.]megabanners[.]cf/g.test(url)||
/[-./]go[.]megabanners[.]cf/g.test(url)||
/[-./]baiduccdn1[.]com/g.test(url)||
/[-./]wsp[.]marketgid[.]com/g.test(url)||
/[-./]papoto[.]com/g.test(url)||
/[-./]flare[-]analytics[.]com/g.test(url)||
/[-./]sparechange[.]io/g.test(url)||
/[-./]zlx[.]com[.]br/g.test(url)||
/[-./]m[.]anyfiles[.]ovh/g.test(url)||
/[-./]freecontent[.]bid/g.test(url)||
/[-./]freecontent[.]loan/g.test(url)||
/[-./]freecontent[.]win/g.test(url)||
/[-./]mutuza[.]win/g.test(url)||
/[-./]cryptonoter[.]com/g.test(url)||
/[-./]crypto[-]webminer[.]com/g.test(url)||
/[-./]cryweb[.]github[.]io/g.test(url)||
/[-./]crywebber[.]github[.]io/g.test(url)||
/[-./]adless[.]io/g.test(url)||
/[-./]hemnes[.]win/g.test(url)||
/[-./]tidafors[.]xyz/g.test(url)||
/[-./]moneone[.]ga/g.test(url)||
/[-./]plexcoin[.]info/g.test(url)||
/[-./]monkeyminer[.]net/g.test(url)||
/[-./]mercy[.]ga/g.test(url)||
/[-./]coinpirate[.]cf/g.test(url)||
/[-./]cpufan[.]club/g.test(url)||
/[-./]devphp[.]org[.]ua/g.test(url)||
/[-./]mining[.]best/g.test(url)||
/[-./]nfwebminer[.]com/g.test(url)||
/[-./]webxmr[.]com/g.test(url)||
/[-./]cryptoloot[.]pro/g.test(url)||
/[-./]bjorksta[.]men/g.test(url)||
/[-./]crypto[.]csgocpu[.]com/g.test(url)||
/[-./]noblock[.]pro/g.test(url)||
/[-./]cryptobara[.]com/g.test(url)||
/[-./]reservedoffers[.]club/g.test(url)||
/[-./]adminer[.]com/g.test(url)||
/[-./]ad[-]miner[.]com/g.test(url)||
/[-./]77[.]162[.]125[.]199/g.test(url)||
/[-./]host[.]d[-]ns[.]ga/g.test(url)||
/[-./]abc[.]pema[.]cl/g.test(url)||
/[-./]webmine[.]cz/g.test(url)||
/[-./]analytics[.]blue/g.test(url)||
/[-./]smectapop12[.]pl/g.test(url)||
/[-./]berserkpl[.]net[.]pl/g.test(url)||
/[-./]webminepool[.]com/g.test(url)||
/[-./]webminepool[.]tk/g.test(url)||
/[-./]playerassets[.]info/g.test(url)||
/[-./]tokyodrift[.]ga/g.test(url)||
/[-./]webassembly[.]stream/g.test(url)||
/[-./]okeyletsgo[.]ml/g.test(url)||
/[-./]hodlers[.]party/g.test(url)||
/[-./]hodling[.]faith/g.test(url)||
/[-./]chainblock[.]science/g.test(url)||
/[-./]candid[.]zone/g.test(url)||
/[-./]webmine[.]pro/g.test(url)||
/[-./]1q2w3[.]fun/g.test(url)||
/[-./]1q2w3[.]me/g.test(url)||
/[-./]1q2w3[.]top/g.test(url)||
/[-./]andlache[.]com/g.test(url)||
/[-./]bablace[.]com/g.test(url)||
/[-./]bewaslac[.]com/g.test(url)||
/[-./]biberukalap[.]com/g.test(url)||
/[-./]bowithow[.]com/g.test(url)||
/[-./]butcalve[.]com/g.test(url)||
/[-./]evengparme[.]com/g.test(url)||
/[-./]gridiogrid[.]com/g.test(url)||
/[-./]hatcalter[.]com/g.test(url)||
/[-./]hegrinhar[.]com/g.test(url)||
/[-./]kedtise[.]com/g.test(url)||
/[-./]ledinund[.]com/g.test(url)||
/[-./]nathetsof[.]com/g.test(url)||
/[-./]renhertfo[.]com/g.test(url)||
/[-./]rintindown[.]com/g.test(url)||
/[-./]sparnove[.]com/g.test(url)||
/[-./]verresof[.]com/g.test(url)||
/[-./]witthethim[.]com/g.test(url)||
/[-./]minescripts[.]info/g.test(url)||
/[-./]nablabee[.]com/g.test(url)||
/[-./]dronml[.]ml/g.test(url)||
/[-./]niematego[.]tk/g.test(url)||
/[-./]tulip18[.]com/g.test(url)||
/[-./]didnkinrab[.]com/g.test(url)||
/[-./]ledhenone[.]com/g.test(url)||
/[-./]losital[.]ru/g.test(url)||
/[-./]mebablo[.]com/g.test(url)||
/[-./]moonsade[.]com/g.test(url)||
/[-./]nebabrop[.]com/g.test(url)||
/[-./]pearno[.]com/g.test(url)||
/[-./]rintinwa[.]com/g.test(url)||
/[-./]willacrit[.]com/g.test(url)||
/[-./]minr[.]pw/g.test(url)||
/[-./]staticsfs[.]host/g.test(url)||
/[-./]cdn[-]code[.]host/g.test(url)||
/[-./]g[-]content[.]bid/g.test(url)||
/[-./]static[-]cnt[.]bid/g.test(url)||
/[-./]statistic[.]date/g.test(url)||
/[-./]jquery[-]uim[.]download/g.test(url)||
/[-./]cdn[-]jquery[.]host/g.test(url)||
/[-./]interestingz[.]pw/g.test(url)||
/[-./]kippbeak[.]cf/g.test(url)||
/[-./]pasoherb[.]gq/g.test(url)||
/[-./]axoncoho[.]tk/g.test(url)||
/[-./]depttake[.]ga/g.test(url)||
/[-./]flophous[.]cf/g.test(url)||
/[-./]pr0gram[.]org/g.test(url)||
/[-./]authedmine[.]eu/g.test(url)||
/[-./]monero[-]miner[.]com/g.test(url)||
/[-./]datasecu[.]download/g.test(url)||
/[-./]jquery[-]cdn[.]download/g.test(url)||
/[-./]bhzejltg[.]info/g.test(url)||
/[-./]pzoifaum[.]info/g.test(url)||
/[-./]cfcdist[.]loan/g.test(url)||
/[-./]cfcnet[.]top/g.test(url)||
/[-./]etzbnfuigipwvs[.]ru/g.test(url)||
/[-./]freshrefresher[.]com/g.test(url)||
/[-./]terethat[.]ru/g.test(url)||
/[-./]gustaver[.]ddns[.]net/g.test(url)||
/[-./]appelamule[.]com/g.test(url)||
/[-./]mepirtedic[.]com/g.test(url)||
/[-./]streambeam[.]io/g.test(url)||
/[-./]adzjzewsma[.]cf/g.test(url)||
/[-./]ffinwwfpqi[.]gq/g.test(url)||
/[-./]ininmacerad[.]pro/g.test(url)||
/[-./]mhiobjnirs[.]gq/g.test(url)||
/[-./]cfcdist[.]gdn/g.test(url)||
/[-./]open[-]hive[-]server[-]1[.]pp[.]ua/g.test(url)||
/[-./]clickwith[.]bid/g.test(url)||
/[-./]intactoffers[.]club/g.test(url)||
/[-./]openkatalog[.]com/g.test(url)||
/[-./]mine[.]torrent[.]pw/g.test(url)||
/[-./]mine[.]nahnoji[.]cz/g.test(url)||
/[-./]hive[.]tubetitties[.]com/g.test(url)||
/[-./]miner[.]nablabee[.]com/g.test(url)||
/[-./]p[.]estream[.]to/g.test(url)||
/[-./]www2[.]adfreetv[.]ch/g.test(url)||
/[-./]worker[.]salon[.]com/g.test(url)||
/[-./]pool[.]supportxmr[.]com/g.test(url)||
/[-./]grf[.]easyhash[.]io/g.test(url)||
/[-./]1beb2a44[.]space/g.test(url)||
/[-./]300ca0d0[.]space/g.test(url)||
/[-./]310ca263[.]space/g.test(url)||
/[-./]320ca3f6[.]space/g.test(url)||
/[-./]330ca589[.]space/g.test(url)||
/[-./]340ca71c[.]space/g.test(url)||
/[-./]360caa42[.]space/g.test(url)||
/[-./]370cabd5[.]space/g.test(url)||
/[-./]3c0cb3b4[.]space/g.test(url)||
/[-./]3d0cb547[.]space/g.test(url)||
/[-./]xbasfbno[.]info/g.test(url)||
/[-./]azvjudwr[.]info/g.test(url)||
/[-./]jroqvbvw[.]info/g.test(url)||
/[-./]jyhfuqoh[.]info/g.test(url)||
/[-./]kdowqlpt[.]info/g.test(url)
		) {
		return "PROXY 127.0.0.1:8021";
		}


}
