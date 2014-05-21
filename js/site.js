/*jslint browser: true*/
window.jQuery(function ($) {
    'use strict';
    // Disable the campaign warning if the campaign has ended
    var campaignEnd = 'Thu Feb 06 2014 00:00:00 GMT-0800 (PST)';
    if (Date.now() >= new Date(campaignEnd).getTime()) {
        $('.campaign-alert').hide();
    }
    if ($.fn.qrcode !== undefined) {
        $('.doge-qrcode').qrcode($('.doge-qrcode').data('qrcode'));
    }
});

var sessionUser;
var sessionEmail;

$("#firebase-yes").change(function() {
	$(".remote-mentor").show();
	$('.firebase-mentor-details').show();
	$('#remote-mentor-no').remove();
	$('.firebase-mentor').hide();
})

$("#firebase-no").change(function() {
	$(".remote-mentor").show();
	$('.firebase-mentor').hide();
	$('#remote-mentor-yes').remove();
})

$("#intern-online-yes").change(function() {
	$(".remote-mentor-details").show();
	$(".internship-submit").show();
	$('.remote-mentor').hide();
})

$("#intern-online-no-yes").change(function() {
	$(".remote-mentor-details").show();
	$(".internship-submit").show();
	$('.remote-mentor').hide();
})

$("#intern-online-no").change(function() {
	$(".internship-submit").show();
	$('.remote-mentor').hide();
})

$("#intern-online-no-no").change(function() {
	$('.internship-online-question').hide();
})

$("#mobile-yes").change(function() {
	$('.mobile-mentor-details').show();
	$('.mobile-submit').show();
	$('.mobile-mentor').hide();
	if (sessionUser && sessionEmail) {
		$('.mobile-user-info').hide();
	}
})

$("#mobile-no").change(function() {
	$('.mobile-boolean-question').hide();
	// $('.mobile-mentor').hide();
})

$("#teacher-yes").change(function() {
	if (sessionUser && sessionEmail) {
		$('.teacher-boolean-question').hide();

		var TeacherMentor = Parse.Object.extend("TeacherMentor");
		var teacherMentor = new TeacherMentor();

		teacherMentor.set("name", sessionUser);
		teacherMentor.set("email", sessionEmail);
		teacherMentor.set("info", true);

		$("#summer-mentor-teacher-form").hide();
		 
		teacherMentor.save(null, {
		  success: function(mentor) {
		  	$('.teacher-mentor-success').show();
		    console.log('save successful');
		  },
		  error: function(mentor, error) {
		    console.log('Failed to create new object, with error code: ' + error.description);
		  }
		});
	} else {
		$('.teacher-mentor-details').show();
		$('.teacher-submit').show();
		$('.teacher-mentor').hide();
	}
})

$('.teacher-submit').click(function(e) {
	e.preventDefault();

	var teacherMentorName = $('#mentor-teacher-name-input').val();
	var teacherMentorEmail = $('#mentor-teacher-email-input').val();

	var TeacherMentor = Parse.Object.extend("TeacherMentor");
	var teacherMentor = new TeacherMentor();

	teacherMentor.set("name", teacherMentorName);
	teacherMentor.set("email", teacherMentorEmail);
	teacherMentor.set("info", true);

	$("#summer-mentor-teacher-form").hide();
		 
	teacherMentor.save(null, {
	  success: function(mentor) {
	  	$('.teacher-mentor-success').show();
	    console.log('save successful');
	  },
	  error: function(mentor, error) {
	    console.log('Failed to create new object, with error code: ' + error.description);
	  }
	});
})


$("#mobile-signup").click(function(e) {
	
	e.preventDefault();

	var mobileWeeks = [];
	var mobileDays = [];
	var mobileTimes = [];

	if (sessionUser) {
		var mobileMentorName = sessionUser;
	} else {
		var mobileMentorName = $('#mentor-mobile-name-input').val();
	}

	if (sessionEmail) {
		var mobileMentorEmail = sessionEmail;
	} else {
		var mobileMentorEmail = $('#mentor-mobile-email-input').val();
	}

	if ($('#mentor-mobile-week-first-input').is(':checked')) {
		var mobileWeekOne = $('#mentor-mobile-week-first-input').val();
		mobileWeeks.push(mobileWeekOne);
	}

	if ($('#mentor-mobile-week-second-input').is(':checked')) {
		var mobileWeekTwo = $('#mentor-mobile-week-second-input').val();
		mobileWeeks.push(mobileWeekTwo);
	}

	if ($('#mentor-mobile-week-third-input').is(':checked')) {
		var mobileWeekThree = $('#mentor-mobile-week-third-input').val();
		mobileWeeks.push(mobileWeekThree);
	}

	if ($('#mentor-mobile-week-fourth-input').is(':checked')) {
		var mobileWeekFour = $('#mentor-mobile-week-fourth-input').val();
		mobileWeeks.push(mobileWeekFour);
	}

	if ($('#mentor-mobile-week-fifth-input').is(':checked')) {
		var mobileWeekFive = $('#mentor-mobile-week-fifth-input').val();
		mobileWeeks.push(mobileWeekFive);
	}

	if ($('#mentor-mobile-week-sixth-input').is(':checked')) {
		var mobileWeekSix = $('#mentor-mobile-week-sixth-input').val();
		mobileWeeks.push(mobileWeekSix);
	}
	console.log(mobileWeeks);

	if ($('#mentor-mobile-day-monday-input').is(':checked')) {
		var monday = $('#mentor-mobile-day-monday-input').val();
		mobileDays.push(monday);
	}

	if ($('#mentor-mobile-day-tuesday-input').is(':checked')) {
		var tuesday = $('#mentor-mobile-day-tuesday-input').val();
		mobileDays.push(tuesday);
	}

	if ($('#mentor-mobile-day-wednesday-input').is(':checked')) {
		var wednesday = $('#mentor-mobile-day-wednesday-input').val();
		mobileDays.push(wednesday);
	}

	if ($('#mentor-mobile-day-thursday-input').is(':checked')) {
		var thursday = $('#mentor-mobile-day-thursday-input').val();
		mobileDays.push(thursday);
	}

	if ($('#mentor-mobile-day-friday-input').is(':checked')) {
		var friday = $('#mentor-mobile-day-friday-input').val();
		mobileDays.push(friday);
	}
	console.log(mobileDays);

	if ($('#mentor-mobile-time-1012-input').is(':checked')) {
		var mobile1012 = $('#mentor-mobile-time-1012-input').val();
		mobileTimes.push(mobile1012);
	}

	if ($('#mentor-mobile-time-13-input').is(':checked')) {
		var mobile13 = $('#mentor-mobile-time-13-input').val();
		mobileTimes.push(mobile13);
	}

	if ($('#mentor-mobile-time-24-input').is(':checked')) {
		var mobile24 = $('#mentor-mobile-time-24-input').val();
		mobileTimes.push(mobile24);
	}
	console.log(mobileTimes);	

	var MobileMentor = Parse.Object.extend("MobileMentor");
	var mobileMentor = new MobileMentor();

	mobileMentor.set("name", mobileMentorName);
	mobileMentor.set("email", mobileMentorEmail);
	mobileMentor.set("mobileWeeks", mobileWeeks);
	mobileMentor.set("mobileDays", mobileDays);
	mobileMentor.set("mobileTimes", mobileTimes);
	$("#summer-mentor-mobile-form").hide();
	 
	mobileMentor.save(null, {
	  success: function(mentor) {
	  	$('.mobile-mentor-success').show();
	    console.log('save successful');
	  },
	  error: function(mentor, error) {
	    console.log('Failed to create new object, with error code: ' + error.description);
	  }
	});

})

