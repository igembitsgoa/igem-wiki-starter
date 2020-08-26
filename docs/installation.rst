.. _installation:

============
Installation
============

.. contents:: Table of Contents

.. note::
    The iGEM Wiki Starter Pack requires **git, Nodejs, Python and pip** to be installed. Please make sure you have a working installation of all three before starting here. 

Quick Start
-----------

Installation::

    pip install copier
    copier gh:igembitsgoa/igem-wiki-starter wiki
    cd wiki
    npm install
    pip install -r requirements.txt
    npm start


Git setup::

    git init
    git add --all
    git commit -m "Initial commit"
    git remote add origin <your Github repository URL>
    git push --set-upstream origin master

Detailed Guide
--------------

.. note::
    The iGEM Wiki Starter Pack requires **git, Nodejs, Python and pip** to be installed. Please make sure you have a working installation of all three before starting here. 

.. # TODO: #1 Add Python, pip and Nodejs installation instructions


The iGEM Wiki Starter Pack is a Copier template. To set up the starter pack, first install ``copier`` by executing the following at the command line::

    pip install copier

Now, set up the starter pack by running::

    copier gh:igembitsgoa/igem-wiki-starter <wiki-folder-name>

It now shows the following prompts: 

* ``iGEM_official_team_name``
* ``iGEM_team_name`` 
* ``year``
* ``author``
* ``email``

Next, go inside the directory that you created and execute the following to install Node dependencies::

    npm install

Finally, to install Python dependencies, run this command::

    pip install -r requirements.txt

Installation is complete now and you can start the webpack development server by running::

    npm start


Updates
-------

For you to recieve updates on the Starter Pack, it is necessary for your wiki to be a git repository. Please read the :ref:`version_control` section to find out how to do this.

Before updating, make sure all your changes are either committed or stashed, leaving your working directory clean. 

Then, execute::

    copier update

in your wiki directory to update your Starter Pack installation.

Copier will ask you the same questions listed above, but your previous responses will be saved, so you can just press Enter at all the prompts.

It will then generate the updated files and ask you whether your existing files should be replaced by the new ones. If you're sure that you have not edited a file, you can safely overwrite it. If you answer `No` for any prompt, your file will be replaced with a ``.rej`` file with the same name, containing a ``diff`` of the old vs new version of the file. You can then decide which lines to keep.

Known Issues
------------

Installation on Windows might require some additional effort.

1. **localhost**: ``npm start`` opens ``0.0.0.0:8080`` for the live server. This might not work on Windows. In this case, visit ``localhost:8080`` to see your live server.

2. **Emoji in Terminal:** Copier displays emoji in its prompts, which cannot be processed by Command Prompt and PowerShell. Please install the Windows Terminal from the Windows Store to overcome this issue.

3. **Python command issue:** in ``package.json``, npm scripts have been defined. These are the commands that are executed when you run ``npm <something>``. All Python commands are executed using the ``python3`` commands, which is the standard for Linux systems, and consequently, Github Actions or Travis CI. If you run Python using the ``python`` command, you might face some errors when running these commands. In this case, create additional tasks for your Windows system as shown below

    .. code-block:: json

        "preprocess:win": "python utils/preprocess.py",
        "nav:win": "python utils/nav.py",
        "citations:win": "python utils/citations.py",
        "custom_tests:win": "python utils/test.py",
        "server:win": "webpack-dev-server --config webpack.development.js --open --host 0.0.0.0",
        "start:win": "npm-run-all preprocess:win nav:win citations:win custom_tests:win server:win"

Then, run ``npm run start:win`` instead of ``npm start``.

.. _version_control:


Version Control
---------------

It is recommended that you set up `version control <https://www.youtube.com/watch?v=9GKpbI1siow>`_ for your wiki by `creating a Github repository <https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository>`_ right away. 

This will not only make development easier, but also allow you to try out your wiki on your github.io URL before uploading it to iGEM servers. Besides, you can set up Github Actions to automatically deploy your wiki directly from Github to iGEM servers. A detailed tutorial on this subject will soon be available here.

Setting up version control on your Wiki is necessary for you to recieve updates on the template. This will ensure that as we continue to add features to the Starter Pack, you will be able to integrate them into your wiki.

To set up Git for your wiki, create an empty repository on Github and set it up by executing the following in the folder you have created::

    git init
    git add --all
    git commit -m "Initial commit"
    git remote add origin <your Github repository URL>
    git push --set-upstream origin master

Please send us an email at igembitsgoa@gmail.com if you need any help with installation. 

.. # TODO: #2 Add Cookiecutter prompt details 