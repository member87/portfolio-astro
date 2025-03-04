---
title: "Cam Finder"
description: "Find ACTi NV3.0 cameras with factroy default passwords."
tech: ["Python", "Censys", "Shodan"]
url: "cam-finder"
loadFactor: 1
---

[![asciicast](https://asciinema.org/a/505401.svg)](https://asciinema.org/a/505401)

Cam finder is a tool written in Python to find a list of
Acti NVR 3.0 cameras are exposed to the internet with the
factroy default logins.

It uses Shodan and Censys as search engines to find a list of
all cameras matching a search term. Then for each camera,
it attempts a login using the default credentials. Any successful
login is then saved to a .csv file for later reference.

I have a [blog post](/blog/risks-of-poorly-secured-cameras/) with much
more detail about finding these cameras.
