---
name: cmdline-minesweeper
description: A command line Minesweeper clone
time: March 2021
tags: feature java
permalink: /cmdline-minesweeper
---

*Here is a rough timeline of cmdline-minesweeper and its features. Unfortunately I didn't put any timestamps, but the project was in active development for about two months.*

_**[View the project on Github](https://github.com/brainuser5705/cmdline-minesweeper)**_  

##### **First run successful run! Right now the progam is able to generate a field with all the mines and numbers.**  
![](/assests/images/cmdline_minesweeper_images/first-run.png)  

##### **Top is the what the game displays as its current state (none of the blocks are revealed). Bottom is the actual content of the block.**  
![](/assets/images/cmdline_minesweeper_images/second-run.png)  

##### **Color with ANSI values (had to change the color scheme a little)**  
![](/assets/images/cmdline_minesweeper_images/color.png)  

##### **How to win the game: all the mines are flagged! In the first part, I had one flag left. When I flagged the remaining mine, I won the game.**  
![](/assets/images/cmdline_minesweeper_images/flag-all-mines.jpg)  

##### **Here is a gif of what the gameplay is like as of now:**  
<img src="/assets/images/cmdline_minesweeper_images/v0-gameplay.gif" height="500px"> 

##### **Made enum classes for each of the levels in Minesweeper with another constructor for custom boards.**  
![](/assets/images/cmdline_minesweeper_images/enum-levels.png)  

##### **Adding override commands like this autoplay (created mainly for testing purposes)**  
![](/assets/images/cmdline_minesweeper_images/auto-command.png)  

##### **Rows and cols for easier gameplay**  
![](/assets/images/cmdline_minesweeper_images/rows-and-cols.png)  

##### **Working on a GUI!**  
![](/assets/images/cmdline_minesweeper_images/gui_v1.png)  
![](/assets/images/cmdline_minesweeper_images/flagging.png)

##### **Basic commands (revealing, flagging, unflagging) with game over function** 
<img src="/assets/images/cmdline_minesweeper_images/gui_gameplay.gif" height="500px"> 

##### **New game button feature for clicking and end of game**  
<img src="/assets/images/cmdline_minesweeper_images/newgamebutton_feature.gif" height="500px"> 
