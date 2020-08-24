.. _installation:

============
Installation
============

Quick Start
-----------

.. code-block:: bash

    pip install copier
    copier gh:igembitsgoa/igem-wiki-starter wiki
    cd wiki
    npm install
    npm start

Detailed Guide
--------------

.. note::
    The iGEM Wiki Starter Pack requires **git, Nodejs, Python and pip** to be installed. Please make sure you have a working installation of all three before starting here. 

    The starter pack sets up your wiki in a Github repository. Please make sure you have an empty Github repository (without any commits, not even a README file) before you begin.

.. # TODO: #1 Add Python, pip and Nodejs installation instructions


The iGEM Wiki Starter Pack is a Copier template. To set up the starter pack, first install ``copier`` by executing the following at the command line::

    pip install copier

Now, set up the starter pack by running::

    copier gh:igembitsgoa/igem-wiki-starter <wiki-folder-name>

It now shows the following prompts: 

* ``iGEM_team_code``
* ``iGEM_team_name`` 
* ``year`` 
* ``github_username``
* ``github_repository``
* ``author``
* ``email``

Next, go inside the directory that you created (``github_repository``) and execute the following to install Node dependencies::

    npm install

Finally, to install Python dependencies, run this command::

    pip install -r requirements.txt

Installation is complete now and you can start the webpack development server by running::

    npm start

Please send us an email at igembitsgoa@gmail.com if you need any help with installation. 

.. # TODO: #2 Add Cookiecutter prompt details 