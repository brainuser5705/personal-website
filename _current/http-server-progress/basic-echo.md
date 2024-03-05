---
name: Basic Echo Server
layout: project
time: 2024-03-04
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WWow1Upib5Y?si=8wf0qsqqSBayHeGm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# What

This is a basic implementation of a server-client model using UNIX sockets (connects processes on the same machine). 

The high level sequence of networking events are: `server.c` and `client.c` both create their respective sockets. The server binds to a file path, and listens for connections. The client connects and the server accepts. Then they exchange information through `read()` and `write()` operations. When the connection is broken, both programs close their sockets. The server also has the additional task of *unlinking* the socket file (deletes the name from filesystem).

The `echo` implementation includes:
- user prompting for client (terminated with `\n`)
- polling for server (waits for a `write()` from client to trigger `read()`)
    - It will continuously loop if timeout, and its returned value is checked to determine if there has been any activity.

# Resources and Links

Conceptual knowledge of what sockets are and how they are applied in connection-oriented server-client model was learned from [IBM's articles](https://www.ibm.com/docs/en/i/7.5?topic=programming-how-sockets-work) (I followed their diagram). Their articles are actually very holistic and can be read for general knowledge, despite it being written for their IBM i operating system.

Usage of the functions and structs were referenced with online man pages.

# Dev Comments

I started with the man pages but I didn't have a solid understanding of what sockets even were. So I found the IBM articles, then went back to the man pages. My first task was to create and bind a socket. Once I got that, I worked on connecting sockets, then exchanging data, and fixed it up to have the echo functionality. The `EXIT_IF_ERR` macro idea were taken from EVT-core.

I ran into some issues during development, mostly from a gap of knowledge about how to use UNIX sockets. In times like this, I tried to reference the man pages first to see if I missed something or if it could redirect me to another functions. Otherwise I would search on Google or use StackOverFlow. 

I don't remember every single issue I had, but here is a rough list of problems I was facing, the knowledge gap I had, and the resource that helped me:

- I initially thought that the server and client would communicate through a file, like the client would write to a file that can read
    - Technically sockets are file (UNIX philosophy), but can't be open and read in the traditional file sense.
- `bind()` wouldn't work because address was in use
    - apparently you have to unlink it