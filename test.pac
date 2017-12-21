function FindProxyForURL(url, host)
{
if( shExpMatch(host, ".apple.com")) return "PROXY 0.0.0.0:0;";
  if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?cnzz\./i.test(url)) return "0.0.0.0:0";
  if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?turner\.com/i.test(url)) return "0.0.0.0:0";
  if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?hbogo\.com/i.test(url)) return "0.0.0.0:0";
  if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?netflix\.com/i.test(url)) return "0.0.0.0:0";
  //-- AUTO-GENERATED RULES, DO NOT MODIFY!
  if(/^http\:\/\/ime\.baidu\.jp/i.test(url)) return "0.0.0.0:0";
  if(/^https\:\/\/autoproxy\.org/i.test(url)) return "0.0.0.0:0";
  if(/hulu\.com/i.test(url)) return "0.0.0.0:0";
  if(/huluim\.com/i.test(url)) return "0.0.0.0:0";
  if(/\.pandora\.tv/i.test(url)) return "0.0.0.0:0";
  if(/\.0rz\.tw/i.test(url)) return "0.0.0.0:0";
  if(/123rf\.com/i.test(url)) return "0.0.0.0:0";
  if(/^http\:\/\/autoproxy\-gfwlist\.googlecode\.com\/svn\/trunk\/gfwlist\.txt/i.test(url)) return "0.0.0.0:0";
  if(/^https\:\/\/autoproxy\-gfwlist\.googlecode\.com\/svn\/trunk\/gfwlist\.txt/i.test(url)) return "0.0.0.0:0";
  if(/gfwinterceptor\.googlecode\.com/i.test(url)) return "PROXY 0.0.0.0:0";
  if(/goagent\.googlecode\.com/i.test(url)) return "PROXY 0.0.0.0:0";
    return "DIRECT";
}
