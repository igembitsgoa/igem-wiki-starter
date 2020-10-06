.. _project__structure:

=================
Project Structure
=================

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

------------------
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

-------------------
Templates and Pages
-------------------

The first line of ``src/pages/Sample.pug`` is::

    extends ../templates/contents.pug

This means that ``Sample.pug`` "extends" ``contents.pug``. In this way, all files in ``pages/`` are based on the ``contents.pug`` template. 

``templates/contents.pug`` and ``pages/Sample.pug`` are described with comments `here <https://gist.github.com/ballaneypranav/3c5594cd6b025af060e9c85f77958ec8>`_. Please leave a comment there in case any clarification is required.

More information about Pug templates is available `here <https://pugjs.org/language/inheritance.html>`_.
