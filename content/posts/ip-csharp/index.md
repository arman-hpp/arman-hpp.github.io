+++
author = "آرمان حسن پور"
title = "کار با آدرس‌های IP در CSharp" 
date = 2020-01-04T15:28:10+03:30
featured = false
comment = false
toc = false
reward = false
pinned = false
categories = [
	"DotNet", "CSharp"
]
tags = [
    "IP", "IPHelper", "CSharp", "DotNet"
]
series = []
images = []
+++

برای کار با آدرس‌های IPv4 و IPv6 در CSharp از کتابخانه System.Net و کلاس IPAddress استفاده می‌شود.
<br>
به منظور اعتبارسنجی آدرس‌های IP می‌توان از کد زیر استفاده نمود:
```csharp
public static bool IsValidIp(string address)
{
    return IPAddress.TryParse(address, out _);
}
```

به منظور تشخیص نسخه‌ی آدرس‌های IP می‌توان از کد زیر استفاده نمود:
```csharp
public static IpVersion GetIpVersion(string address)
{
    if (IPAddress.TryParse(address, out var ipAddress))
    {
        if(ipAddress.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork)
        {
            return IpVersion.IPv4;
        }
        else if(ipAddress.AddressFamily == System.Net.Sockets.AddressFamily.InterNetworkV6)
        {
            return IpVersion.IPv6;
        }
    }

    return IpVersion.Unknown;
}
	
public enum IpVersion
{
    Unknown = -1,
    IPv4,
    IPv6
}
```

آدرس Loopback یک آدرس IP ویژه است که برای آزمایش کارت‌های شبکه، ارتباطات و انتقال در یک کارت شبکه محلی و برنامه‌های کاربردی استفاده می‌شود. این آدرس IP مربوط به Loopback Interface نرم‌افزار کارت شبکه است که هیچ سخت‌افزاری با آن ارتباط ندارد و نیازی به اتصال فیزیکی به شبکه ندارد. برای تشخیص اینکه یک IP از نوع Loopback است یا خیر می‌توان از کد زیر استفاده نمود:
```CSharp
public static bool IsLoopback(string address)
{
    if (address == "localhost")
        return true;

    if (IPAddress.TryParse(address, out var ipAddress))
    {
        if (ipAddress == IPAddress.Loopback || ipAddress == IPAddress.IPv6Loopback)
            return true;
    }

    return false;
}
```