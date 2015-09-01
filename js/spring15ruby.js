
window.jQuery(function ($) {
    'use strict';
    $("#spring15-ruby-submit").on('click', function (e) {
			e.preventDefault();
			console.log('student button working');
			var firstName = $('#spring-student-first-name').val();
			var lastName = $('#spring-student-last-name').val();
			var email = $('#spring-student-email').val();
			var cell = $('#spring-student-cell').val();
			var school = $('#spring-student-school').val();
			var grade = $('#spring-student-grade').val();
			var gender = $('#spring-student-gender').val(); 
			var ethnicity = $('#spring-student-ethnicity').val();
			var comments = $('#spring-student-comments').val();

			var check = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$");
			var isEmail = check.test(email);

			if (!firstName) {
				$('#spring-firstName-error-box').show();
				$('#spring-student-first-name').addClass('spring15-input-error');
				$('#spring-student-first-name').removeClass('spring15-input-success');
			} else {
				$('#spring-firstName-error-box').hide();
				$('#spring-student-first-name').addClass('spring15-input-success');
				$('#spring-student-first-name').removeClass('spring15-input-error');
			}

			if (!lastName) {
				$('#spring-lastName-error-box').show();
				$('#spring-student-last-name').addClass('spring15-input-error');
				$('#spring-student-last-name').removeClass('spring15-input-success');
			} else {
				$('#spring-lastName-error-box').hide();
				$('#spring-student-last-name').addClass('spring15-input-success');
				$('#spring-student-last-name').removeClass('spring15-input-error');
			}

			if (!isEmail) {
				$('#spring-email-error-box').show();
				$('#spring-student-email').addClass('spring15-input-error');
				$('#spring-student-email').removeClass('spring15-input-success');
			} else {
				$('#spring-email-error-box').hide();
				$('#spring-student-email').addClass('spring15-input-success');
				$('#spring-student-email').removeClass('spring15-input-error');
			}

			if (school === "school") {
				$('#spring-school-error-box').show();
				$('#spring-student-school').addClass('spring15-input-error');
				$('#spring-student-school').removeClass('spring15-input-success');
			} else {
				$('#spring-school-error-box').hide();
				$('#spring-student-school').addClass('spring15-input-success');
				$('#spring-student-school').removeClass('spring15-input-error');
			}

			if (grade === "grade") {
				$('#spring-grade-error-box').show();
				$('#spring-student-grade').addClass('spring15-input-error');
				$('#spring-student-grade').removeClass('spring15-input-success');
			} else {
				$('#spring-grade-error-box').hide();
				$('#spring-student-grade').addClass('spring15-input-success');
				$('#spring-student-grade').removeClass('spring15-input-error');
			}

			if (gender === "gender") {
				$('#spring-gender-error-box').show();
				$('#spring-student-gender').addClass('spring15-input-error');
				$('#spring-student-gender').removeClass('spring15-input-success');
			} else {
				$('#spring-gender-error-box').hide();
				$('#spring-student-gender').addClass('spring15-input-success');
				$('#spring-student-gender').removeClass('spring15-input-error');
			}

			if (ethnicity === "ethnicity") {
				$('#spring-ethnicity-error-box').show();
				$('#spring-student-ethnicity').addClass('spring15-input-error');
				$('#spring-student-ethnicity').removeClass('spring15-input-success');
			} else {
				$('#spring-ethnicity-error-box').hide();
				$('#spring-student-ethnicity').addClass('spring15-input-success');
				$('#spring-student-ethnicity').removeClass('spring15-input-error');
			}

			if (!firstName || !lastName || !isEmail || school === "school" || grade === "grade" || gender === "gender" || ethnicity === "ethnicity") {
				$('#spring-submit-error-msg').show();
			} else {
				var Fall15Ruby = Parse.Object.extend("Fall15Ruby");
				var fall15Ruby = new Fall15Ruby();
				fall15Ruby.set("firstName", firstName);
				fall15Ruby.set("lastName", lastName);
				fall15Ruby.set("email", email);
				fall15Ruby.set("cell", cell);
				fall15Ruby.set("school", school);
				fall15Ruby.set("grade", grade);
				fall15Ruby.set("gender", gender);
				fall15Ruby.set("ethnicity", ethnicity);
				fall15Ruby.set("comments", comments);
				fall15Ruby.set("class", "ruby");

				fall15Ruby.save(null, {
				  success: function(student) {
				    console.log('save successful');
				    $('#lab-student-form').hide();
				    $('.spring-student-head-box').hide();
				    $('.spring-student-success-box').show();
				  },
				  error: function(student, error) {
				    console.log('Failed to create new object, with error code: ' + error.description);
				  }
				});
				$('#lab-student-form').hide();
			  $('.spring-student-head-box').hide();
			  $('.spring-student-success-box').show();
			}
		})
		$("#spring-student-first-name").on('focusout', function (e) {
			e.preventDefault();
			var firstName = $('#spring-student-first-name').val();
			if (!firstName) {
				$('#spring-student-first-name').addClass('spring15-input-error');
				$('#spring-student-first-name').removeClass('spring15-input-success');
			} else {
				$('#spring-firstName-error-box').hide();
				$('#spring-student-first-name').addClass('spring15-input-success');
				$('#spring-student-first-name').removeClass('spring15-input-error');
			}
		})
		$("#spring-student-last-name").on('focusout', function (e) {
			e.preventDefault();
			var lastName = $('#spring-student-last-name').val();
			if (!lastName) {
				$('#spring-student-last-name').addClass('spring15-input-error');
				$('#spring-student-last-name').removeClass('spring15-input-success');
			} else {
				$('#spring-lastName-error-box').hide();
				$('#spring-student-last-name').addClass('spring15-input-success');
				$('#spring-student-last-name').removeClass('spring15-input-error');
			}
		})
		$("#spring-student-email").on('focusout', function (e) {
			e.preventDefault();
			var email = $('#spring-student-email').val();
			var check = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$");
			var isEmail = check.test(email);
			if (!isEmail) {
				$('#spring-student-email').addClass('spring15-input-error');
				$('#spring-student-email').removeClass('spring15-input-success');
			} else {
				$('#spring-email-error-box').hide();
				$('#spring-student-email').addClass('spring15-input-success');
				$('#spring-student-email').removeClass('spring15-input-error');
			}
		})
		$("#spring-student-school").on('focusout', function (e) {
			e.preventDefault();
			var school = $('#spring-student-school').val();
			if (school === "school") {
				$('#spring-student-school').addClass('spring15-input-error');
				$('#spring-student-school').removeClass('spring15-input-success');
			} else {
				$('#spring-school-error-box').hide();
				$('#spring-student-school').addClass('spring15-input-success');
				$('#spring-student-school').removeClass('spring15-input-error');
			}
		})
		$("#spring-student-grade").on('focusout', function (e) {
			e.preventDefault();
			var grade = $('#spring-student-grade').val();
			if (grade === "grade") {
				$('#spring-student-grade').addClass('spring15-input-error');
				$('#spring-student-grade').removeClass('spring15-input-success');
			} else {
				$('#spring-grade-error-box').hide();
				$('#spring-student-grade').addClass('spring15-input-success');
				$('#spring-student-grade').removeClass('spring15-input-error');
			}
		})
		$("#spring-student-gender").on('focusout', function (e) {
			e.preventDefault();
			var gender = $('#spring-student-gender').val();
			if (gender === "gender") {
				$('#spring-student-gender').addClass('spring15-input-error');
				$('#spring-student-gender').removeClass('spring15-input-success');
			} else {
				$('#spring-gender-error-box').hide();
				$('#spring-student-gender').addClass('spring15-input-success');
				$('#spring-student-gender').removeClass('spring15-input-error');
			}
		})
		$("#spring-student-ethnicity").on('focusout', function (e) {
			e.preventDefault();
			var ethnicity = $('#spring-student-ethnicity').val();
			if (ethnicity === "ethnicity") {
				$('#spring-student-ethnicity').addClass('spring15-input-error');
				$('#spring-student-ethnicity').removeClass('spring15-input-success');
			} else {
				$('#spring-ethnicity-error-box').hide();
				$('#spring-student-ethnicity').addClass('spring15-input-success');
				$('#spring-student-ethnicity').removeClass('spring15-input-error');
			}
		})
		$("#spring-student-comments").focus(function() {
		    var $this = $(this);
		    $this.select();
		    // $this.mouseup(function() {
		    //     $this.unbind("mouseup");
		    //     return false;
		    // });
		});
  })
