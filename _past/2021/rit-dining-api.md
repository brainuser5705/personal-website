---
name: RIT Dining API
description: webscrapes RIT online dining menus and interfaces data with an API
time: 2021-12
tech: python flask beautifulsoup
github: /rit-dining-api-no-db
icon: https://www.rit.edu/fa/diningservices/sites/rit.edu.fa.diningservices/files/styles/dining_loc_lg/public/ArtesanoView.jpg?itok=4lassH_0
---

# Project has been abandoned because of impraticality.

---

## Original idea

The original idea was to create a program that would webscrape the [RIT Dining Specials website](https://www.rit.edu/fa/diningservices/daily-specials) and provide an API interface.

The API interface would then faciliate the backend development for a web/mobile app where students can log what food they ate and get reports on their eating habits, etc. 

---

## Some Progress

I was able to create a prototype/proof-of-concept for the API back in the spring of my second semester. It was extremely rushed, so consequently the quality is horrible.

Some technical notes: I had no idea how to design the JSON format. And the original idea involved inserting the webscraped data into a database as well. But that didn't work out, so right now all it does is webscrapes and sends back the JSON.

> I was able to a working version on Heroku, unforunately they have ended their free dyno program so it is not deployed anymore.

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