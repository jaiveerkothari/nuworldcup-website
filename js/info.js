var showMainList = function() {
	$(".ul-2").slideDown();
};

var showWCFix = function() {
	$("#wc-fix-list").slideDown();
}

var showWWCFix = function() {
	$("#wwc-fix-list").slideDown();
}

var hideMainList = function() {
	$(".ul-2").slideUp();
}

var hideWCFix = function() {
	$("#wc-fix-list").slideUp();
}

var hideWWCFix = function() {
	$("#wwc-fix-list").slideUp();
}

var fixtures = new Waypoint({
	element: document.getElementById('fixtures'),
	handler: function(direction) {
		if (direction == "down") {
			showMainList();
		}
	}
})

var wcfixtures = new Waypoint({
  element: document.getElementById('wc-fixtures'),
  handler: function(direction) {
    if (direction == "down") {
    	showWCFix();
    } else if (direction == "up") {
    	hideWCFix();
    }
  }
});

var wwcfixtures = new Waypoint({
  element: document.getElementById('wwc-fixtures'),
  handler: function(direction) {
    if (direction == "down") {
    	showWWCFix();
    } else if (direction == "up") {
    	hideWWCFix();
    }
  }
});

var field1 = "Field 1";
var field2 = "Field 2";
var field3 = "Field 3";
var field4 = "Field 4";
var field5 = "Field 5";
var field6 = "Field 6";
var field7 = "Field 7";
var field8 = "Field 8";
var field9 = "Field 9";


// Points for the Group Stage
var points = 	[
					["#group-a", "Group A",
						["Costa Rica", "cr", "-"],
						["Sweden", "se", "-"],
						["China", "cn", "-"],
						["Djibouti", "dj", "-"], "group-a"],
					["#group-b", "Group B",
						["Iran", "ir", "-"],
						["Turkey", "tr", "-"],
						["Argentina", "ar", "-"],
						["Denmark", "dk", "-"], "group-b"],
					["#group-c", "Group C",
						["Yemen", "ye", "-"],
						["Bahamas", "bs", "-"],
						["Cyprus", "cy", "-"],
						["Colombia", "co", "-"], "group-c"],
					["#group-d", "Group D",
						["Iceland", "is", "-"],
						["Lebanon", "lb", "-"],
						["Israel", "il", "-"],
						["Ctr. African Rep.", "cf", "-"], "group-d"],
					["#group-e", "Group E",
						["Mexico", "mx", "-"],
						["Sao Tome", "st", "-"],
						["Guam", "gu", "-"],
						["South Korea", "kr", "-"], "group-e"],
					["#group-f", "Group F",
						["Fiji", "fj", "-"],
						["United States", "us", "-"],
						["Somalia", "so", "-"],
						["Spain", "es", "-"], "group-f"],
					["#group-g", "Group G",
						["India", "in", "-"],
						["Kenya", "ky", "-"],
						["Poland", "pl", "-"],
						["Mongolia", "mn", "-"], "group-g"],
					["#group-h", "Group H",
						["Cameroon", "cm", "-"],
						["Portugal", "pt", "-"],
						["Italy", "it", "-"],
						["Croatia", "hr", "-"], "group-h"],
					["#group-i", "Group I",
				    ["Nigeria", "ng", "-"],
						["Ireland", "ie", "-"],
						["England", "gb-eng", "-"],
						["Hong Kong", "hk", "-"], "group-i"],
					["#group-j", "Group J",
						["Belgium", "be", "-"],
						["Cuba", "cu", "-"],
						["Vietnam", "vn", "-"],
						["Chad", "td", "-"], "group-j"]
				];

var pointsw = [
					["#group-a-w", "Group 1",
						["Switzerland", "ch", "-"],
						["Ireland", "ie", "-"],
						["Denmark", "dk", "-"],
						["Iceland", "is", "-"], "group-a-w"],
					["#group-b-w", "Group 2",
						["Djibouti", "dj", "-"],
						["Norway", "no", "-"],
						["Argentina", "ar", "-"],
						["United States", "us", "-"], "group-b-w"]
				];

