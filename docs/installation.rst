.. _installation:

============
Installation
============

Quick Start
-----------

.. code-block:: bash

    pip install cookiecutter
    cookiecutter gh:igembitsgoa/wiki-starter
    # You will now be prompted for some inputs.
    # Project name is one of them, and it is "wiki" by default.
    cd <project-name>
    npm install
    npm start

Detailed Guide
--------------

.. note::
    The iGEM Wiki Starter Pack is based on Node.js but some of its functionalities are built using Python. You will need a working Nodejs, Python and pip installation to get started. 

.. # TODO: #1 Add Python, pip and Nodejs installation instructions

The iGEM Wiki Starter Pack is a Cookiecutter template. To set up the starter pack, first install ``cookiecutter`` by executing the following at the command line::

    pip install cookiecutter

Now, set it up by running::

    cookiecutter gh:igembitsgoa/wiki-starter

It will now prompt you for your iGEM team name, Github username, the repository where you want your wiki to live, along with your name and email address.

.. # TODO: #2 Add Cookiecutter prompt details 