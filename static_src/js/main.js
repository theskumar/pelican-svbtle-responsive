// header link functionality
$(function() {
  return $('.page-single article').find("h2, h3, h4, h5, h6").each(function(i, el) {
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
