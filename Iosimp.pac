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

//app-->
     if (
          /[-_./?&=]startappservice[-_./?&=]/g.test(url)||
/[-_./?&=]appodeal/g.test(url)||
/[-_./?&=]jomodns[-_./?&=]/g.test(url)||
/[-_./?&=]applvn[-_./?&=]/g.test(url)||
/[-_./?&=]bjcathay[-_./?&=]/g.test(url)||
/[-_./?&=]rayjump[-_./?&=]/g.test(url)||
/[-_./?&=]moatads[-_./?&=]/g.test(url)||
/[-_./?&=]adservice[-_./?&=]/g.test(url)||
/[-_./?&=]doubleclick[-_./?&=]/g.test(url)||
/[-_./?&=]vungle[-_./?&=]/g.test(url)||
/[-_./?&=]cupid[-_./?&=i]+qiyi/g.test(url)||
/[-_./?&=]msg[-_./?&=][-_./?&=a-z]+qiyi/g.test(url)||
/[-_./?&=]dns[-_./?&=]iqiyi/g.test(url)||
/[-_./?&=]irs01/g.test(url)||
/[-_./?&=]hcdn[-_./?&=]qiyi/g.test(url)||
/[-_./?&=]qy[-_./?&=]net/g.test(url)||
/[-_./?&=]valipl[-_./?&=]cp31[-_./?&=]ott[-_./?&=]cibntv/g.test(url)||
/[-_./?&=]atm[-_./?&=]youku/g.test(url)||
/[-_./?&=]vali[-_./?&=]cp31[-_./?&=]ott[-_./?&=]cibntv/g.test(url)||
/[-_./?&=]miaozhen[-_./?&=]com/g.test(url)||
/[-_./?&=]taobao[-_./?&=]com/g.test(url)||
/[-_./?&=]tbcache[-_./?&=]com/g.test(url)||
/[-_./?&=]danuoyi[-_./?&=]alicdn[-_./?&=]com/g.test(url)
      ) {
      return "PROXY 127.0.0.1:8021";
      }



   //<---app

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
///[-_./?&=]mmstat/g.test(url)||
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
///[-_./?&=]mmstat/g.test(url)||
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
}
