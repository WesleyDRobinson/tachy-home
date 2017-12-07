## My personal site

##### for art and web projects

### November 2017

[completed!] Next technical: wrap up in [hyperHTML](https://viperhtml.js.org/)

I have really enjoyed using [hyperHTMLElement](https://github.com/WebReflection/hyperHTML-Element) to build Web Components.

The client-side routing was quite the project!
I really like the API, but [page.js is not being maintained](https://github.com/visionmedia/page.js/issues/384), 😢
So I decided to see what work it would take to get it working and rebuilt my own version (dropping hashbang support).
[Using MDN](https://developer.mozilla.org/en-US/docs/Web/API/History_API), a [client side dive](http://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash) by Krasimir, also [tried out his Navigo](https://github.com/krasimir/navigo).

Eventually realized my server needs updated to serve `index.html` on all routes... of course.
I couldn't find simple way to direct `http-server`, so I made a wrote a [tiny Express server](https://github.com/WesleyDRobinson/tachy-home/blob/master/server.js).

### October 2017

The first iteration (c.2015) of wesley.tech focused on learning Polymer and displaying that I could launch a website.
It was my first diving into Web Components (WCs), an inspiring spec that has really leveled out since then.

The 2017 version now relies only on HTML5 (💚DOM), ES6, and a couple of small CSS libs: tachyons.io design system and a small animate.css library. Thanks to [Unsplash](https://unsplash.com/), for beautiful, free photos! More of my personal art is on the roadmap.

Google Analytics event tracking is running; I generally understand *what's happening on my site*, but I am not currently making any efforts to determine *who you are*

End of October:
* ground up rebuild fully deployed
* finished initial goals of pleasant design, (techie) about me, and starting a code/ project portfolio
* updated to Webpack for build and dev from Browserify/Watchify + http-server
* becoming more comfortable and powerful with tachyons.io
* major open source find: unsplash.com & hyperHTML

visit the site at https://www.wesley.tech
