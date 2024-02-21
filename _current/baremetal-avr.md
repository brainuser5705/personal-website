---
name: baremetal avr
description: log and wiki for things learned as I follow 'Make&#58; AVR Programming' by Elliot Williams
focus: avr c
time: 2024-02
---

# Guides

<ul>
    {% assign current = site.current | where_exp:"item", "item.url contains 'wiki'" %}
    {% for page in current %}
        <li>
        <a href="{{ page.url }}">{{ page.name }}</a>
        </li>
    {% endfor %}
</ul>

<hr>

# Log

2/20/24
- Working through Chapter 5
    - bought FTDI cable from [Amazon](https://www.amazon.com/dp/B06ZYPLFNB?psc=1&ref=ppx_yo2ov_dt_b_product_details) and had to install driver from [official website](https://ftdichip.com/drivers/) (simple installation process, just have the cable plugged in while it installs)
    - read through the UART0 section of [datasheet](https://ww1.microchip.com/downloads/aemDocuments/documents/MCU08/ProductDocuments/DataSheets/ATmega48A-PA-88A-PA-168A-PA-328-P-DS-DS40002061B.pdf) and code for UART functions - essentially figuring out which bits in which registers to set with the help of mnemonic definitions
    - plan for next session is to write it down (for memory sake), probably solder up the speaker, and work on the chapter's project

2/18/2024
- Worked through Chapter 4 of the book
    - learned about the common bit operations (bit twiddling as it's reffered to in the book), `_BV()` macro, and the loop condition `i < 255` when working with unsigned integers

2/15/2024
- Was working on the Automatic Dog Feeder Arduino project, then fell into a rut, but back at it again
- Worked through Chapter 3 of the book, learned about how hardware registers are used in code and how a MOSFET works

2/1/2024
- TTIL to not buy kits if I will not be using 95% of the things in it
- Instead order the required components separately and only pay for what you need

**~Took a break because of other interests~**

12/28/2023

- Following "Make: AVR Programming" by Elliot Williams
- Plan is to use the Arudino as the target for flashing (using it for both the programmer and the Atmega chip)
- After that, I will do research on using a dedicated hardware programmer and getting the chip by itself separate from the Arduino (https://www.digikey.com/ordering/shoppingcart), and perhaps some of the other hardware stuff I need later in the book

**~Took a break because of school~**

10/13/2023

- Started out intending to go through *Real-Time C++ - Efficient Object-Oriented and Template Microcontroller Programming* by Christopher Kormanyos
    - My plan was to go through Chapter 2 learning how to build and flash the led program onto the Arduino and then going over the details of the program
- The book mentioned needing to build the GNU GCC cross compiler with MinGW/MSYS, so I attempted to that and failed miserably.
    - For some reason, `gcc` didn't work on the MSYS terminals but I assumed that I could just use the one I already have working on Command Prompt (however it worked, I don't know)
    - Then I figured I probably need to build it on my own anyways, so I tried unpacking the required programs but `lzip` was not doing it for me so I gave up
    - At this point, I had and still have no idea what I am doing
    - But I did find some good pages to help me understand more about MSYS
        - https://www.msys2.org/
        - https://www.msys2.org/docs/environments/
- I gave up on the book and found a [YouTube vid](https://www.youtube.com/watch?v=j4xw8QomkXs&pp=ygUeYXJkdWlubyBiYXJlIG1ldGFsIHByb2dyYW1taW5n) from Low Level Programming
    - Development is on a Linux environment and I didn't want to bother figuring out how to install all the necessary programs/compilers on Windows so I switched over to WSL
    - Typed all the code out and ran `make` but got:
    ```
    avrdude: stk500_getsync() attempt 1 of 10: not in sync: resp=0x00
    ...
    ```
    - Searched the internet for why that is the case, and found a solution: I needed to reinstall the driver since the Arduino wasn't showing up as "Arduino" but as "Univeral Serial Bus" on Device Managers:
        - [solution guide](https://arduino.stackexchange.com/questions/13502/avrdude-stk500-get-sync-attempt-10-of-10-not-in-sync-resp-0x20-how-do-i-ge)
        - [similar answers](https://arduino.stackexchange.com/questions/17/avrdude-stk500-getsync-not-in-sync-resp-0x00-aka-some-dude-named-avr-won)
        - [not the solution but good for future reference](https://arduino.stackexchange.com/questions/473/how-do-i-burn-the-bootloader/474#474)
    - But the `avr` problem was still showing up, so I figured it had to do with the COM ports not translating over to WSL
        - ports show up on WSL as `/dev/ttyS#` where `#` is the COM port #
        - [Have to switch over to WSL 1](https://askubuntu.com/questions/1461302/i-need-help-connecting-serial-ports-to-ubuntu-in-wsl) since WSL 2 doesn't support serial ports (the link also contains instructions on how to change it)
    - Still didn't work...so I tried to upload an Arduino sketch with the IDE and it worked so the Arduino isn't broken
    - Tried to flash again and it worked!! I don't know what that's the case but it worked
- Tried with the CPP code from the book but `avr-g++` doesn't include the standard library
    - https://stackoverflow.com/questions/22749477/how-to-use-c-std-with-avr-compiler
    - https://stackoverflow.com/questions/22749477/how-to-use-c-std-with-avr-compiler
    - https://electronics.stackexchange.com/questions/462124/can-i-use-c-stl-in-avr-gcc#:~:text=Unfortunately%2C%20avr%2Dg%2B%2B%20does,to%20find%20out%20which%20ones.
- tried to use the toolchains but still have no idea how it works