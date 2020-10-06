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

``extends ../templates/contents.pug
    As described above, this just says that ``Sample.pug`` is based on the ``contents.pug`` template.

``block headVars``
    This section contains the title of the page, a summary and a variable which denotes whether MathJax is required on this page or not.You can change these variables and use them as you like in ``contents.pug``.

``block article``
    This is the main body of the page, where all the content lives. The structure of this section follows markdown syntax, which has been described in the next section.

``//- DO NOT MODIFY THIS LINE AND ANYTHING BEYOND.``
``prepend citations``
    This section will contain citations taken from the ``citations/`` folder. This is described later and can be ignored for now. Everything you add manually in this section will be overwritten with citations. If you create any custom elements, make sure they're above the ``DO NOT MODIFY`` line.

