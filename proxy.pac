function FindProxyForURL(url, host) {
    return "SOCKS5 192.168.0.175:9050; SOCKS 192.168.0.175:9050; PROXY 192.168.0.175:8118; DIRECT";
}
