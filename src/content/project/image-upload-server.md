---
title: "Image Upload Server"
description: "Image file server for uploading screenshots to."
tech: ["NextJS", "React", "S3", "Postgres"]
url: "image-upload-server"
loadFactor: 1
---

## Image Upload Server

This is a lightweight image upload server built with Next.js and React, designed
for quickly sharing screenshots.

I’ve also created a script that automates the process:

- Captures a selected area of the screen
- Uploads the image
- Copies the URL to the clipboard
- Sends a notification once complete

```bash
#!/bin/bash
maim -s | base64 | jq --slurp -R '{input: ., "key": "<hidden>"}' | \
curl -X POST -d @- https://i.jackhumes.com/api/v1/screenshot | \
jq -r '.url' | xclip -selection clipboard
notify-send "Screenshot uploaded and URL copied to clipboard"
```

An admin dashboard provides a way to log in, manage images, view creation
timestamps, and delete uploads as needed.

The server is hosted on Vercel, with all images stored in an S3 bucket.