// Fixtures: Results of the games
var groups = 	[
					["#group-a-f",
						[field1, "April 21, 5:00 PM", "Costa Rica", "cr", "China", "cn", "- : -"],
						[field2, "April 21, 5:00 PM", "Sweden", "se", "Djibouti", "dj", "- : -"],
						[field1, "April 21, 8:45 PM", "Costa Rica", "cr", "Sweden", "se", "- : -"],
						[field2, "April 21, 8:45 PM", "China", "cn", "Djibouti", "dj", "- : -"],
						[field7, "April 22, 10:30 AM", "Costa Rica", "cr", "Djibouti", "dj", "- : -"],
						[field8, "April 22, 10:30 AM", "Sweden", "se", "China", "cn", "- : -"]],
					["#group-b-f",
						[field3, "April 21, 5:00 PM", "Iran", "ir", "Argentina", "ar", "- : -"],
						[field4, "April 21, 5:00 PM", "Turkey", "tr", "Denmark", "dk", "- : -"],
						[field3, "April 21, 8:45 PM", "Iran", "ir", "Turkey", "tr", "- : -"],
						[field1, "April 21, 9:30 PM", "Argentina", "ar", "Denmark", "dk", "- : -"],
						[field9, "April 22, 10:30 AM", "Iran", "ir", "Denmark", "dk", "- : -"],
						[field4, "April 22, 11:15 AM", "Turkey", "tr", "Argentina", "ar", "- : -"]],
					["#group-c-f",
						[field5, "April 21, 5:00 PM", "Yemen", "ye", "Cyprus", "cy", "- : -"],
						[field6, "April 21, 5:00 PM", "Bahamas", "bs", "Colombia", "co", "- : -"],
						[field2, "April 21, 9:30 PM", "Yemen", "ye", "Bahamas", "bs", "- : -"],
						[field3, "April 21, 9:30 PM", "Cyprus", "cy", "Colombia", "co", "- : -"],
						[field5, "April 22, 11:15 AM", "Yemen", "ye", "Colombia", "co", "- : -"],
						[field6, "April 22, 11:15 AM", "Bahamas", "bs", "Cyprus", "cy", "- : -"]],
					["#group-d-f",
						[field1, "April 21, 5:45 PM", "Iceland", "is", "Israel", "il", "- : -"],
						[field2, "April 21, 5:45 PM", "Lebanon", "lb", "Ctr. African Rep.", "cf", "- : -"],
						[field1, "April 21, 10:15 PM", "Iceland", "is", "Lebanon", "lb", "- : -"],
						[field2, "April 21, 10:15 PM", "Israel", "il", "Ctr. African Rep.", "cf", "- : -"],
						[field7, "April 22, 11:15 AM", "Iceland", "is", "Ctr. African Rep.", "cf", "- : -"],
						[field8, "April 22, 11:15 AM", "Lebanon", "lb", "Israel", "il", "- : -"]],
					["#group-e-f",
						[field3, "April 21, 5:45 PM", "Mexico", "mx", "Guam", "gu", "- : -"],
						[field4, "April 21, 5:45 PM", "Sao Tome", "st", "South Korea", "kr", "- : -"],
						[field3, "April 21, 10:15 PM", "Mexico", "mx", "Sao Tome", "st", "- : -"],
						[field4, "April 22, 9:00 AM", "Guam", "gu", "South Korea", "kr", "- : -"],
						[field9, "April 22, 11:15 AM", "Mexico", "mx", "South Korea", "kr", "- : -"],
						[field7, "April 22, 12:15 PM", "Sao Tome", "st", "Guam", "gu", "- : -"]],
					["#group-f-f",
						[field5, "April 21, 5:45 PM", "United States", "us", "Spain", "es", "- : -"],
						[field6, "April 21, 5:45 PM", "Fiji", "fj", "Somalia", "so", "- : -"],
						[field5, "April 22, 9:00 AM", "Fiji", "fj", "United States", "us", "- : -"],
						[field6, "April 22, 9:00 AM", "Somalia", "so", "Spain", "es", "- : -"],
						[field8, "April 22, 12:15 PM", "Fiji", "fj", "Spain", "es", "- : -"],
						[field9, "April 22, 12:15 PM", "United States", "us", "Somalia", "so", "- : -"]],
					["#group-g-f",
						[field1, "April 21, 6:30 PM", "India", "in", "Poland", "pl", "- : -"],
						[field2, "April 21, 6:30 PM", "Kenya", "ky", "Mongolia", "mn", "- : -"],
						[field7, "April 22, 9:00 AM", "India", "in", "Kenya", "ky", "- : -"],
						[field8, "April 22, 9:00 AM", "Poland", "pl", "Mongolia", "mn", "- : -"],
						[field4, "April 22, 12:15 PM", "India", "in", "Mongolia", "mn", "- : -"],
						[field5, "April 22, 12:15 PM", "Kenya", "ky", "Poland", "pl", "- : -"]],
					["#group-h-f",
						[field3, "April 21, 6:30 PM", "Cameroon", "cm", "Italy", "it", "- : -"],
						[field4, "April 21, 6:30 PM", "Portugal", "pt", "Croatia", "hr", "- : -"],
						[field9, "April 22, 9:00 AM", "Cameroon", "cm", "Portugal", "pt", "- : -"],
						[field5, "April 22, 9:45 AM", "Italy", "it", "Croatia", "hr", "- : -"],
						[field6, "April 22, 12:15 PM", "Cameroon", "cm", "Croatia", "hr", "- : -"],
						[field6, "April 22, 1:00 PM", "Portugal", "pt", "Italy", "it", "- : -"]],
					["#group-i-f",
						[field5, "April 21, 6:30 PM", "Nigeria", "ng", "England", "gb-eng", "- : -"],
						[field6, "April 21, 6:30 PM", "Ireland", "ie", "Hong Kong", "hk", "- : -"],
						[field6, "April 22, 9:45 AM", "Nigeria", "ng", "Ireland", "ie", "- : -"],
						[field7, "April 22, 9:45 AM", "England", "gb-eng", "Hong Kong", "hk", "- : -"],
						[field7, "April 22, 1:00 PM", "Nigeria", "ng", "Hong Kong", "hk", "- : -"],
						[field8, "April 22, 1:00 PM", "Ireland", "ie", "England", "gb-eng", "- : -"]],
					["#group-j-f",
						[field1, "April 21, 7:15 PM", "Belgium", "be", "Vietnam", "vn", "- : -"],
						[field2, "April 21, 7:15 PM", "Cuba", "cu", "Chad", "td", "- : -"],
						[field8, "April 22, 9:45 AM", "Belgium", "be", "Cuba", "cu", "- : -"],
						[field9, "April 22, 9:45 AM", "Vietnam", "vn", "Chad", "td", "- : -"],
						[field4, "April 22, 1:00 PM", "Belgium", "be", "Chad", "td", "- : -"],
						[field5, "April 22, 1:00 PM", "Cuba", "cu", "Vietnam", "vn", "- : -"]],
					["#group-a-w-f",
						[field3, "April 21, 7:15 PM", "Switzerland", "ch", "Denmark", "dk", "- : -"],
						[field1, "April 21, 8:00 PM", "Ireland", "ie", "Iceland", "is", "- : -"],
						[field4, "April 22, 9:45 AM", "Switzerland", "ch", "Ireland", "ie", "- : -"],
						[field4, "April 22, 10:30 AM", "Denmark", "dk", "Iceland", "is", "- : -"],
						[field9, "April 22, 1:00 PM", "Switzerland", "ch", "Iceland", "is", "- : -"],
						[field4, "April 22, 1:45 PM", "Ireland", "ie", "Denmark", "dk", "- : -"]],
					["#group-b-w-f",
						[field2, "April 21, 8:00 PM", "Djibouti", "dj", "Argentina", "ar", "- : -"],
						[field3, "April 21, 8:00 PM", "Norway", "no", "United States", "us", "- : -"],
						[field5, "April 22, 10:30 AM", "Djibouti", "dj", "Norway", "no", "- : -"],
						[field6, "April 22, 10:30 AM", "Argentina", "ar", "United States", "us", "- : -"],
						[field5, "April 22, 1:45 PM", "Djibouti", "dj", "United States", "us", "- : -"],
						[field6, "April 22, 1:45 PM", "Norway", "no", "Argentina", "ar", "- : -"]]];


