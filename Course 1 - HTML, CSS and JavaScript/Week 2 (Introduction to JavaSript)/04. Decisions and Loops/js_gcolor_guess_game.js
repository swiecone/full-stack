var target;
var guess_input_color;
var guess_input;
var finished = false;
var guesses = 0;

function do_game() {
	var color_array = ["Black", "Blue", "Brown", "Cyan", "DarkOrange", "DeepPink", "Gold", "Olive", "Pink", "White", "Yellow"];
	//alert("This are all the colors:" + color_array);
	var random_color = Math.random() * color_array.length;
	var random_color_integer = Math.floor(random_color);
	var target = color_array[random_color_integer];
	
	//this is to present the colors in the prompt
	alert("The color answer is: "+ target);
	
	guess_input_color = prompt("I am thinking in one of the following colors:\n\n "+ color_array+"\n\nWhich color am I thinking of? ");
	console.log(guess_input_color);


	while (!finished) {
		guess_input_color = prompt("I am thinking in one of the following colors:\n\n "+ color_array+"\n\nWhich color am I thinking of? ");
		console.log(guess_input_color);
		guesses += 1;
		finished = check_guess();
	}

function check_guess() {
	// if(isNaN(guess_input)) {
	// 	alert("You have not entered a number.\n\n" + 
	// 		"Please enter a number in the range of 1 to 100");
	// 	return false;
	// }

	// if ((guess_input < 1) || (guess_input > 100)) {
	// 	alert("Please enter an integer number in the range of 1 to 100.");
	// 	return false;
	// }
	if (guess_input_color.localeCompare(target) > 0) {
		alert("Your guess color higher in alphabetical order!");
		return false;
	}
	if (guess_input_color.localeCompare(target) < 0) {
		alert("our guess color lower in alphabetical order!");
		return false;
	}
	alert("You got it! The color is "+target+
		".\n\nIt took you "+guesses+
		" to get the number.");
	return true;
	}
}


