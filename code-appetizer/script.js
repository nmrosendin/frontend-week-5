var button = document.getElementById("button");
button.addEventListener("click", function(){
var enteredtext = document.getElementById("text").value;

var foo = document.getElementById("foo");
foo.innerText = enteredtext;  
console.log(foo);
});