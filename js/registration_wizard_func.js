/*  Wizard */
jQuery(function ($) {
	"use strict";
	// $('form#wrapped').attr('action', 'https://hook.us2.make.com/glngc9ory3l96d9elvya9tbce8d4b9u2');

	$('form#wrapped').on('submit', function (event) {
		event.preventDefault(); // Prevent the default form submission
		// ... existing code ...
		$.ajax({
			url: 'https://hook.us2.make.com/glngc9ory3l96d9elvya9tbce8d4b9u2',
			type: 'POST',
			data: $(this).serialize(),
			success: function (response) {
				// Show success message
			$('body').append('<div id="success" style="text-align: center; margin-top: 20px; z-index: 100;">' +
				'<div class="icon icon--order-success svg">' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px" style="display: inline;">' +
				'<g fill="none" stroke="#8EC343" stroke-width="2">' +
				'<circle cx="36" cy="36" r="35" style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>' +
				'<path d="M17.417,37.778l9.93,9.909l25.444-25.393" style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>' +
				'</g>' +
				'</svg>' +
				'</div>' +
				'<h4><span>Request successfully sent!</span> Thank you for your time</h4>' +
				'<small>You will be redirected back in 5 seconds.</small>' +
				'</div>');

			$("#loader_form").fadeOut();
			
			setTimeout(function() {
				// window.location.href = '../index.html'; // Redirect after 5 seconds
				window.location.reload();
				
			}, 5000);
			},
			error: function () {
				// Handle error
				alert('There was an error submitting the form.');
			}
		});
	});
});


