/*
	Billy Cen
	INFO 343
	Assignment 4
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict";


function loadStates() {
	var getStates = document.getElementsByName("state")[0]; // Accesses the us-states array
	
	for (var i = 0; i < usStates.length; i++) { 			  // Loop through state array
		var option = document.createElement("option");
		option.value = usStates[i].code;
		var text = document.createTextNode(usStates[i].name);
		option.appendChild(text);
		getStates.appendChild(option);
	}

		
}

	
function hideShowOccup() {
	var occup = document.getElementsByName("occupationOther")[0];
	if (occupation.value != "other") {
		occup.style.display = "none";
		occup.value = '';
	} else { 
		occup.style.display = "inline";
	}	

}

function leavePage() {
	var exit = window.confirm("Are you sure you want to leave this amazing site?")
	if (exit == true) {
		window.location = 'http://google.com';
	}
}

document.addEventListener("DOMContentLoaded", function() {
	loadStates();
	occupation.addEventListener('change', hideShowOccup);
	cancelButton.addEventListener('click', leavePage);
});


		var myForm = document.getElementById("signup");
		// myForm.addEventListener('submit', onSubmit);


