---
title: "Cam Finder"
description: "Find ACTi NV3.0 cameras with factroy default passwords."
tech: ["Python"]
url: "cam-finder"
loadFactor: 1
---

[![asciicast](https://asciinema.org/a/505401.svg)](https://asciinema.org/a/505401)

Cam Finder is a Python-based tool designed to identify Acti NVR 3.0 cameras
exposed to the internet with default factory login credentials. It leverages
search engines like **Shodan, Censys, and Netlas** to locate these cameras, then
attempts to log in using default credentials. Any successful login attempts are
logged and saved into a `.csv` file, containing relevant details for further
analysis.

This project provides a simple and efficient way to discover unsecured
surveillance cameras on the internet, allowing users to assess potential
vulnerabilities in these systems.

## Key Features

- **Search Engines**: Utilizes **Shodan, Censys, and Netlas** to search for
  cameras using specific terms or device characteristics.
- **Default Login Attempts**: The tool automatically tries the default login
  credentials:
  - **Username:** `admin`
  - **Password:** `123456`
- **CSV Logging**: Successful logins are saved in a `.csv` file containing
  critical information such as:
  - **IP address**
  - **Port number**
  - **HTTP status code**
  - **Camera count**
  - **Source of the device** (Shodan, Censys, or Netlas)
  - **Geolocation data** (city, country, longitude, latitude)
