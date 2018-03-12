function FindProxyForURL(url, host)
{
 
    if(

/\Wacscript\Wjs/i.test(url)||
/\W51\Wla/i.test(url)||
/\W52shouyou\W/i.test(url)||
/\W71\Wam/i.test(url)||
/\Waliyun/i.test(url)||
/\Wbaidustatic\W/i.test(url)||
/\Wbdx\Wplaynext\W/i.test(url)||
/\Wchangyan\Witc\W/i.test(url)||
/\Wchangyan\Wsohu\W/i.test(url)||
/\Wcnsptv\W/i.test(url)||
/\Wcnzz/i.test(url)||
/\Wcoinhive\W/i.test(url)||
/\Wctsywy\W/i.test(url)||
/\Wgeiyujieda\W/i.test(url)||
/\Wharbinbaojia/i.test(url)||
/\Whm\Wbaidu/i.test(url)||
/\Widm-su\W/i.test(url)||
/\Wirs01\W/i.test(url)||
/\Wlyunsd\W/i.test(url)||
/\Wlzjycy\W/i.test(url)||
/\Wmediav\W/i.test(url)||
/\Wmediav\W/i.test(url)||
/\Wmsite\W/i.test(url)||
/\Wpenggua\W/i.test(url)||
/\Wpic\Wliwo\W/i.test(url)||
/\Wpos\Wbaidu\W/i.test(url)||
/\Wpstatic\Wxunlei/i.test(url)||
/\Wqhres\W/i.test(url)||
/\Wqihucdn\W/i.test(url)||
/\Wqiqi/i.test(url)||
/\Wrongchengxxw\W/i.test(url)||
/\Wsymag\W/i.test(url)||
/\Wt71q\W/i.test(url)||
/\Wtaboola\W/i.test(url)||
/\Wucqq\W/i.test(url)||
/\Wuczzd\W/i.test(url)||
/\Wweld\Wiefsf\W/i.test(url)||
/\Wwnbfw\W/i.test(url)||
/\Wx-ssp\W/i.test(url)||
/\Wxkaqt\W/i.test(url)||
/\Wynjczy\W/i.test(url)||
/\Wzhanzhang\W/i.test(url)||
/adserv/i.test(url)||
/akamaihd/i.test(url)||
/analitycs/i.test(url)||
/analysis/i.test(url)||
/analytics/i.test(url)||
/Analytics/i.test(url)||
/banner/i.test(url)||
/click/i.test(url)||
/cpro/i.test(url)||
/push/i.test(url)||
/track/i.test(url)||
/videos\Wother/i.test(url)||
/\Wad[-_./?&=svx0-9]/i.test(url)||
/\Wgg/i.test(url)||
/\Wguangg/i.test(url)||
/\Wunion\W/i.test(url)||
/\Wstat[-_./?&=s]+/i.test(url)||
/\Wadmin[0-9]+/i.test(url)||
/[^/][^g]\.alicdn/i.test(url)||
/\Wpagead[-_./?&=0-9]+/i.test(url)||
/[^c]count/i.test(url)||
/\Wws$/i.test(url)
    )  {
     //return "PROXY localhost:0";
     return "PROXY 127.0.0.1:8021";
    //return "DIRECT" 
   }
}
