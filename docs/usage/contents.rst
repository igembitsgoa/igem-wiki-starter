.. _contents:

========
Contents
========

---------------------------
Structure of a Regular Page
---------------------------

Since an iGEM wiki is mostly for documenting a research project, almost all the pages of your wiki will have the same general theme. The homepage and a few others might be different, but we’ll come to those later.

Visit the Sample page at http://0.0.0.0:8080/Sample and then take a look at the source code for it in ``src/pages/Sample.pug``. This has also been described with comments `here <https://gist.github.com/ballaneypranav/3c5594cd6b025af060e9c85f77958ec8>`_.

You’ll notice correspondence between the code and the page, but also notice that all the details about formatting are neatly hidden away. The build system has been configured to generate all the surrounding code, so you only have to edit this text. Links, colors and animations can be edited in the CSS files.

The structure of ``Sample.pug`` looks something like this::
    
    extends ../templates/contents.pug

    block headVars
        - var title = "Sample"
        - var requireMathJax = true

    block article

        :markdown-it(html)
            //- ...

    //- DO NOT MODIFY THIS LINE AND ANYTHING BEYOND.

    prepend citations
        - var citations = [...]


So there are six major sections, which are described in more detail below. The most important thing to notice is the indentation of various code blocks. Please keep that in mind as you read the guide.

``extends ../templates/contents.pug``
    As described above, this just says that ``Sample.pug`` is based on the ``contents.pug`` template.

``block headVars``
    This section contains the title of the page, a summary and a variable which denotes whether MathJax is required on this page or not.You can change these variables and use them as you like in ``contents.pug``.

``block article``
    This is the main body of the page, where all the content lives. The structure of this section follows markdown syntax, which has been described in the next section.

``//- DO NOT MODIFY THIS LINE AND ANYTHING BEYOND.``
    This section will contain citations taken from the ``citations/`` folder. This is described later and can be ignored for now. Everything you add manually in this section will be overwritten with citations. If you create any custom elements, make sure they're above the ``DO NOT MODIFY`` line.

------------------
Markdown Reference
------------------

Our wiki generator fully supports markdown, a simple markup language which allows you to focus on the content while writing, hiding away all the formatting and styling details.

Here is an example of how Markdown can be used in the Starter Pack

.. parsed-literal::

    block article
        :markdown-it(html)
            # Headings
            ## Level 2 Heading
            ### Level 3 Heading
            #### Level 4 Heading

HTML can also be written in this section::

    block article
        :markdown-it(html)
            <mark>Hello</mark>

For more examples, please take a look at the `Sample <https://igembitsgoa.github.io/wiki-starter-demo/Sample/>`_ page of the template, while going through its `code <https://github.com/igembitsgoa/igem-wiki-starter/blob/master/src/src/pages/Sample.pug>`_.

For full documentation of Markdown, visit the `Markdown Guide <https://www.markdownguide.org/>`_.

To preview your text, visit `Markdown Preview <https://markdownlivepreview.com/>`_.

We have also defined some additional syntax that is included below.

-------------
Custom Syntax
-------------

This section covers some special syntax that doesn’t come with markdown, but was made in order to extend its capabilities as per our requirements.

For a working example, please take a look at the `Sample <https://igembitsgoa.github.io/wiki-starter-demo/Sample/>`_ page of the template, while going through its `code <https://github.com/igembitsgoa/igem-wiki-starter/blob/master/src/src/pages/Sample.pug>`_.

Images
------

Since the Starter Pack is built on Webpack, images cannot be added through the regular Markdown syntax. 

Images can be added using the following syntax::

    block article 
        +image(1, "Description--header.jpg", "Caption", 100)

Notice that there is no ``:markdown-it`` block here. Images are added outside Markdown blocks, since this is not Markdown syntax.

The syntax used here is a Pug mixin, which is defined in ``src/templates/mixins.pug``. The arguments are described below:

* **n:** Figure number, relative to the page.
* **URL:** Filename relative to ``src/assets/img/``
* **Caption:** Please describe the image in a short phrase/sentence for screenreaders.
* **Width:** Width of the image as a percentage of the content body. Optional. Default: 90%.

The filename is automatically resolved to the relative path and another line is added above this mixin call. You can ignore this line and if you want to change the image after adding it, either change it in the ``imgpath`` line, or remove the ``imgpath`` line and change in the mixin call.

Definitions
-----------

Tooltip definitions are elements that show a popup on hover, containing a definition of the term highlighted.

Sample syntax is shown below. Notice the `~` (tilde) character.

.. code-block:: 

    :markdown-it(html)
        <dfn>Term ~ Definition</dfn>

        This can come <dfn>anywhere in ~ the text</dfn>.

Tables
------

Tables are made using the ``markdown-it-multimd-table`` plugin, so in order to create a table, you’re required to indent one level back, mention the plugin, and then indent inside again.

.. code-block::

    :markdown-it(html)
        This is a regular paragraph, which precedes the table.
        When you want to insert a table, indent one level 
        back and specify the plugin.
        Then indent inside again and start writing the table.

    :markdown-it(html plugins ='markdown-it-multimd-table'])
    | This is | the table | header row |
    | ------  | --------- | ---------- |
    | 1       | 2         | 3          |
    | 4       | 5         | 6          |

    [Table 1: Caption goes here.]

    :markdown-it(html)
        And when you're done, go back to the regular markdown filter.                             

