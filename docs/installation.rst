.. _installation:

============
Installation
============

Quick Start
-----------

.. code-block:: bash

    pip install cookiecutter
    cookiecutter gh:igembitsgoa/igem-wiki-starter
    cd <github-repo>
    npm install
    npm start

Detailed Guide
--------------

.. note::
    The iGEM Wiki Starter Pack is based on Node.js but some of its functionalities are built using Python. You will need a working Nodejs, Python and pip installation to get started. 

.. # TODO: #1 Add Python, pip and Nodejs installation instructions

The iGEM Wiki Starter Pack is a Cookiecutter template. To set up the starter pack, first install ``cookiecutter`` by executing the following at the command line::

    pip install cookiecutter

Now, set up the starter pack by running::

    cookiecutter gh:igembitsgoa/igem-wiki-starter

It now shows the following prompts: 

    iGEM_team_name: 
    iGEM_team_code:
    github_username:
    github_repository:
    author:
    email:

Github username is optional, even though we encourage you to keep your wiki under version control.

Github repository is also the name of the folder that will be created on your computer. You can then link it to a repository on Github and push code there. This will not only help with version control, but also help you process your wiki from the cloud to iGEM servers by using Github Actions or Travis.

.. # TODO: #2 Add Cookiecutter prompt details 