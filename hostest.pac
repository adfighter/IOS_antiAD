function FindProxyForURL(url, host)

{


if( shExpMatch(host, "apple.com")) return "PROXY 0.0.0.0:0";
 

    return "DIRECT";

}
