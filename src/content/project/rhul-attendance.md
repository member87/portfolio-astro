---
title: "RHUL Attendance"
description: "Automatically mark attendance at Royal Holloway university."
tech: ["Python", "Selenium"]
url: "rhul-attendance"
---

This project was a small Python script I wrote. It uses Selenium
to navigate to the RHUL attendance website and automatically
login. This would mark me as being in class for every class
automatically.

Once my attendance was record, a webhook would be sent to
Disocrd with the lecture data that has been marked.

The script would automatically run using cronjobs and meant
I never had to manually log attendance again.
