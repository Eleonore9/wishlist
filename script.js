/* Exercise 1: Wish list */
$(document).ready(function() {
  $("button#add-to-list").on('click', function() {
  	$item = $("#item").val()
  	addToList($item);
  	$("#item").val("")
  	$("#item").focus()
  })
});


function addToList(item){
	$("ol#items").append("<li>" + item + "</li>")
}

