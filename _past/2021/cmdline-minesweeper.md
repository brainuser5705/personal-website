---
name: cmdline-minesweeper
description: A command line Minesweeper clone
time: 2021-03
tech: java
github_repo: cmdline-minesweeper
icon: https://github.com/brainuser5705/minesweeper-gui/blob/main/src/gui/resources/mine.png?raw=true
github_repo: cmdline-minesweeper
---

### Timeline

*Here is a rough timeline of cmdline-minesweeper and its features. Unfortunately I didn't put any timestamps, but the project was in active development for about two months.*

----

1. **First run successful run! Right now the progam is able to generate a field with all the mines and numbers.**  
![](/assets/images/cmdline_minesweeper_images/first-run.png)  

2. **Top is the what the game displays as its current state (none of the blocks are revealed). Bottom is the actual content of the block.**  
![](/assets/images/cmdline_minesweeper_images/second-run.png)  

3. **Color with ANSI values (had to change the color scheme a little)**  
![](/assets/images/cmdline_minesweeper_images/color.png)  

4. **How to win the game: all the mines are flagged! In the first part, I had one flag left. When I flagged the remaining mine, I won the game.**  
![](/assets/images/cmdline_minesweeper_images/flag-all-mines.jpg)  

5. **Here is a gif of what the gameplay is like as of now:**  
<img src="/assets/images/cmdline_minesweeper_images/v0-gameplay.gif" height="500px"> 

6. **Made enum classes for each of the levels in Minesweeper with another constructor for custom boards.**  
![](/assets/images/cmdline_minesweeper_images/enum-levels.png)  

7. **Adding override commands like this autoplay (created mainly for testing purposes)**  
![](/assets/images/cmdline_minesweeper_images/auto-command.png)  

8. **Rows and cols for easier gameplay**  
![](/assets/images/cmdline_minesweeper_images/rows-and-cols.png)  

9. **Working on a GUI!**  
![](/assets/images/cmdline_minesweeper_images/gui_v1.png)  
![](/assets/images/cmdline_minesweeper_images/flagging.png)

10. **Basic commands (revealing, flagging, unflagging) with game over function** 
<img src="/assets/images/cmdline_minesweeper_images/gui_gameplay.gif" height="500px"> 

11. **New game button feature for clicking and end of game**  
<img src="/assets/images/cmdline_minesweeper_images/newgamebutton_feature.gif" height="500px"> 
