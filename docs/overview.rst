.. _overview:

========
Overview
========

The iGEM Wiki Starter Package is a template that contains everything needed to build an iGEM wiki and then some. Instead of reinventing the wheel and starting from scratch every year, teams can expand on this base to kick-start their wiki building process.

The `default out-of-the-box design <https://igembitsgoa.github.io/wiki-starter-demo/>`_ of the package is clean and modern, scales to mobile devices,  comes with a dark mode, and works great with screen readers and the like. All wiki content can be written in plain English (using Markdown) instead of pure HTML, which has poor readability and code to text ratio. Design is also completely separated from content while editing the starter pack; this lets teams customize pages and write content simultaneously, and prevents the workflow from being bottlenecked at either step.

In addition to simplifying content and design, the package includes common web development libraries like Bootstrap (layout), jQuery (JavaScript), MathJax (mathematical notation), and Font Awesome (icons) that add functionality to the wiki. It also features utilities that automate time-consuming tasks like adding citations to your wiki. The title, author, and other publishing information of an article can be retrieved directly from its DOI and included at the end of the page.

The package comes built in with WikiSync, a Python software that uploads the entire wiki to the iGEM servers at once with a single command. This eliminates the need to manually name and upload each file, replace each URL, and copy paste the source code for each page into their respective editors. WikiSync integrates effortlessly into automation workflows like GitHub Actions and Travis CI, so content added to the team's wiki repository on GitHub is automatically uploaded to the iGEM servers every time.

Please head over to the :ref:`installation` instructions or :ref:`usage` to get started.
