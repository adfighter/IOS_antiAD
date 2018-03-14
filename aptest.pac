function FindProxyForURL(url, host)

{

 

    if(
/[./]cnzz/i.test(url)||	/[\-\./:]acscript[\-\./:]js/g.test(url)||
/[./]aliyun/i.test(url)||	/[\-\./:]51[\-\./:]la/g.test(url)||
/[./]tanx/i.test(url)||	/[\-\./:]52shouyou[\-\./:]/g.test(url)||
/[./]alibaba/i.test(url)||	/[\-\./:]71[\-\./:]am/g.test(url)||
/[./]alimama/i.test(url)||	/[\-\./:]aliyun/g.test(url)||
/[./]miaozhen/i.test(url)||	/[\-\./:]baidustatic[\-\./:]/g.test(url)||
/[./]irs01/i.test(url)||	/[\-\./:]bdx[\-\./:]playnext[\-\./:]/g.test(url)||
/[./]domob/i.test(url)||	/[\-\./:]changyan[\-\./:]itc[\-\./:]/g.test(url)||
/[./]allyes/i.test(url)||	/[\-\./:]changyan[\-\./:]sohu[\-\./:]/g.test(url)||
/[./]ipinyou/i.test(url)||	/[\-\./:]cnsptv[\-\./:]/g.test(url)||
/[./]mct01/i.test(url)||	/[\-\./:]cnzz/g.test(url)||
/[./]mmstat/i.test(url)||	/[\-\./:]coinhive[\-\./:]/g.test(url)||
/[./]phpwind/i.test(url)||	/[\-\./:]ctsywy[\-\./:]/g.test(url)||
/[./]admarket/i.test(url)||	/[\-\./:]geiyujieda[\-\./:]/g.test(url)||
/[./]admaster/i.test(url)||	/[\-\./:]harbinbaojia/g.test(url)||
/[./]adpro/i.test(url)||	/[\-\./:]hm[\-\./:]baidu/g.test(url)||
/[./]adpush/i.test(url)||	/[\-\./:]idm-su[\-\./:]/g.test(url)||
/[./]adview/i.test(url)||	/[\-\./:]irs01[\-\./:]/g.test(url)||
/[./]adwo/i.test(url)||	/[\-\./:]lyunsd[\-\./:]/g.test(url)||
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
	/push/g.test(url)||
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
    )  {

     //return "PROXY localhost:0";

     return "PROXY 127.0.0.1:8021";

    //return "DIRECT" 

   }

}
