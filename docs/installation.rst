.. _installation:

============
Installation
============

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