More detailed examples are provided on our `Sample page <https://igembitsgoa.github.io/wiki-starter-demo/Sample/>`_  of the template (`code <https://github.com/igembitsgoa/igem-wiki-starter/blob/master/src/src/pages/Sample.pug>`_).

---------
Citations
---------

The Starter Pack makes adding citations really easy with a custom ``.yml`` file. 

If the article you want to cite has a DOI, the Starter Pack can directly pull data from the CrossRef database from the DOI, and you don't need to include anything else.

If it's an article without a DOI, a webpage, or a book, you will have to include all elements of the citation.

Citations for ``pages/Description.pug`` go in ``citations/Description.yml``. This is illustrated in the `Sample citations file <https://github.com/igembitsgoa/igem-wiki-starter/blob/master/src/src/citations/Sample.yml>`_. The rendered citations can be seen on the `Sample page <https://igembitsgoa.github.io/wiki-starter-demo/Sample/>`_.

A couple of things to keep in mind: 

1. Each citation must be numbered with a comment preceding the citation. 
2. The citation type must be specified, and must be one of ``doi``, ``article``, ``webpage`` and ``book``. 
3. The line specifying the citation type must begin with a hyphen (``-``). 
4. Indentation is important. 
5. Strings must be entered within double quotes.

Articles with a DOI
-------------------

Given that the material you’re citing has a DOI, making a citation is extremely simple. All you need is the DOI and the in-text citation. Everything else just works.

.. code-block:: pug

    # 1
    - doi: https://doi.org/10.1007/s00484-015-1117-4

A couple of things to keep in mind:

1. The citations extractor is based on the CrossRef API, so if CrossRef doesn’t have the right data parsed, it won’t work. Please deploy it to your own Github account and verify that the citations look right before sending a pull request.

2. You can use `CrossRef Metadata Search <https://search.crossref.org/>`_ and `zbib <https://zbib.org/>`_ for finding DOI’s and cross-checking.

Articles without a DOI
----------------------

Some old articles might not have a DOI. In this case, you will have to use `zbib <https://zbib.org/>`_ or the like to get citation entries in **APA format** and manually enter them.

.. code-block:: pug

    # 2
    - article:
        authors: "Allen, M. J., & Sheridan, S. C."    
        year_published: 2015
        title: "Mortality risks during extreme temperature events (ETEs) using a distributed lag non-linear model."
        journal: "International Journal of Biometeorology"    
        numbers: "62(1), 57-67."


A few things to keep in mind here: 

1. All the fields shown above are mandatory. 
2. Citations must follow the APA format. 
3. Indentation is important. 
4. Strings must be entered within double quotes.

Citing Websites
---------------

Unfortunately, it is not possible to pull citation data for websites at the moment. It needs to be entered manually as described here. You can use `zbib <https://zbib.org/>`_ or the like to get citation entries in **APA format**.

.. code-block:: pug

    # 3
    - webpage:
        published: "March 15, 2019"
        authors: "Pranav Ballaney"
        title: "Agriculture: Crop production: Sugarcane. 
        accessed: "June 22, 2020"
        site_name: "TNAU Agritech Portal"
        url: 'https://google.com'

A few things to keep in mind here:

1. `published` and `authors` can be left out but all others are mandatory.
2. Citations must follow the APA format.
3. Indentation is important.
4. Strings must be entered within double quotes.

Citing Books
------------

If your book doesn’t have a DOI, it is not possible to pull citation data automatically. It needs to be entered manually as described here. You can use `zbib <https://zbib.org/>`_ or the like to get citation entries in **APA format**.

.. code-block:: pug

    # 4
    - book:
        authors: "Ingalls, B. P."
        year_published: 2013
        title: "Mathematical modeling in systems biology: An introduction."
        publisher: "MIT Press"
        Google_Books_URL: "https://books.google.co.in/books?id=OYr6AQAAQBAJ"


A few things to keep in mind here:

1. ``Google_Books_URL`` can be left out but all others are mandatory.
2. Citations must follow the APA format.
3. Indentation is important.
4. Strings must be entered within double quotes.

In-text Citations
-----------------

In-text citations work just like links, but are formatted differently automatically. Take a look at `Sample.pug <https://github.com/igembitsgoa/igem-wiki-starter/blob/master/src/src/pages/Sample.pug>`_ and `the published page <https://igembitsgoa.github.io/wiki-starter-demo/Sample/>`_ to get an idea of how this works.

.. code-block::

    :markdown-it(html)
       
        In text citation for a research article with a DOI. [Rosano et al., 2019](#citation1)

        In text citation for another research article with a DOI. [Allen & Sheridan, 2015](#citation2)

        In text citation for a book with no DOI. [Ingalls, 2013](#citation3)

        In text citation for a website with institutional author. [TNAU Agritech Portal, n.d.](#citation4)

        In text citation for a website with an author. [Pranav, n.d.](#citation5)

Notice the hashtag in-text citations, along with the number. The number provided here has to correspond to the full citation in the yml file, otherwise links will break.

All citations are written in the APA format. You can read more about it `here <https://guides.libraries.psu.edu/apaquickguide/intext>`_.
