jQuery(function(){
  $("nav a").click(function(e){
    e.preventDefault()
    var id = $(this).attr("href")
    $("article").hide()
    $(id).fadeIn() // or $(id).show()
    $("nav a").removeClass("highlight")
    $(this).addClass("highlight")
  })
});