$(document).ready(function() {

// Fixtures for the group stage

	for (var i = 0; i < groups.length; i++) {
		for (var j = 1; j < groups[i].length; j++) {
			$(groups[i][0]).append("<div class=\"row fixture-row\"><div class=\"col-md-12\"><div class=\"col-md-2 col-xs-2 game-identifier\"><div class=\"row\"><div class=\"col-md-12\">" + groups[i][j][0] + "</div></div><div class=\"row\"><div class=\"col-md-12\">" + groups[i][j][1] + "</div></div></div><div class=\"col-md-4 col-xs-4 fixture-team\"><span class=\"flag-icon flag-icon-" + groups[i][j][3] + " flag-left\"></span>" + groups[i][j][2] + "</div><div class=\"col-md-2 col-xs-2 fixture-score\">" + groups[i][j][6] + "</div><div class=\"col-md-4 col-xs-4 fixture-team\">" + groups[i][j][4] + "<span class=\"flag-icon flag-icon-" + groups[i][j][5] + " flag-right\"></span></div></div></div>");
		}
	}


	for (var i = 0; i < points.length; i++) {
		$(points[i][0]).append("<div class=\"col-md-3 col-xs-6 table-responsive\"><table class=\"table table-striped\"><thead><tr><th class=\"table-head\">" + points[i][1] + "</th><th class=\"table-head points-head\">Pts</th></tr></thead><tbody id=\"tbody-" + points[i][6] + "\">");
		for (var j = 2; j < 6; j++) {
			$("#tbody-" + points[i][6]).append("<tr><td class=\"table-body\"><span class=\"flag-icon flag-icon-" + points[i][j][1] + "\"></span> " + points[i][j][0] + "</td><td class=\"points\">" + points[i][j][2] + "</td></tr>");
		}
		$(points[i][0]).append("</tbody></table></div>");
	}

	for (var i = 0; i < pointsw.length; i++) {
		$(pointsw[i][0]).append("<div class=\"col-md-3 col-xs-6 table-responsive\"><table class=\"table table-striped\"><thead><tr><th class=\"table-head\">" + pointsw[i][1] + "</th><th class=\"table-head points-head\">Pts</th></tr></thead><tbody id=\"tbody-" + pointsw[i][6] + "\">");
		for (var j = 2; j < 6; j++) {
			$("#tbody-" + pointsw[i][6]).append("<tr><td class=\"table-body\"><span class=\"flag-icon flag-icon-" + pointsw[i][j][1] + "\"></span> " + pointsw[i][j][0] + "</td><td class=\"points\">" + pointsw[i][j][2] + "</td></tr>");
		}
		$(pointsw[i][0]).append("</tbody></table></div>");
	}

});
