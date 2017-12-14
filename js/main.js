$(document).ready(function(){
  $('nav a').click(function(){
    var idOfLink = $(this).attr('id');
    console.log(idOfLink);
    $('section').hide();
    $('#area-' + idOfLink).show();
  });
});
