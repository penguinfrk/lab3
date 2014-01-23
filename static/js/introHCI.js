'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Test Javascript again");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);


	$("#submitBtn").click(formClick);
}

function projectClick(e){
	//prevent the page from reloading
	console.log("Project clicked");
	e.preventDefault();

	$(this).css("background-color", "#7fff00");

	var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");

    if(description.length == 0){
    	containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		//description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
		description.fadeOut();
	}

}

function formClick(e){

	console.log("Form submission");
	e.preventDefault();

	var ProjectChoice = $("#project").val();
	var width = $("#width").val();

	$(ProjectChoice).animate({
		width: width
	});

	var descriptionText = $("#description").val();
	console.log(descriptionText);
	
	$(ProjectChoice + " .project-description").text(descriptionText);

}