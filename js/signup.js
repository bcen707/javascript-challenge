/*
	Billy Cen
	INFO 343
	Assignment 4
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict";

document.addEventListener("click", DOMContentLoaded);

document.addEventListener("click", change);


function DOMContentLoaded {
	for (i = 0; i < usStates.length; i++) { 			  // Loop through state array
		var option = usStates[i].createElement("OPTION"); // Give each state a new option element
		var setElement = document.getElementById("option").appendChild(usStates[i]);
	}	
}

function change {

}





