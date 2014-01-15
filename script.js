/* Exercise 1: Wish list */

$(document).ready(function() {
  $("button#add-to-list").on('click', function() {
  	addToList("Build a website");
  })
});


function addToList(item){
	$("ol#items").append("<li>" + item + "</li>")
}

