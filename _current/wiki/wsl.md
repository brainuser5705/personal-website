---
name: troubleshooting using `avr-gcc` with Arduino on WSL
---

- I found a [YouTube vid](https://www.youtube.com/watch?v=j4xw8QomkXs&pp=ygUeYXJkdWlubyBiYXJlIG1ldGFsIHByb2dyYW1taW5n) from Low Level Programming.
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
