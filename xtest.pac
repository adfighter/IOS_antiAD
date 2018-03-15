function FindProxyForURL(url, host)
{
 try{
	 /[/]/.test(url)
    }catch(err){
	    if(
    /pagead[^0-9]/g.test(url)
     ){
     //return "PROXY localhost:0";
     return "PROXY 127.0.0.1:8021";
    //return "DIRECT" 
    }
 		}
    
}
/*
function FindProxyForURL(url, host){

try
  {
  //在这里运行代码


//if(/[/]/.test(url)){
	if (

/[-]1688[-]wp[-]media[/]ads[/]/.test(url)||
/[-]880[-]80[-]4[.]jpg/.test(url)||
/[.]cc[/]js[/]ads[/]/.test(url)||
/[.]cn[/]ads[/]/.test(url)||
/[.]cn[/]js[/]ads[/]/.test(url)||
/[.]co[/]js[/]ads[/]/.test(url)||
/[.]com[/]a_d[/]/.test(url)||
/[.]com[/]ad777[.]js/.test(url)||
/[.]com[/]Ads[/]95060_/.test(url)||
/[.]com[/]ads[/]ada[.]js/.test(url)||
/[.]com[/]ads[/]adb[.]js/.test(url)||
/[.]com[/]ads[/]add[.]js/.test(url)||
/[.]com[/]ads[/]dui[.]js/.test(url)||
/[.]com[/]ads[/]p1[.]js/.test(url)||
/[.]com[/]ads[/]p2[.]js/.test(url)||
/[.]com[/]java[/]shang1[.]js/.test(url)||
/[.]com[/]java[/]xia1[.]js/.test(url)||
/[.]com[/]java[/]youxia[.]js/.test(url)||
/[.]com[/]java[/]zuoxia[.]js/.test(url)||
/[.]com[/]js[/]ad_/.test(url)||
/[.]com[/]js[/]alls_foot[.]js/.test(url)||
/[.]com[/]js[/]alls_top[.]js/.test(url)||
/[.]com[/]js[/]bnr_/.test(url)||
/[.]com[/]jsbjl[/]zhanqun/.test(url)||
/[.]com[/]myjs[/]alljs[.]js/.test(url)||
/[.]com[/]pc[/]ad[/]/.test(url)||
/[.]com[/]Runtime[/]js[/]psData[.]js/.test(url)||
/[.]com[/]tonglan[.]js/.test(url)||
/[.]com[/]tonglan2[.]js/.test(url)||
/[.]com[/]vipgg[/]/.test(url)||
/[.]com[/]vodad[.]js/.test(url)||
/[.]in[/]js[/]ads[/]/.test(url)||
/[.]info[/]ad[.]js/.test(url)||
/[.]info[/]ad[/]/.test(url)||
/[.]info[/]js[/]ads[/]/.test(url)||
/[.]info[/]js[/]alls_foot[.]js/.test(url)||
/[.]info[/]js[/]alls_top[.]js/.test(url)||
/[.]net[/]js[/]ads[/]/.test(url)||
/[.]pw[/]ads[/]/.test(url)||
/[.]test15[.][/]/.test(url)||
/[.]tv[/]js[/]ads[/]/.test(url)||
/[.]us[/]js[/]ads[/]/.test(url)||
/[.]xyz[/]js[/]ads[/]/.test(url)||
/[/]20160420_uho_bn[.]gif/.test(url)||
/[/]2016v2[/]js[/]adm2[.]js/.test(url)||
/[/]31M[/]btjav[.]gif/.test(url)||
/[/]640_120_javhd[.]jpg/.test(url)||
/[/]91ad_/.test(url)||
/[/]ab_my[/]pc_pf[.]js/.test(url)||
/[/]ab_res[/]m[/]common[.]js/.test(url)||
/[/]ab_res[/]pc[/]fixed[/]fixed[.]js/.test(url)||
/[/]ad[-]footer[.]js/.test(url)||
/[/]ad[-]ish[/]group[/]all[.]json/.test(url)||
/[/]ad[-]m[-]banner2[.]gif/.test(url)||
/[/]ad[/]duilianjs[.]js/.test(url)||
/[/]AD2v1[.]1[.]js/.test(url)||
/[/]ad_unified_access?/.test(url)||
/[/]adblockTester[.]js/.test(url)||
/[/]adpro[.]js/.test(url)||
/[/]adsfactor_ab/.test(url)||
/[/]aipai[/]player[/]game_video[/]videoAdvert_/.test(url)||
/[/]aipaiPlayFull2[.]js?0[.]/.test(url)||
/[/]alljs[/]alldl[.]js/.test(url)||
/[/]alljs[/]allfoot[.]js/.test(url)||
/[/]alljs[/]allhead[.]js/.test(url)||
/[/]alljs[/]alltop[.]js/.test(url)||
/[/]alljs[/]allwzwfoot[.]js/.test(url)||
/[/]alljs[/]allwzwhead[.]js/.test(url)||
/[/]aoyou372down300_/.test(url)||
/[/]api[/]autosda[.]php/.test(url)||
/[/]Banner[-]pcbeta[-]/.test(url)||
/[/]botad[.]html/.test(url)

		) {

	return "PROXY 127.0.0.1:8021";
}
//}


  }
catch(err)
  {
  //在这里处理错误

if(
/[./]cnzz/g.test(url)||
/[./]aliyun/g.test(url)||
/[./]tanx/g.test(url)||
/[./]alibaba/g.test(url)||
/[./]alimama/g.test(url)||
/[./]miaozhen/g.test(url)||
/[./]irs01/g.test(url)||
/[./]domob/g.test(url)||
/[./]allyes/g.test(url)||
/[./]ipinyou/g.test(url)||
/[./]mct01/g.test(url)||
/[./]mmstat/g.test(url)||
/[./]phpwind/g.test(url)||
/[./]admarket/g.test(url)||
/[./]admaster/g.test(url)||
/[./]adpro/g.test(url)||
/[./]adpush/g.test(url)||
/[./]adview/g.test(url)||
/[./]adwo/g.test(url)||
/[\-\./:]acscript[\-\./:]js/g.test(url)||
/[\-\./:]51[\-\./:]la/g.test(url)||
/[\-\./:]52shouyou[\-\./:]/g.test(url)||
/[\-\./:]71[\-\./:]am/g.test(url)||
/[\-\./:]aliyun/g.test(url)||
/[\-\./:]baidustatic[\-\./:]/g.test(url)||
/[\-\./:]bdx[\-\./:]playnext[\-\./:]/g.test(url)||
/[\-\./:]changyan[\-\./:]itc[\-\./:]/g.test(url)||
/[\-\./:]changyan[\-\./:]sohu[\-\./:]/g.test(url)||
/[\-\./:]cnsptv[\-\./:]/g.test(url)||
/[\-\./:]cnzz/g.test(url)||
/[\-\./:]coinhive[\-\./:]/g.test(url)||
/[\-\./:]ctsywy[\-\./:]/g.test(url)||
/[\-\./:]geiyujieda[\-\./:]/g.test(url)||
/[\-\./:]harbinbaojia/g.test(url)||
/[\-\./:]hm[\-\./:]baidu/g.test(url)||
/[\-\./:]idm-su[\-\./:]/g.test(url)||
/[\-\./:]irs01[\-\./:]/g.test(url)||
/[\-\./:]lyunsd[\-\./:]/g.test(url)||
/[\-\./:]lzjycy[\-\./:]/g.test(url)||
/[\-\./:]mediav[\-\./:]/g.test(url)||
/[\-\./:]mediav[\-\./:]/g.test(url)||
/[\-\./:]msite[\-\./:]/g.test(url)||
/[\-\./:]penggua[\-\./:]/g.test(url)||
/[\-\./:]pic[\-\./:]liwo[\-\./:]/g.test(url)||
/[\-\./:]pos[\-\./:]baidu[\-\./:]/g.test(url)||
/[\-\./:]pstatic[\-\./:]xunlei/g.test(url)||
/[\-\./:]qhres[\-\./:]/g.test(url)||
/[\-\./:]qihucdn[\-\./:]/g.test(url)||
/[\-\./:]qiqi/g.test(url)||
/[\-\./:]rongchengxxw[\-\./:]/g.test(url)||
/[\-\./:]symag[\-\./:]/g.test(url)||
/[\-\./:]t71q[\-\./:]/g.test(url)||
/[\-\./:]taboola[\-\./:]/g.test(url)||
/[\-\./:]ucqq[\-\./:]/g.test(url)||
/[\-\./:]uczzd[\-\./:]/g.test(url)||
/[\-\./:]weld[\-\./:]iefsf[\-\./:]/g.test(url)||
/[\-\./:]wnbfw[\-\./:]/g.test(url)||
/[\-\./:]x-ssp[\-\./:]/g.test(url)||
/[\-\./:]xkaqt[\-\./:]/g.test(url)||
/[\-\./:]ynjczy[\-\./:]/g.test(url)||
/[\-\./:]zhanzhang[\-\./:]/g.test(url)||
/adserv/g.test(url)||
/akamaihd/g.test(url)||
/analitycs/g.test(url)||
/analysis/g.test(url)||
/analytics/g.test(url)||
/Analytics/g.test(url)||
/banner/g.test(url)||
/click/g.test(url)||
/cpro/g.test(url)||
/mob[0-9./]/g.test(url)||
/track/g.test(url)||
/videos[\-\./:]other/g.test(url)||
/[\-\./:]ad[-_./?&=svx0-9]/g.test(url)||
/[\-\./:]gg/g.test(url)||
/[\-\./:]guangg/g.test(url)||
/[\-\./:]union[\-\./:]/g.test(url)||
/[\-\./:]stat[-_./?&=s]+/g.test(url)||
/[\-\./:]admin[0-9]+/g.test(url)||
/[^/][^g]\.alicdn/g.test(url)||
/[\-\./:]pagead[-_./?&=0-9]+/g.test(url)||
/[^c]count/g.test(url)||
/[\-\./:]ws$/g.test(url)
    ) {
	return "PROXY 127.0.0.1:8021";
}

  }


 }
*/
