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
		$('<span class="label success">Done!</span>').appendTo(parent_node);
		$(this).remove();
		updateTotal();
  	});
	$("span.label.success").on('click', function() {
		$(this).parent().remove();
		updateTotal();
	});
  })

});

function addToList(item){
	//Takes in an element and appends it to the list in a li tag with the 'pending' label
	$("ol#items").append("<li>" + item + "<span class='label pending'>Pending</span>" + "</li>");
	updateTotal();
};

function updateTotal() {
	//No arg, display the number of items pending or completed
	var pending = $("li span.label.pending").length;
	console.log('P: '+ pending);
	var completed = $("li span.label.success").length;
	console.log('C: ' + completed);
	$(".total").text("Pending: " + pending + " Completed: " + completed);
};
