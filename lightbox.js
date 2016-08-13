$('body').on('click', '.lightbox', function(e) {
  e.preventDefault();

  var video_href = $(this).attr("href");

  if ($('#lightbox').length > 0) {
    $('#content').html('<iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/' + video_href + '?showinfo=0&autoplay=1" frameborder="0"></iframe>')

    $('#lightbox').show();
  }
  else {
    var lightbox = 
    '<div id="lightbox">' + 
      '<div id="container">' + 
        '<p>Close X</p>' + 
        '<div class="sixteen-nine" id="content">' + 
          '<iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/' + video_href + '?showinfo=0&autoplay=1" frameborder="0" allowfullscreen=""></iframe>' + 
        '</div>' + 
      '</div>' + 
    '</div>';

    $('body').append(lightbox);
  }
});

$('body').on('click', '#lightbox', function() {
  $('#content').empty();
  $('#lightbox').hide();
});