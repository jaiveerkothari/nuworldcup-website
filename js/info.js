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
						["Costa Rica", "cr", "9"],
						["Sweden", "se", "6"],
						["China", "cn", "3"],
						["Djibouti", "dj", "0"], "group-a"],
					["#group-b", "Group B",
						["Iran", "ir", "7"],
						["Turkey", "tr", "7"],
						["Argentina", "ar", "0"],
						["Denmark", "dk", "3"], "group-b"],
					["#group-c", "Group C",
						["Yemen", "ye", "9"],
						["Bahamas", "bs", "3"],
						["Cyprus", "cy", "6"],
						["Colombia", "co", "0"], "group-c"],
					["#group-d", "Group D",
						["Iceland", "is", "7"],
						["Lebanon", "lb", "5"],
						["Israel", "il", "3"],
						["Ctr. African Rep.", "cf", "1"], "group-d"],
					["#group-e", "Group E",
						["Mexico", "mx", "9"],
						["Sao Tome", "st", "6"],
						["Guam", "gu", "1"],
						["South Korea", "kr", "1"], "group-e"],
					["#group-f", "Group F",
						["Fiji", "fj", "7"],
						["United States", "us", "7"],
						["Somalia", "so", "0"],
						["Spain", "es", "3"], "group-f"],
					["#group-g", "Group G",
						["India", "in", "9"],
						["Kenya", "ky", "1"],
						["Poland", "pl", "6"],
						["Mongolia", "mn", "1"], "group-g"],
					["#group-h", "Group H",
						["Cameroon", "cm", "7"],
						["Portugal", "pt", "3"],
						["Italy", "it", "0"],
						["Croatia", "hr", "7"], "group-h"],
					["#group-i", "Group I",
				    ["Nigeria", "ng", "9"],
						["Ireland", "ie", "1"],
						["England", "gb-eng", "1"],
						["Hong Kong", "hk", "6"], "group-i"],
					["#group-j", "Group J",
						["Belgium", "be", "6"],
						["Cuba", "cu", "9"],
						["Vietnam", "vn", "1"],
						["Chad", "td", "1"], "group-j"]
				];

var pointsw = [
					["#group-a-w", "Group 1",
						["Switzerland", "ch", "4"],
						["Ireland", "ie", "4"],
						["Denmark", "dk", "1"],
						["Iceland", "is", "4"], "group-a-w"],
					["#group-b-w", "Group 2",
						["Djibouti", "dj", "4"],
						["Norway", "no", "4"],
						["Argentina", "ar", "0"],
						["United States", "us", "3"], "group-b-w"]
				];

