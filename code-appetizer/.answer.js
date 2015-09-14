var submitButton = document.getElementById("submit-button");


function changeText(){
  var input = document.getElementById("input-field")
  var foo = document.getElementById("foo")
  foo.innerText = input.value
  input.value = ""

  // Bonus
  foo.style.background = nextColor(foo.style.background);

}

function nextColor(currentColor) {
  if(!currentColor || currentColor == "orange"){
    return "red";
  } else if (currentColor == "red"){
    return "blue";
  } else if (currentColor == "blue"){
    return "orange";
  }
}



submitButton.addEventListener("click", changeText);
