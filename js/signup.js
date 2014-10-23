/*
	Billy Cen
	INFO 343
	Assignment 4
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict";


function loadStates() {

	var getStates = document.getElementById("state");
	for (var i = 0; i < usStates.length; i++) { 			  // Loop through state array
		var option = document.createElement("option"); 		  // Give each state a new option element
		option.value = usStates[i];
		var text = document.createTextNode(usStates[i]);
		option.appendChild(text);
		getStates.appendChild(option);
	
	}	
}

document.addEventListener("DOMContentLoaded", loadStates);



