---
name: Seinfeld Calendar
description: (mostly) pure Javascript digital Seinfeld Calendar [M&T Hack and Meet submission]
time: 2022-11
tech: js
icon: 
github_repo: seinfield
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ey7yZy0BcZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## The Hackathon Experience

This project was a [submission](https://devpost.com/software/seinfield-calendar)
to M&T Hack and Meet hackathon, in collaboration with [Zoe
Bingham](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9uu3I9qn9AhU4Q_EDHZWoCqAQFnoECAgQAQ&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fzoe-bingham&usg=AOvVaw1YgRT3l12g9XaL_rzNqMp5).

As you can tell by the scattered JS files in the repository and by how unhinged
we were in the video...we made everything in **pure client-side Javascript**!!!!
Well at least most of it (the backend used NodeJS and MongoDB). The UI is
created via the DOM Element API and requests to the backend is made with the
Fetch API. *As the nature in Javascript, the entire thing is spaghetti code.*

Here's a list of things we did during the hackathon:
- trying to figure out how to use Typescript so we could have classes...more
  than three times
- found Korean Fruit Snacks
- converting back to Javascript because we couldn't figure out how to set up
  Typescript
- worked a Concessions shift mid-hackathon
- trying to figure out how to import external Javascript files into a Javascript
  file
- ended up including everything in `<script>` tech in the HTML file instead
- ate probably 100 grams of sugar to go through the night
- ended up staying awake for > 24 hours
- bought back two pans of just bread, another pan of vegan hotdogs, and a few
  bags of bagels
- some other things I can't remember

Javascript added a lot of layers to the hackathon experience, both good and bad.
Using JS for this project has changed me in so many ways that probably using any
other language couldn't. So will I use only client-side Javascript again?
Absolutely not.

## Calendar Algorithm

The most interesting part of this program is the *calendar generation*. With no
external libraries, how do create an accurate, interactive calendar using only
DOM elements? 

The algorithm generates the calendar month-by-month, meaning only one month is
shown at time. It consists of 3 functions:
1. `generateMonth(date)`
2. `generateWeek(date, currentMonth)`
3. `generateDay(date, currentMonth)`
As you will see the functions calls upon each other, starting from the
bottom-up.

Physically, the calendar is created as a table `<table>` of rows `<tr>`. Each row
consists at most seven data cells `<td>` to represent the days.

Here's a breakdown of the algorithm:
[ to be broken down in the future ]

<!-- ### Setup
1. We start off with a table `<table>` DOM element in the HTML file.

### generateMonth(date)

1. Start with the **date** and take note of its month.
```
Februray 22, 2023
```

2. Get to the last day of month by incrementing the day.
```
February 22, 2023 -> Februray 23, 2023 -> .... -> February 28, 2023
```

3. While the date's month is still the same month as in Step 1, we want generate the
   week. We stop when all weeks of the month have been generated.

```
generateWeek('February 28, 2023', 'February')
```

### generateWeek(date, currentMonth)

1. We create a `<tr>` DOM element and add it to the to the `<table>` element we
   created in setup.

2. While the date's day number (0 - Sunday, 6 - Saturday) is not 0, we generate
   the day and decrement the date.
```javascript
generateDay('February 28, 2023', 'February') // Tuesday
generateDay('February 27, 2023', 'February') // Monday
// STOP since February 26, 2023 is Sunday
```

3. Because we stopped before Sunday in the loop, we generate Sunday on its own.
```javascript
generateDay('February 26, 2023', 'February')
```

### generateDay(date, currentMonth)

1. We create a `<td>` DOM elment.

2. We check if the date's month equals the month, if not then the function ends
   here and no day is generated.

3. If the date 


Note that the date is a global element so all functions are aware whenever one
increments/decrements the date. -->



The code is can be found
[here](https://github.com/brainuser5705/seinfield/blob/main/generate.js)
(functions prefixed with 'generate*').




