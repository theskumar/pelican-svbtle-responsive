// header link functionality
$(function() {
    var gallery = $('.gallery p')
    gallery.find('img').each(function(){
        var el = $(this);
        el.wrap(function() {
            return "<a href='" + el.attr('src') + "'></a>";
        });
    });

    gallery.justifiedGallery({
        'rowHeight': 150
        , 'captions': false
        , 'lastRow': 'justify'
        , 'margins' : 5
        , 'maxRowHeight': -1
    }).on('jg.complete', function () {
        $(this).find('a').colorbox({
            maxWidth : '80%',
            maxHeight : '80%',
            opacity : 0.8,
            transition : 'elastic',
            current : '',
            rel:'group1'
        });
    });

    $('.page-single article').find("h2, h3, h4, h5, h6").each(function(i, el) {
        var $el, icon, id;
        $el = $(el);
        if($el.attr('id')){
            id = $el.attr('id');
        } else {
            id = $el.parent().attr('id');
        }
        if (id) {
          return $el.append($("<a />").addClass("header-link icon-link").attr("href", "#" + id).html(""));
        }
    });
});
