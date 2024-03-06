---
name: Basic Echo Server
layout: project
time: 2024-03-04
---



# What

Instead of binding of a UNIX filepath, the socket binds to the localhost address space. The client does not need to be implemented, it can be a web browser.

# Resources

The man pages for `ip` and its related functions were used. I consulted Wikipedia
for some basic information about IP addresses:
- [IP Address](https://en.wikipedia.org/wiki/IP_address)
- [localhost](https://en.wikipedia.org/wiki/Localhost#Packet_processing)
- [Port number](https://en.wikipedia.org/wiki/Port_(computer_networking)#Use_in_URLs)

You can see the errno and enums assocations in the [`errno.h` source code](https://xenbits.xen.org/docs/unstable/hypercall/x86_64/include,public,errno.h.html).

# Dev Comments

The sequence of events to achieve connection is nearly identical to the echo 
server. The only difference is that I need to bind the socket to a local IP 
address (localhost). The other operations of the socket API are the same.

I first consider implementing for `ipv6`, however the address structure has some fields that don't have a clear value for them (e.g. `scope_id`). The *Bugs* section of the man page says that the API for `ipv6` isn't fully implemented, so I decided to reduce the implementation to `ip` (IPv4).

I had some trouble creating the address. My first approach was to have a constant struct in `common.h` like in Basic Echo, however it has a compile error because initializers cannot be constant. The initializers (`htons`, `htonl`) could not be assign to the struct member fields since they are not constant. I had to search on Stack Overflow for some help. The final solution that worked was to put it in dynamic memory. The `INADDR_LOOPBACK` address is created in an anonymous struct. Since the addresses should be in network order (big endian - the high order bits are in the lower addresses), the address and port have to be passed into `htonl` and `htons` respectively.

I tried to do some checking with `getsockname`, but the actual printing of the address is hard to do with its structure. There I used `gdb` to look at the variable and confirmed that it had `80` and `127.0.0.1`.

The socket needs to be set to listening in order for the client to be able to connect (binding isn't enough).