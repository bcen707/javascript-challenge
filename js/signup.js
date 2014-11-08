/*
Billy Cen
INFO 343
Assignment 4
Signup Form Script
This script will load the state select list and validate the form before submission
*/

"use strict";

// Load the states for form
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

// Allows user to enter a different occupation if their's does not fit the 
// given options	
function hideShowOccup() {
	var occup = document.getElementsByName("occupationOther")[0];
	if (occupation.value != "other") {
		occup.style.display = "none";
		occup.value = '';
	} else { 
		occup.style.display = "inline";
	}	
}

// Executes when user presses 'No Thanks'. Prompts user if they want to leave.
// If so, takes them to the Google homepage.
function leavePage() {
	var exit = window.confirm("Are you sure you want to leave this amazing site?")
	if (exit == true) {
		window.location = 'http://google.com';
	}
}


function zipValidation(field, form) {
	var zipRegExp = new RegExp('^\\d{5}$');
	var zipCode = document.getElementsByName("zip")[0].value;
	if (zipRegExp.test(zipCode)) {
		form[field].className = 'form-control';
		return true;
	} else {
		form[field].className = 'invalid-field form-control';
		return false;
	}
}

function checkRequiredFields(field, form) {
	if (form[field].value.trim().length == 0 {
		form[field].className = 'invalid-field form-control';
		return false;
	} else {
		form[field].className = 'form-control';
		return true;
	}
}

function formValidation(form) {
	var requiredFields = ['firstName', 'lastName', 'address1', 'city', 'state', 'zip', 'birthdate'];
	var isValid = true;

	for (var index = 0; index < requiredFields.length - 2; index++) {
		isValid &= checkRequiredFields(requiredFields[index], form);
	}
	isValid &= zipValidation(requiredFields[5], form);
	isValid &= zipValidation(requiredFields[6], form);

	if (occupation.value == "other") {
		isValid &= checkRequiredFields("occupationOther", form);
	}
}





// function validateBirth()

// function onSubmit()










document.addEventListener("DOMContentLoaded", function() {
	loadStates();
	occupation.addEventListener('change', hideShowOccup);
	cancelButton.addEventListener('click', leavePage);
	
	var myForm = document.getElementById("signup");
	// myForm.addEventListener('submit', onSubmit);
});


