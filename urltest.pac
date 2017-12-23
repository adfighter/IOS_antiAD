function FindProxyForURL(url, host)
{
 
    if(


/\Wacscript\Wjs\W/i.test(url)||	/\Whm\Wbaidu\W/i.test(url)||
/\Wads\W/i.test(url)||	/\Wsp\d*\Wbaidu\W/i.test(url)||
/\W51\Wla\W/i.test(url)||	/\Wjs\Wmoney\W/i.test(url)||
/\Walicdn\W/i.test(url)||	/\Wpagead\d\W/i.test(url)||
/\Wbdx\Wplaynext\W/i.test(url)||	/\Wassets\Wadv\W/i.test(url)||
/\Wchangyan\Witc\W/i.test(url)||	/\Waliyun\W/i.test(url)||
/\Wchangyan\Wsohu\W/i.test(url)||	/\Wgoogle-analytics\W/i.test(url)||
/\Wcnsptv\W/i.test(url)||	/\Wtanx\W/i.test(url)||
/\Wcnzz\W/i.test(url)||	/\Wcnbetacdn\Wcom\Wfrontend\Wvipics\W/i.test(url)||
/\Wlyunsd\W/i.test(url)||	/\Walimama\W/i.test(url)||
/\Wlzjycy\W/i.test(url)||	/\Wniuxgame\d*\W/i.test(url)||
/\Wmediav\W/i.test(url)||	
/\Wpic\Wliwo\W/i.test(url)||	
/\Wpstatic\Wxunlei\W/i.test(url)||	
/\Wqhres\W/i.test(url)||	
/\Wqihucdn\W/i.test(url)||	
/\Wrongchengxxw\W/i.test(url)||	
/\Wucqq\W/i.test(url)||	
/\Wunion\W/i.test(url)||	
/\Wweld\Wiefsf\W/i.test(url)||	
/\Wxkaqt\W/i.test(url)||	
/\Wx-ssp\W/i.test(url)||	
/\Wynjczy\W/i.test(url)||	
/\Wzhanzhang\Wbaidu\W/i.test(url)||	
/\Wpush\W/i.test(url)||	
/\Wbaidustatic\W/i.test(url)

    )  {return "PROXY 0.0.0.0:0; SOCKS 0.0.0.0:0";
    //return "DIRECT";SOCKS5 0.0.0.0:0; 
   }
}