$("#summer-signup").click(function(e) {
	
	e.preventDefault();

	var fireTime = [];
	var internWeek = [];
	var internDays = [];
	var internTimes = [];
	

	var mentorName = $('#mentor-name-input').val();
	var mentorEmail = $('#mentor-email-input').val();

	if (mentorName) {
		sessionUser = mentorName;
	}

	if (mentorEmail) {
		sessionEmail = mentorEmail;
	}

	if ($('#mentor-firebase-time-AM-input').is(':checked')) {
		var mentorFireAM = $('#mentor-firebase-time-AM-input').val();
		fireTime.push(mentorFireAM);
	}

	if ($('#mentor-firebase-time-PM-input').is(':checked')) {
		var mentorFirePM = $('#mentor-firebase-time-PM-input').val();
		fireTime.push(mentorFirePM);
	}
	console.log(fireTime);

	if ($('#mentor-remote-week-first-input').is(':checked')) {
		var internWeekOne = $('#mentor-remote-week-first-input').val();
		internWeek.push(internWeekOne);
	}

	if ($('#mentor-remote-week-second-input').is(':checked')) {
		var internWeekTwo = $('#mentor-remote-week-second-input').val();
		internWeek.push(internWeekTwo);
	}

	if ($('#mentor-remote-week-third-input').is(':checked')) {
		var internWeekThree = $('#mentor-remote-week-third-input').val();
		internWeek.push(internWeekThree);
	}

	if ($('#mentor-remote-week-fourth-input').is(':checked')) {
		var internWeekFour = $('#mentor-remote-week-fourth-input').val();
		internWeek.push(internWeekFour);
	}
	console.log(internWeek);

	if ($('#mentor-remote-day-monday-input').is(':checked')) {
		var monday = $('#mentor-remote-day-monday-input').val();
		internDays.push(monday);
	}

	if ($('#mentor-remote-day-tuesday-input').is(':checked')) {
		var tuesday = $('#mentor-remote-day-tuesday-input').val();
		internDays.push(tuesday);
	}

	if ($('#mentor-remote-day-wednesday-input').is(':checked')) {
		var wednesday = $('#mentor-remote-day-wednesday-input').val();
		internDays.push(wednesday);
	}

	if ($('#mentor-remote-day-thursday-input').is(':checked')) {
		var thursday = $('#mentor-remote-day-thursday-input').val();
		internDays.push(thursday);
	}

	if ($('#mentor-remote-day-friday-input').is(':checked')) {
		var friday = $('#mentor-remote-day-friday-input').val();
		internDays.push(friday);
	}
	console.log(internDays);

	if ($('#mentor-remote-time-AM-input').is(':checked')) {
		var mentorRemoteAM = $('#mentor-remote-time-AM-input').val();
		internTimes.push(mentorRemoteAM);
	}

	if ($('#mentor-remote-time-PM-input').is(':checked')) {
		var mentorRemotePM = $('#mentor-remote-time-PM-input').val();
		internTimes.push(mentorRemotePM);
	}
	console.log(internTimes);

	var InternMentor = Parse.Object.extend("InternMentor");
	var internMentor = new InternMentor();

	internMentor.set("name", mentorName);
	internMentor.set("name", mentorEmail);
	internMentor.set("fireTimes", fireTime);
	internMentor.set("internWeeks", internWeek);
	internMentor.set("internDays", internDays);
	internMentor.set("internTimes", internTimes);
	$("#summer-mentor-intern-form").hide();
	 
	internMentor.save(null, {
	  success: function(mentor) {
	    console.log('save successful');
	    $('.intern-mentor-success').show();
	  },
	  error: function(mentor, error) {
	    console.log('Failed to create new object, with error code: ' + error.description);
	  }
	});

})

