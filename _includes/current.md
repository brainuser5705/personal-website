I am interested in delving deeper into how the underlying software and hardware of the tools/applications we use work on at the bit level. Since it's a broad topic, I am using the field of **embedded development** as my compass to see what there is to learn. Along the way, I hope to pick up electrical engineering knowledge and expand my skillset to the physical realm ideally to mechatronics.

Currently as of 2024.01, I am focusing on building proficiency in the C programming language and learning baremetal programming on the Atmel AVR microcontroller.

It's going to be a very long journey, but here is **a continually updating list of projects that I am doing**: 

<ul style="font-size: 2.5vh;">
{% assign current = site.current | where_exp:"item", "item.focus" %}
{% for page in current %}
<li><a href="{{ page.url }}">{{ page.name }}</a>
{% assign fs = page.focus | split: " " %}
{% for f in fs %}
    <inline class="tag fs-4" style="vertical-align: middle;">{{ f }}</inline>
{% endfor %}</li>
<div class="text-muted" style="font-size: 0.8em;"><i>{{page.description}}</i></div>
{% endfor %}
</ul>
