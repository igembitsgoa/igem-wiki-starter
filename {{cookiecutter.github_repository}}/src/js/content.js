import "../css/content.scss";
import "./main";

// format links
$('.content h1, .content h2').each(function () {
    var text = $(this).text();
    $(this).text(text + ' ');
    var id = text.trim().replace(/ /g, '');
    
    if ($(this).prop('tagName') == 'H2') {
        id = $(this).prevAll('h1:first').attr('id') + "-" + id;
    }
    
    $(this).attr('id', id);
    
    var height = $(this).height();
    var link = document.createElement('a');
    link.classList.add('anchor');
    $(link).attr('href', "#" + id);
    $(link).attr('aria-hidden', "true");
    $(this).prepend(link);

    // add to table of contents if h1
    if ($(this).prop('tagName') == 'H1') {
        var item = document.createElement('li');

        var icon = document.createElement('i');
        icon.classList.add("fas");
        icon.classList.add("fa-chevron-right");
        item.append(icon);
        
        var a = document.createElement('a');
        $(a).attr('href', '#' + id);
        $(a).text(text);

        item.append(a);

        $('#contents ul').append(item);
    }

});


// format in-text citations
$('.content a').each(function () {
    var link = $(this).prop('href');
    var matches = link.match('#citation(.*)')
    console.log(matches);
    if (matches) {
        $(this).addClass('citation');
        $(this).attr('id', 'intext' + matches[1]);
        var text = $(this).text();
        $(this).text('(' + text + ')');
    }
});

// format definitions
$('dfn').each(function () {
    var text = $(this).text();
    var matches = text.match('(.*)(~)(.*)');
    $(this).text(matches[1].trim());
    $(this).attr('title', matches[3].trim());
    $(this).attr('data-toggle', 'tooltip');

    $(this).tooltip();
});

$('#bg-attribution').tooltip();
