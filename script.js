/* Exercise 1: Wish list */
$(document).ready(function() {
	//Add item in text field to the list on button click
  $("button#add-to-list").on('click', function() {
  	var $item = $("#item").val();
  	addToList($item);
  	$("#item").val(""); //Clear text field
  	$("#item").focus(); //Cursor back to text field
  });
  //Listen for click event on the page
  $(document).on('click', '.pending', function() {
  	//Add item in text field to the list on button click
  	$("span.label.pending").on('click', function() {
  		parent_node = $(this).parent();
  		parent_node.addClass("completed");
		parent_node.remove();
  	});
  })

});

function addToList(item){
	//Takes in an element and appends it to the list in a li tag with the 'pending' label
	$("ol#items").append("<li>" + item + "<span class='label pending'>Pending</span>" + "</li>");
};
