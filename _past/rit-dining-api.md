---
name: RIT Dining API
description: Webscrapes RIT online dining menus and interfaces data with an API
time: December 2021
tags: api web-dev webscraping data collab
permalink: /rit-dining-api
github: /rit-dining-api-no-db
image: https://www.rit.edu/fa/diningservices/sites/rit.edu.fa.diningservices/files/styles/dining_loc_lg/public/ArtesanoView.jpg?itok=4lassH_0
---

*This project has been paused (more explanation below)*.

---

## Original idea

The original idea was to create a program that would webscrape the [RIT Dining Specials website](https://www.rit.edu/fa/diningservices/daily-specials) and provide an API interface.

The API interface would then faciliate the backend development for a web/mobile app where students can log what food they ate and get reports on their eating habits, etc. 

---

## Some Progress

I was able to create a prototype/proof-of-concept for the API back in the spring of my second semester. It was extremely rushed, so consequently the quality is horrible.

Some technical notes: I had no idea how to design the JSON format. And the original idea involved inserting the webscraped data into a database as well. But that didn't work out, so right now all it does is webscrapes and sends back the JSON.

**You can check out the API here** (*If you see no data, read the section below.*): [https://rit-dining-api-no-db.herokuapp.com/specials](https://rit-dining-api-no-db.herokuapp.com/specials)

---

## Limitations

So what lead to the ultimate demise of this idea?

First, I suck at programming (;_;).

Second, the entire infastructure is shaky. 
- Webscraping is only good if the site stays static, meaning nothing about its HTML structure changes. If it does, I would have to rewrite the webscraping script.
- The menu is not formatted consistently.
- Any additional features such as nutrition is found on a different website.
- RIT Dining barely updates the menu anyways.
- RIT Dining can very well provide their own API.

---

So all in all, this project wasn't worth the effort. And also the Flask documentation is a pain to read.