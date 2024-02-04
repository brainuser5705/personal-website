---
name: Extract Spotify
description: Pandas and Bokeh program to visualize display Spotify listening history
time: 2021-01
icon: https://i.imgur.com/GAkEkKe.png
tech: python bokeh spotify-api
github_repo: extract-spotify
---

![](https://i.imgur.com/GAkEkKe.png)
<p style="text-align:center; font-style:italic;">This is what the interface looks like.</p>

Extract Spotify was a standalone bokeh server hosted with Heroku on a free dyno (service has ended as of 2023). Users have to download their Spotify data first, and then upload it to the server which will display a timeline for when they listened to a particular artist or song and the corresponding stream minutes for that day.

# Instructions
1. Download your Spotify data. In a few days/weeks, Spotify will email you a .zip file with a JSON of your streaming history (ex. StreamingHistory01.json).
2. Upload either the entire .zip file or JSON file into Extract Spotify (better to send JSON file).
3. *View your visualizations!