// Fixtures: Results of the games
var groups = 	[
					["#group-a-f",
						[field1, "April 21, 5:00 PM", "Costa Rica", "cr", "China", "cn", "4 : 0"],
						[field2, "April 21, 5:00 PM", "Sweden", "se", "Djibouti", "dj", "8 : 0"],
						[field1, "April 21, 8:45 PM", "Costa Rica", "cr", "Sweden", "se", "2 : 0"],
						[field2, "April 21, 8:45 PM", "China", "cn", "Djibouti", "dj", "10 : 0"],
						[field7, "April 22, 10:30 AM", "Costa Rica", "cr", "Djibouti", "dj", "5 : 0"],
						[field8, "April 22, 10:30 AM", "Sweden", "se", "China", "cn", "4 : 1"]],
					["#group-b-f",
						[field3, "April 21, 5:00 PM", "Iran", "ir", "Argentina", "ar", "10 : 0"],
						[field4, "April 21, 5:00 PM", "Turkey", "tr", "Denmark", "dk", "3 : 0"],
						[field3, "April 21, 8:45 PM", "Iran", "ir", "Turkey", "tr", "1 : 1"],
						[field1, "April 21, 9:30 PM", "Argentina", "ar", "Denmark", "dk", "0 : 10"],
						[field9, "April 22, 10:30 AM", "Iran", "ir", "Denmark", "dk", "4 : 1"],
						[field4, "April 22, 11:15 AM", "Turkey", "tr", "Argentina", "ar", "10 : 0"]],
					["#group-c-f",
						[field5, "April 21, 5:00 PM", "Yemen", "ye", "Cyprus", "cy", "7 : 0"],
						[field6, "April 21, 5:00 PM", "Bahamas", "bs", "Colombia", "co", "4 : 0"],
						[field2, "April 21, 9:30 PM", "Yemen", "ye", "Bahamas", "bs", "4 : 0"],
						[field3, "April 21, 9:30 PM", "Cyprus", "cy", "Colombia", "co", "5 : 0"],
						[field5, "April 22, 11:15 AM", "Yemen", "ye", "Colombia", "co", "8 : 1"],
						[field6, "April 22, 11:15 AM", "Bahamas", "bs", "Cyprus", "cy", "0 : 3"]],
					["#group-d-f",
						[field1, "April 21, 5:45 PM", "Iceland", "is", "Israel", "il", "2 : 1"],
						[field2, "April 21, 5:45 PM", "Lebanon", "lb", "Ctr. African Rep.", "cf", "0 : 0"],
						[field1, "April 21, 10:15 PM", "Iceland", "is", "Lebanon", "lb", "2 : 2"],
						[field2, "April 21, 10:15 PM", "Israel", "il", "Ctr. African Rep.", "cf", "6 : 0"],
						[field7, "April 22, 11:15 AM", "Iceland", "is", "Ctr. African Rep.", "cf", "8 : 0"],
						[field8, "April 22, 11:15 AM", "Lebanon", "lb", "Israel", "il", "2 : 0"]],
					["#group-e-f",
						[field3, "April 21, 5:45 PM", "Mexico", "mx", "Guam", "gu", "2 : 0"],
						[field4, "April 21, 5:45 PM", "Sao Tome", "st", "South Korea", "kr", "4 : 1"],
						[field3, "April 21, 10:15 PM", "Mexico", "mx", "Sao Tome", "st", "7 : 0"],
						[field4, "April 22, 9:00 AM", "Guam", "gu", "South Korea", "kr", "0 : 0"],
						[field9, "April 22, 11:15 AM", "Mexico", "mx", "South Korea", "kr", "2 : 0"],
						[field7, "April 22, 12:15 PM", "Sao Tome", "st", "Guam", "gu", "- : -"]],
					["#group-f-f",
						[field5, "April 21, 5:45 PM", "United States", "us", "Spain", "es", "2 : 0"],
						[field6, "April 21, 5:45 PM", "Fiji", "fj", "Somalia", "so", "10 : 1"],
						[field5, "April 22, 9:00 AM", "Fiji", "fj", "United States", "us", "1 : 1"],
						[field6, "April 22, 9:00 AM", "Somalia", "so", "Spain", "es", "0 : 7"],
						[field8, "April 22, 12:15 PM", "Fiji", "fj", "Spain", "es", "8 : 0"],
						[field9, "April 22, 12:15 PM", "United States", "us", "Somalia", "so", "5 : 0"]],
					["#group-g-f",
						[field1, "April 21, 6:30 PM", "India", "in", "Poland", "pl", "4 : 0"],
						[field2, "April 21, 6:30 PM", "Kenya", "ky", "Mongolia", "mn", "0 : 0"],
						[field7, "April 22, 9:00 AM", "India", "in", "Kenya", "ky", "5 : 0"],
						[field8, "April 22, 9:00 AM", "Poland", "pl", "Mongolia", "mn", "2 : 1"],
						[field4, "April 22, 12:15 PM", "India", "in", "Mongolia", "mn", "1 : 0"],
						[field5, "April 22, 12:15 PM", "Kenya", "ky", "Poland", "pl", "0 : 2"]],
					["#group-h-f",
						[field3, "April 21, 6:30 PM", "Cameroon", "cm", "Italy", "it", "3 : 1"],
						[field4, "April 21, 6:30 PM", "Portugal", "pt", "Croatia", "hr", "1 : 3"],
						[field9, "April 22, 9:00 AM", "Cameroon", "cm", "Portugal", "pt", "3 : 1"],
						[field5, "April 22, 9:45 AM", "Italy", "it", "Croatia", "hr", "0 : 3"],
						[field6, "April 22, 12:15 PM", "Cameroon", "cm", "Croatia", "hr", "2 : 2"],
						[field6, "April 22, 1:00 PM", "Portugal", "pt", "Italy", "it", "2 : 1"]],
					["#group-i-f",
						[field5, "April 21, 6:30 PM", "Nigeria", "ng", "England", "gb-eng", "3 : 0"],
						[field6, "April 21, 6:30 PM", "Ireland", "ie", "Hong Kong", "hk", "1 : 2"],
						[field6, "April 22, 9:45 AM", "Nigeria", "ng", "Ireland", "ie", "2 : 0"],
						[field7, "April 22, 9:45 AM", "England", "gb-eng", "Hong Kong", "hk", "0 : 1"],
						[field7, "April 22, 1:00 PM", "Nigeria", "ng", "Hong Kong", "hk", "5 : 0"],
						[field8, "April 22, 1:00 PM", "Ireland", "ie", "England", "gb-eng", "5 : 5"]],
					["#group-j-f",
						[field1, "April 21, 7:15 PM", "Belgium", "be", "Vietnam", "vn", "5 : 0"],
						[field2, "April 21, 7:15 PM", "Cuba", "cu", "Chad", "td", "10 : 0"],
						[field8, "April 22, 9:45 AM", "Belgium", "be", "Cuba", "cu", "0 : 1"],
						[field9, "April 22, 9:45 AM", "Vietnam", "vn", "Chad", "td", "1 : 1"],
						[field4, "April 22, 1:00 PM", "Belgium", "be", "Chad", "td", "8 : 1"],
						[field5, "April 22, 1:00 PM", "Cuba", "cu", "Vietnam", "vn", "1 : 0"]],
					["#group-a-w-f",
						[field3, "April 21, 7:15 PM", "Switzerland", "ch", "Denmark", "dk", "2 : 1"],
						[field1, "April 21, 8:00 PM", "Ireland", "ie", "Iceland", "is", "2 : 0"],
						[field4, "April 22, 9:45 AM", "Switzerland", "ch", "Ireland", "ie", "0 : 4"],
						[field4, "April 22, 10:30 AM", "Denmark", "dk", "Iceland", "is", "2 : 2"],
						[field9, "April 22, 1:00 PM", "Switzerland", "ch", "Iceland", "is", "1 : 2"],
						[field4, "April 22, 1:45 PM", "Ireland", "ie", "Denmark", "dk", "- : -"]],
					["#group-b-w-f",
						[field2, "April 21, 8:00 PM", "Djibouti", "dj", "Argentina", "ar", "6 : 0"],
						[field3, "April 21, 8:00 PM", "Norway", "no", "United States", "us", "5 : 2"],
						[field5, "April 22, 10:30 AM", "Djibouti", "dj", "Norway", "no", "1 : 1"],
						[field6, "April 22, 10:30 AM", "Argentina", "ar", "United States", "us", "0 : 7"],
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
