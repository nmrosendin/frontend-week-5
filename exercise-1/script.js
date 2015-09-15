jQuery(function(){

$('article').hide();
$('#home').show();

var nav=$('a');
nav.click(function(){
var myid = $(this).attr("href");

$('article').hide();
$(myid).show();

$("nav a").removeClass("highlight");
$(this).addClass("highlight");

});



});