jQuery(function(){

  var addTodoItem = (function () {
    var count = 0;
    var todolist = $("#todolist");
    var item     = $("#item");

    function addTodoItemInner (event) {
      event.preventDefault(); // necessary to prevent the submitting of a form
      var li        = $("<li></li>");
      var label     = $("<label></label>");
      var checkbox  = $("<input type='checkbox'></input>");

      // Step 1
      li.attr("id", "item-" + count);
      count++;

      label.text(item.val());
      label.append(checkbox);

      li.append(label)

      // BONUS 2
      deleteButton = $("<button></button>");
      deleteButton.text("Delete");
      deleteButton.on("click", function(event){
        var btn =  this;
        var li = btn.closest("li");
        li.remove()
      })
      li.append(deleteButton);

      todolist.append(li);
      item.val("");

      checkbox.on("change", function(){
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
        $this = $(this)
        var li = $this.closest("li")
        console.log("hi")
        if($this.is(":checked")){
          li.addClass("done");
          console.log(li.attr("id")) // Step 3
        } else {
          li.removeClass("done")
        }
      })


      return false;
    }
    return addTodoItemInner;
  })();

  form = $("#the-form");
  form.on("submit", addTodoItem);

  // Step 2


  // BONUS 1

  function hideAllLis(){
    $("li").hide()
  }

  function showAllLis(){
    $("li").show()
  }

  $("#show-done-only").click(function(){
    hideAllLis();
    $("li.done").show();
  });

  $("#show-not-done-only").click(function(){
    showAllLis();
    $("li.done").hide();
  });

  $("#show-all").click(showAllLis);



})
