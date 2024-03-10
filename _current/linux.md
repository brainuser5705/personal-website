---
name: Linux and FOSS
description: making linux my main os
focus: linux
time: 2024-03-09
---

Below are pages recording my learning journey in Linux and FOSS:

{% assign current = site.current | where_exp:"item", "item.url contains 'linux-progress'" | sort: "time" %}
<ul>
{% for page in current %}
    <li>
    <a href="{{page.url}}">{{page.name}}</a>
    </li>
{% endfor %}
</ul>

---

# What's the deal?

I want to have Linux be my main operating system. Currently I use Windows 11,
and develop on WSL if I need a Linux environment.

I do have a history with Linux. I have installed Linux multiple times before 
on my systems, but ended up switching back to Windows because of some 
proprietary software I needed for school. And also that one time when my
laptop's motherboard fried up and I needed to replace Linux with Windows on my
spare laptop otherwise I couldn't do any schoolwork...I digress. I did try dual 
booting once, but a lot of the hardware on my old laptop didn't have drivers so 
using Linux was a pain.

But now that I have Thinkpad that is compatible with Linux, my dreams can
finally come into fruition and I don't need to look back ever again :) ... I
hope.

## Why the switch?

It's not that I don't like Windows, I mean it's been my main OS for my entire
life and I'm used to its interfaces and such. But bloatware has been kind of
irritating. Like no, I don't want to make Microsoft Edge my main browser.

I also want to get into operating systems one day, and being in a Linux
environment is sort of like a primer for me. From the videos I've seen about why
you should switch over to Linux, you have more control of the system, it's
customizable and open source. So yea, why not.

## What distro?

I used Ubuntu and Ubuntu-derived PopOS in the past, but I do want to try something a little more "advanced" so I can learn more about Linux and the open-source community. Arch has that reputation, but after giving the installation a go with a VM, it is not for me at the moment. Least to say, I had no idea what I was doing. The ArchWiki installation guide was very comprehensive just as it's advertised, but there were just so many ancronyms, terminology, and hyperlinks that it would have led me down a rabbit hole without actually having installed any OS.

That's why I am picking Manjaro. It's Arch-based so I will be using Arch-based packages like `pacman`, etc and Manjaro is considered a newbie distro so I won't be in a state of panic and confusion whenever I use the OS. The goal is to eventually transition out of the pre-packaged distro to a DIY one like Arch.
