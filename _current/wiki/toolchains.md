---
name: Guide to Windows and Linux AVR Development Toolchains
draft: true
---

# Setting up Toolchain

# Using the Arduino

## Flash Programmer + Chip (Arduino is the target)

### Circuitry

The pins of the ATmega chip on the Arduino **corresponds** to the I/O pins exposed by it. All you need to do is find which Arduino pin associates with the chip pin.

### Flashing

#### Arduino IDE

1. The Arduino IDE is capable of running C code. It might need setting up.
    1. Download the [AVR Programming Library](https://github.com/hexagon5un/AVR-Programming/tree/master/AVR-Programming-Library) and add it as a library in the Arduino IDE
    2. Fix up the *portpins.h* file
2. Put the code in the IDE, include the header files by importing the library.
3. Plug in the Arduino to the computer, click 'Verify' and 'Run'.

#### `avr-gcc` toolchain

##### Linux


## Flash Programmer (Chip is External, Arduino is just the programmer)

### Circuitry

Hook up the Arduino to the chip on the breadboard. Connect the essential six connections:
- VCC, GND, RESET, SCK, MISO, MOSI

### Flashing

#### Arduino IDE

1. Flash example code *ArduinoISP* (converts Arduino to Arduino In-System Programmer)
2. Tools > Programmer > Arduino as ISP
3. Tools > Board > Arduino Pro Mini
4. Processor > ATmega168 (3.3V, 8MHz)
5. Shift + Ctrl + U to upload

### `avr-gcc` toolchain

#### Windows

1. Edit Makefile
2. Edit `MCU=atmega168`

#### Linux

1. Edit Makefile
2. Ensure correct ports

# Flash Programmer (USBasp)

1. Need to install driver with Zadig
2. Some warning about sck, resolve by updating the firmware
    But need to solder on header pins for the programming mode switch with jumpers


https://www.instructables.com/USBASP-Installation-in-Windows-10/
https://zadig.akeo.ie/
https://forum.arduino.cc/t/usbasp-cannot-set-sck-period/96164/4
https://www.fischl.de/usbasp/
https://www.fischl.de/usbasp/Readme.txt

Jumpers

https://cs.uwaterloo.ca/~brecht/servers/docs/PowerEdge-2600/en/Pe6450/IT/4097Paa0.pdf
https://maker.pro/forums/threads/what-is-a-jumper-cap-and-when-do-i-use-them.293037/
https://electronics.stackexchange.com/questions/74259/how-are-jumpers-used