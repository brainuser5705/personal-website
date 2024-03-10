```
name: Installation Process
time: 2024-03-09
```

# Part 1 - Buying another drive

I still need Windows on my system, so I need to buy another drive for Linux. I
could install it on the same drive but my drive space is only 512 GB. And plus
my laptop has a second M.2 slot so might as well just use another drive. All
I need to do is find what drive to get. 

Thing is I suck at consumerism - too 
much choices and all of them are expensive. I tried to find a spare drive from 
my dead/spare laptops (none found) and I can't steal the one from the family's 
MacBook, so the only option I really have is to get a new one. Or maybe 
secondhand on Ebay, but I'm a bit wary.

I did some [bare-minimum research on all the terminology and acronymns](https://www.crucial.com/articles/about-ssd/m2-with-pcie-or-sata). What I
need is a PCle NVME M.2 drive. Specific to my laptop, it looks like a thermal
pad is also be needed. I could also get a heat shield, but that's more of an
accessory than necessity. Other [factors to consider](https://www.tomshardware.com/reviews/ssd-buying-guide,5602.html) are cost (*lower the better*) and storage size (*500 GB - 1 TB seem reasonable*). I ended up choosing the [Western Digital SN850X Gen4 PCle 1TB M.2 SSD](https://www.amazon.com/gp/product/B0B7CPSN2K/ref=ox_sc_act_title_2?smid=ATVPDKIKX0DER&th=1) with the heatsink and bought a 2.0 mm height thermal pad. There were some cheaper alternatives the [buyer's guide](https://www.tomshardware.com/reviews/best-ssds,3891.html) recommended, but they had some cons such as the specific drive type (QLC, DRAM-less), no Gen4 PCle support, or that the price is pretty close (give $20-30) to the WD SSD. So might as well cash a few more dollars for the better top-rated one.

Now in all honesty, I have no idea what QLC, TLC, DRAM vs DRAM-less actually mean. They appeared in the article...but the article did say the average consumer shouldn't worry abou them. From what I've gathered in the Reddit posts is that TLC and DRAM are better. That's good enough to know for now.

# Part 2 - Installation

I installed Manjaro xfce edition through a iso-burned USB drive. The entire process wasn't as smooth as it could have been. 

I first installed the drive (I initially brought the one with a heatsink...and it didn't fit so I had to order a new one, but Amazon Prime one day delivery came in clutch).  

Next was the ISO burning. Manjaro has a lot of different variants differing on the desktop environment and there were a couple that I wanted to try out with a VM before installing onto the drive. But when you download the file via HTTP, they always say to validate it with the checksum. So after waiting nearly 30 minutes for the downloads to finish, I had to get the hash and compare it. Pretty standard, except the fact that the community i3 version was zipped up in way I haven't never seen before. Apparently, zipped files can be split into a `.zip`, `z01`, `z0n`? I had to installed WinZip to finally be able to extract the iso file. So it took close to 2 hours just to finally pick an ISO to burn. I used Rufus to burn the ISO. I made a gaff of burning two times because Rufus still has the `Start` button highlighted after completion. 

The final step was booting up from the USB and going through the wizard. I entered UEFI BIOS, selected the USB to boot from, and ... nothing happened. I thought it was because of a faulty USB, so I booted back into Windows to flash a new USB. Went back to UEFI BIOS and still nothing...Oh right, I have to be in Secure Boot! So I tried to find the Secure Boot setting, which took a good 10 minutes because I can't read. 

Not the best time of my life, but I got it installed and it works great.
