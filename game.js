// rock = 1
// paper = 2
// scissors = 3

//rock > scissors       1 > 3
//scissors > paper      3 > 2
//paper > rock          2 > 1

function picked(uchoice) {
	comparison(uchoice, randomNumberGenerator());
}

function randomNumberGenerator() {
	var random = Math.round(Math.random() * 2) + 1; //1,2,3
	return random;
}

function comparison(uchoice, gchoice) {
	console.log("you: " + uchoice + " game: " + gchoice);
	if (uchoice == gchoice) {
		//tie 0
		result(0);
	}
	else if (uchoice == 1) {
		if (gchoice == 2) {
			//lose -1
			result(-1);
		}
		else {
			//win 1
			result(1);
		}
	}
	else if (uchoice == 2) {
		if (gchoice == 3) {
			//lose -1
			result(-1);
		}
		else {
			//win 1
			result(1);
		}
	}
	else if (uchoice == 3) {
		if (gchoice == 1) {
			//lose -1
			result(-1);
		}
		else {
			//win 1
			result(1);
		}
	}
}

function ghost() {
	//if click elsewhere on screen
	//then register as choosing ghost
	//auto win
	// console.log("ghost");

	//check if other option was given. If no other then ghost,
	//   if other then that
	result(2);
}

function result(reslt) {
	//if 1 then win
	//if 0 then tie
	//if -1 then lose
	//if 2 then ghost/win
	var con = "Congratulations!"
	var color = "#00ff40";
	switch (reslt) {
		case 1:
			reslt = "won! :)";
			break;
		case 0:
			reslt = "tied! :)";
			break;
		case -1:
			reslt = "lost :(";
			con = "Condolences"
			color = "red";
			break;
		default:
			break;
	}

	$("#myModal").modal("toggle");
	$(".modal-header").css("background-color", color);
	$("#congrats").html(con);
	$("#result").html(reslt);
}
