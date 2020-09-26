=============
Initial Setup
=============

---------------
Getting Started
---------------

Code Editors
------------

Unlike traditional text editors (notepad, Word, etc.), code editors contain interface features and functionality that will facilitate and streamline the process of writing your wiki code. For this starter pack we recommend using `VSCode <https://code.visualstudio.com/Download>`_ because it comes pre-packaged with version control, and console access.

Collaboration
-------------

In order to be able to work on the wiki together with your team, we suggest you set up Git and GitHub right from the start. If you're unfamiliar with it, take a look at the :ref:`version_control` section.

----------------------
Separation of Concerns
----------------------

The Starter Pack tries to organize your code into sections, so that each section focuses on just one aspect of the wiki.
This makes maintaining it easier, since your team will be 
able to work on different parts in parallel. It also reduces duplication — for instance, even though elements like the navigation bar appear on each page, they have to be written only in one place, and can be included everywhere else.

Like any other website, HTML, CSS and JavaScript files are used for markup, styling and user interaction. Describing these is beyond the scope of this documentation, but here are some :ref:`resources` you can check out to learn these languages.

In order to separate content from design, the starter pack uses Pug templates. Pug is a markup language, just like HTML, but adds several powerful features that simplify your code. While working with this starter pack, you would be working only with Pug (no HTML) and it will eventually be converted to HTML. This HTML would then be uploaded to iGEM servers and browsers would be able to display it. This is covered in more detail under Building and Deployment.

Similarly, the starter pack uses SCSS as a replacement for CSS. SCSS is an extension of CSS, so it's written in the exact same way as CSS, but it brings more features like variables, templates and mixins that help organize the code better. Just like Pug is converted to HTML, SCSS is converted to CSS before it can be uploaded. 

----------------------
The Development Server
----------------------

To see the starter pack in action, run the following command to start a local  server::

    npm start

This will soon open a browser window at http://0.0.0.0:8080 where you’ll see the homepage of your wiki.

On Windows, you might need to manually visit http://localhost:8080 instead of http://0.0.0.0:8080.

The homepage is built out of `src/index.pug` so you can go and start playing around with that file. As soon as you make a change and save the file, the page in your browser will automatically refresh and you can see your change there.

`src/index.pug` will be described in more detail in a later section.

-----------------------
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