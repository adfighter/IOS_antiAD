function FindProxyForURL(url, host)
{
  var PROXY="PROXY 0.0.0.0:0";
if( shExpMatch(host, ".apple.com")) return ;
  if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?cnzz\./i.test(url)) return PROXY;
  if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?turner\.com/i.test(url)) return PROXY;
  if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?hbogo\.com/i.test(url)) return PROXY;
  if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?netflix\.com/i.test(url)) return PROXY;
  //-- AUTO-GENERATED RULES, DO NOT MODIFY!
  if(/^http\:\/\/ime\.baidu\.jp/i.test(url)) return PROXY;
  if(/^https\:\/\/autoproxy\.org/i.test(url)) return PROXY;
  if(/hulu\.com/i.test(url)) return PROXY;
  if(/huluim\.com/i.test(url)) return PROXY;
  if(/\.pandora\.tv/i.test(url)) return PROXY;
  if(/\.0rz\.tw/i.test(url)) return PROXY;
  if(/123rf\.com/i.test(url)) return PROXY;
  if(/^http\:\/\/autoproxy\-gfwlist\.googlecode\.com\/svn\/trunk\/gfwlist\.txt/i.test(url)) return PROXY;
  if(/^https\:\/\/autoproxy\-gfwlist\.googlecode\.com\/svn\/trunk\/gfwlist\.txt/i.test(url)) return PROXY;
  if(/gfwinterceptor\.googlecode\.com/i.test(url)) return PROXY;
  if(/goagent\.googlecode\.com/i.test(url)) return PROXY;
    return "DIRECT";
}
