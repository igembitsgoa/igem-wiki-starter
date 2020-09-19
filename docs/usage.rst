.. _usage:

===========
Usage Guide
===========

After installing all the requirements and setting up the starter pack, read on to learn how you can edit the template and build your wiki using the starter pack.

.. contents:: Table of Contents

Use the Built-in Theme or Build your Own
----------------------------------------

The starter pack comes with a design template that you can directly use. By editing just the text on each page, you fulfill all the requirements of an iGEM wiki.

The starter pack also makes it really easy to develop your own theme. It completely separates the content of your wiki from its design, so a part of your team can work on the design, while everyone else can just write plain text files with the actual content. 

We'll talk about building your own theme, but first let's see how you can start with the one that comes built-in.

Setting up the Development Server
---------------------------------

Run the following to start the Webpack server::

    npm start

This will soon open a browser window where you'll see the homepage of your wiki.

This is built out of ``src/index.pug`` so you can go and start playing around with that file. As soon as you make a change and save the file, the page in your browser will automatically refresh and you can see your change there.

``src/index.pug`` will be described in more detail in a later section.

Editing a Standard Page
-----------------------

Since an iGEM wiki is mostly for documenting a research project, almost all the pages of your wiki will have the same general theme. The homepage and a few others might be different, but we'll come to those later.

Go to the Description page at ``src/pages/Description.pug`` and also open this page in the browser from the navigation menu at the top to see your changes as you edit.

.. code-block:: pug

    extends ../templates/contents.pug

    block headVars
        - var title = "Project Description"
        - var tagline = "Describe how and why you chose your iGEM project."
        - var requireMathJax = false

    block article
        :markdown-it(html)

            # What should this page contain?

            * A clear and concise description ...

        +image(1, "Description--josh-withers.jpg", "Picture by Josh Withers on Unsplash")
        
        ...

``Description.pug`` contains code as shown above. If you look at the code and the rendered version in your browser, you'll notice that the ``.pug`` file contains very little code. Most of it is plain English, yet, the website is rendered eventually as HTML and CSS that your browser can display.

This is because our setup uses filters and loaders to convert Markdown to Pug, which is finally converted to HTML and saved as a file. So let's see how all of this works.


Templates and Pages
-------------------

The first line of ``src/pages/Sample.pug`` is::

    extends ../templates/contents.pug

This means that ``Sample.pug`` "extends" ``contents.pug``. In this way, all files in ``pages/`` are based on the ``contents.pug`` template. 

``templates/contents.pug`` and ``pages/Sample.pug`` are described with comments `here <https://gist.github.com/ballaneypranav/3c5594cd6b025af060e9c85f77958ec8>`_. Please leave a comment there in case any clarification is required.

More information about Pug templates is available `here <https://pugjs.org/language/inheritance.html>`_.


The Structure of the Setup
--------------------------

As you set up the project, it will include the following files and folders::

    .github/
    src/
    utils/
    .gitignore
    .travis.yml
    package.json
    package-lock.json
    README.md
    requirements.txt
    webpack.common.js
    webpack.development.js
    webpack.production.js
    wikisync.py

The ``src``, ``utils`` and ``.github`` folders contain several files and folders as well, which will be discussed in later sections. So many files and folders might seem overwhelming at first, but this setup will make your life much easier and you'll get used to it in no time.

We will first talk about the ``src`` folder, and then gradually cover all the other files.

The ``src`` folder contains the source files for your wiki. This includes HTML, CSS, JavaScript, images, videos, fonts and everything else you want to add to your wiki.

It contains the following files::

 src/
    assets/
    citations/
    css/
    js/
    pages/
    templates/
    index.js
    index.pug
    nav.yml

#. ``assets``: Contains all media and documents. Everything other than code.

#. ``citations``: Files corresponding to those in ``pages/`` in case citations are required there.

#. ``css``: CSS code.

#. ``js``: JS code.

#. ``pages``: Files that generate pages like ``/Description`` or ``/Design``.

#. ``templates``: Files that contain code common across all pages, such as navbar, footer and a template for each file in ``pages/``.

#. ``index.js``: Entry point for Webpack. Leave untouched if unfamiliar with it.

#. ``index.pug``: Homepage

#. ``nav.yml``: Navigation menu contents. ``utils/nav.py`` generates a dictionary that is used to create the navigation on each page.  


Building and Deployment
-----------------------

The starter pack uses Webpack for bunding the assets under ``src/``. All the files in the ``src/`` folder are compiled and bundled into HTML, CSS and JavaScript in a folder called ``dist`` that can be finally uploaded to iGEM servers. 

To do so, run::

    npm run build

outside the ``src/`` folder. A folder called ``dist`` will be created with HTML, CSS and JavaScript files. 

These can be directly uploaded using WikiSync. A Python script called ``wikisync.py`` comes with the starter pack and can be used without any changes. 

WikiSync requires your credentials to be stored as environment variables called ``IGEM_USERNAME`` and ``IGEM_PASSWORD``. More information about this is available with the `documentation for iGEM WikiSync <https://igem-wikisync.readthedocs.io>`_.

After exporting these environment variables, run::

    python3 wikisync.py

to run WikiSync and deploy your wiki to iGEM servers.

.. 
    Use the Built-in Theme or Build your Own
    Setting up the Development Server
    Editing a Standard Page
    Pug Templates
    The Structure of the Setup  
    Building and Deployment
