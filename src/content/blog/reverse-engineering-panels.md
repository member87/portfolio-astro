---
title: "Reverse Engineering Panels App"
description:
    "No authentication and authorisation can allow you to access free wallpapers
    in the Panels app by MKBHD by using public the publically accessible API."
pubDate: "28 Sep 2024"
heroImage: "/blog-placeholder-1.jpg"
tags: ["Android", "MITM", "Reverse Engineering"]
---

The [Panels](https://panels.art) is a new application created by the popular
tech youtuber [MKBHD](https://youtube.com/@MKBHD). The app was designed to be a
place for people to find and download different wallpapers. It includes an
expensive subscription at £11.59 / month or £34.99 / year. There is also a free
option which requires watching an advert for every single wallpaper you want to
download but this will only allow you to download the standard definition
version of a wallpaper and not the full heroImage.

With this knowledge I wondered if it was possible to get the full HD images for
free.

## Preparing the app for MITM

A MITM (Man in the middle) attack is a simple _yet effective_ way to get a basic
understanding of how and app might work. It does this by logging and storing all
HTTP requests that an app makes. There are many tools available to do this type
of reconnaissance, one of which is [mitmproxy](https://mitmproxy.org/).

This app works by creating a proxy server and connecting your device to it. It
can also create a certificate to decrypt HTTPS traffic (which is important).
Unfortunately, since android 7,
[apps will ignore user defined certificates](https://android-developers.googleblog.com/2016/07/changes-to-trusted-certificate.html)
by default and would need to explicitly opt in. Most apps will not opt in to
this as they have no reason to, this means we need to patch the app.

### APK MITM

There is a CLI application called
[apk-mitm](https://github.com/niklashigi/apk-mitm) which is designed to
automatically patch an APK to allow user defined certificates which enables
HTTPS inspection. Using this tool, we can download the Panels app APK and patch
it. We can run the tool like this.

```
apk-mitm panels.apk

  ✔ Decoding APK file
  ✔ Modifying app manifest
  ✔ Replacing network security config
  ✔ Disabling certificate pinning
  ✔ Encoding patched APK file
  ✔ Signing patched APK file

   Done!  Patched APK: ./panels-patched.apk
```

Once patched, we just then need to install the app on an Android device.

## Inspecting HTTPS traffic

Once the app is installed we need to run mitmproxy and connect our android
device to it. This can be done by:

1. Run the command `mitmweb`
2. Go to your android settings -> Network and Internet -> Internet -> Wifi
   Settings -> Edit -> Advanced Options.
3. Set proxy to manual.
4. Enter details

You should now be able to see requests in mitmweb.

### Finding the image sources

When we open the app we can see some requests are made to
https://storage.googleapis.com. One of these requests is this:

![mitmweb user interface](/panels/mitmweb.png)

We can see that in the response we get the following data:

```json
{
    "data": {
        "1002709598": {
            "s": "https://panels-cdn.imgix.net/content/a~justinmaller_dc2438be/a~justinmaller_dc2438be_preview.png?crop=faces%2Ccenter&expires=1728508444399&fit=crop&fm=webp&h=795&w=600&s=7129615cd0445a182c63b8d5273509ce",
            "wfs": "https://panels-cdn.imgix.net/content/a~justinmaller_dc2438be/a~justinmaller_dc2438be_preview.png?crop=faces%2Ccenter&expires=1728508444399&fit=crop&fm=webp&h=411&w=260&s=416e5b3bcd003a9eee8abf24bcc7053a"
        },
        ...
    }
}

```

In the data, each item has a link to the full HD version of the image. This
means we have the entire app wallpaper library for free, in high definition,
completely bypassing any paywalls.

The images are available in a public repository without any authentication
required. At this point it would be possible to search through each image and
download every wallpaper.

## Creating a web interface

Since we have the URL to every single image, it is quite easy to make a simple
website to display all of them. We would just need to loop through every image
and create a new img element.

I have put together a quick website that does this. This is available at
[panels.member87.xyz](https://panels.member87.xyz) or on the
[wayback machine](https://web.archive.org/save/https://panels.member87.xyz).

![mitmweb user interface](/panels/panels-free.png)

You can view the source code on
[GitHub](https://github.com/member87/panels-free)>
