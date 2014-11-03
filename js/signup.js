/*
	Billy Cen
	INFO 343
	Assignment 4
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict";


function loadStates() {

	var getStates = document.getElementsByName("state"); // Accesses the us-states array
	for (var i = 0; i < getStates.length; i++) { 			  // Loop through state array
		var option = document.createElement("option");
		option.value = getStates[i].code;
		var text = document.createTextNode(getStates[i].name);
		option.appendChild(text);
		getStates.appendChild(option);
	}
		//var elem = document.getElementById(getStates[i].code) 

		var myForm = document.getElementById("signup");
		// myForm.addEventListener('submit', onSubmit);
}

document.addEventListener("DOMContentLoaded", loadStates);
	
	document.write('code reached here');


