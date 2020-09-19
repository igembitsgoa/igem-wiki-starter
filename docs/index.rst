==================================================
Welcome to iGEM Wiki Starter Pack's documentation!
==================================================

The iGEM Wiki Starter Pack is the easiest way to create your iGEM Wiki.

.. start-badges

.. image:: https://img.shields.io/readthedocs/igem-wiki-starter?logo=Read%20The%20Docs&style=for-the-badge
    :target: https://igem-wiki-starter.readthedocs.io
    :alt: Documentation Status

.. image:: https://img.shields.io/github/license/igembitsgoa/igem-wiki-starter?style=for-the-badge
    :alt: License: MIT

.. end-badges

The iGEM Wiki Starter Package is a template that contains everything needed to build an iGEM wiki and then some. Instead of reinventing the wheel and starting from scratch every year, teams can expand on this base to kick-start their wiki building process.

The default out-of-the-box design of the package is clean and modern, scales to mobile devices,  comes with a dark mode, and works great with screen readers and the like. All wiki content can be written in plain English (using Markdown) instead of pure HTML, which has poor readability and code to text ratio. Design is also completely separated from content while editing the starter pack; this lets teams customize pages and write content simultaneously, and prevents the workflow from being bottlenecked at either step.

In addition to simplifying content and design, the package includes common web development libraries like Bootstrap (layout), jQuery (JavaScript), MathJax (mathematical notation), and Font Awesome (icons) that add functionality to the wiki. It also features utilities that automate time-consuming tasks like adding citations to your wiki. The title, author, and other publishing information of an article can be retrieved directly from its DOI and included at the end of the page.

The package comes built in with WikiSync, a Python software that uploads the entire wiki to the iGEM servers at once with a single command. This eliminates the need to manually name and upload each file, replace each URL, and copy paste the source code for each page into their respective editors. WikiSync integrates effortlessly into automation workflows like GitHub Actions and Travis CI, so content added to the team's wiki repository on GitHub is automatically uploaded to the iGEM servers every time.

Please head over to the :ref:`installation` instructions and the :ref:`usage` to get started.

.. note:: 
   These docs are currently under development and some sections are incomplete or missing. We're working to put them up as fast as we can, and we'll have a complete draft up here soon. 

   Meanwhile, you can take a look at the documentation we use within our team at https://github.com/igembitsgoa/wiki/wiki. It has almost everything about using the included theme and more information about customization will be put up here soon.
   

Features
--------

1. Built-in theme that

   a) Looks great on all devices
   b) Comes with a dark mode

2. Markdown support
3. Automatic uploads with WikiSync
4. Extract citation information from DOI
5. Automatic table of contents on each page
6. Endless customization with Webpack
7. Included common web development libraries

   a) Bootstrap
   b) jQuery
   c) MathJax
   d) Font Awesome

8. Extensive templating using Pug
9. Reset styles on iGEM.org


Contribution and Collaboration
------------------------------

Contributions are welcome, and they are greatly appreciated! Every
little bit helps, and credit will always be given.

Please visit our Contributing page to find out how you can help 
make this project better.

Using this software or submitting issues and pull requests can count 
towards a collaboration for our teams. Please give us a shoutout at 
`@igem_bits <https://www.instagram.com/igem_bits>`_ on Instagram if 
this Starter Pack has made your iGEM experience easier! For contibuting 
to this software or discussing further collaborations, please reach out 
to us at igembitsgoa@gmail.com.


========
Contents
========

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   overview
   installation
   initial_setup
   usage
   contributing
   authors
   changelog


.. Indices and tables
.. ==================

.. * :ref:`genindex`
.. * :ref:`modindex`
.. * :ref:`search`
