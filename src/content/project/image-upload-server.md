---
title: "Image Upload Server"
description: "Image file server for uploading screenshots to."
tech: ["NextJS", "React", "S3", "Postgres"]
url: "image-upload-server"
---

Image upload server is a small project written in NextJS and React.
It is used for uploading screenshots to so that they can be shared
around.

I have a script which will automatically screenshot, upload
and add the URL to your clipboard:

```bash
#!/bin/bash
maim -s | base64 | jq --slurp -R '{input: ., "key": "<hidden>"}' | curl -X POST -d @- https://i.jackhumes.com/api/v1/screenshot | jq -r '.url' | xclip -selection clipboard
notify-send "Screenshot uploaded and URL copied to clipboard"
```

There is a admin dashboard which allows you to login and manage
all your images. You can view when they were created and delete them.

The upload server is hosted on Vercel and all images are
saved to an S3 bucket.
