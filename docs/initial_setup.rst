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

-----------------
Project Structure
-----------------

The Starter Pack includes the following files and folders::

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

The ``src``, ``utils`` and ``.github`` folders contain several files and folders as well, which will be discussed in later sections. So many files and folders might seem overwhelming at first, but this setup will make your life much easier and you’ll get used to it in no time.

Two more folders will be created here as you work on your wiki. 

1. The ``dist`` folder contains distribution code, which is HTML, CSS, JS and media that has been created by combining all the files spread across various templates in the ``src/`` folder. Creating this folder will be described later, but just keep in mind that this is the folder that you can put on a server, not the ``src`` folder.

2. The ``igem`` folder will contain HTML, CSS, JS and media that has been processed specifically for iGEM servers. This folder is created by WikiSync and it is the contents of this folder that are finally uploaded to iGEM servers.

We will first talk about the ``src`` folder, and then gradually cover the rest.

The ``src`` Folder
------------------

The `src` folder contains the source files for your wiki. This includes HTML, Pug, CSS, SCSS, JavaScript, images, videos, fonts and everything else you want to add to your wiki.

It contains the following folders and files::

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

1. ``assets/``: Contains all media and documents. Everything other than code.
2. ``citations/``: Files corresponding to those in ``pages/`` in case citations are required there.
3. ``css/``: CSS and SCSS code.
4. ``js/``: JS code.
5. ``pages/``: Pug files that generate pages like ``/Description`` or ``/Design``.
6. ``templates/``: Pug files that contain code common across all pages, such as navbar, footer and a template for each file in ``pages/``.
7. ``index.js``: Entry point for Webpack. Leave untouched if unfamiliar with it.
8. ``index.pug``: Homepage
9. ``nav.yml``: Navigation menu contents. ``utils/nav.py`` generates a dictionary that is used to create the navigation on each page.