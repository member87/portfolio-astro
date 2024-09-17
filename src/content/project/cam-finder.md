---
title: "Cam Finder"
description: "Find ACTi NV3.0 cameras with factroy defualt passwords."
tech: ["Python", "Censys", "Shodan"]
---

Cam finder is a tool written in Python to find a list of
Acti NVR 3.0 cameras are exposed to the internet with the
factory default logins.

It uses Shodan and Censys as search engines to find a list of
all cameras matching a search term. Then for each camera,
it attempts a login using the default credentials. Any successful
login is then saved to a .csv file for later reference.

I have a [blog post](/blog/risks-of-poorly-secured-cameras/) with much
more detail about finding these cameras.