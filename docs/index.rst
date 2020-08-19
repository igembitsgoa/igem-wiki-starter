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

This starter pack contains everything you need to build your wiki, and then some. It comes with a great design out of the box, so you can write your wiki in plain English (well, almost - it's Markdown) and it will not only look good on each device, but will also work great with screenreaders and the like. 

It also makes it really easy for you to customize the design, while still making it possible for everyone in your team to write content in Markdown. Along with common web development libraries like Bootstrap, jQuery, MathJax and Font Awesome, it also includes small utilities that automate tasks like adding citations to your wiki. It automatically pulls title, author and publisher information from an article's DOI and includes them at the end of the page. 

It also comes with our Python package, WikiSync, built in, which uploads your entire wiki at once. WikiSync integrates effortlessly into automation workflows like Github Actions and Travis CI so everytime a team member adds content to your wiki repository on Github, it gets automatically uploaded to iGEM.org.

The starter pack makes building your wiki as easy as writing plain English and uploading, as simple as a ``git push``.

Please head over to the installation instructions and the usage guide to get started.

.. warning:: 
   These docs are currently under development and several sections are incomplete or missing. We're working very hard to put them up as fast as we can, and we'll have a complete draft up here soon.
   

Features
--------

1. Built-in theme that

   a) Looks great on all devices
   b) Works with screenreaders and the like

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
   usage/index
   contributing
   authors
   changelog


.. Indices and tables
.. ==================

.. * :ref:`genindex`
.. * :ref:`modindex`
.. * :ref:`search`
