// rock = 1
// paper = 2
// scissors = 3

//rock > scissors       1 > 3
//scissors > paper      3 > 2
//paper > rock          2 > 1

let reslt = 0;

function onClick(event) {
	let target = event.target.id[0];
	switch (target) {
		case "1":
		case "A":
			comparison(1, randomNumberGenerator());
			result();
			break;
		case "2":
		case "B":
			comparison(2, randomNumberGenerator());
			result();
			break;
		case "3":
		case "C":
			comparison(3, randomNumberGenerator());
			result();
			break;
		default:
			reslt = 2;
			result();
			break;
	}
}

function randomNumberGenerator() {
	var random = Math.round(Math.random() * 2) + 1; //1,2,3
	return random;
}

function comparison(uchoice, gchoice) {
	console.log("you: " + uchoice + " game: " + gchoice);
	if (uchoice == gchoice) {
		//tie 0
		reslt = 0;
	}
	else if (uchoice == 1) {
		if (gchoice == 2) {
			//lose -1
			reslt = -1;
		}
		else {
			//win 1
			reslt = 1;
		}
	}
	else if (uchoice == 2) {
		if (gchoice == 3) {
			//lose -1
			reslt = -1;
		}
		else {
			//win 1
			reslt = 1;
		}
	}
	else if (uchoice == 3) {
		if (gchoice == 1) {
			//lose -1
			reslt = -1;
		}
		else {
			//win 1
			reslt = 1;
		}
	}
}

function result() {
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
		case 2:
			reslt = "won via ghost :)";
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

function share() {
	$("#shareToFB").on("click", function () {
	window.open(`https://www.facebook.com/sharer/sharer.php?u=
		https://github.com/RadioArsenic/hrps
		&quote=I+${reslt}+Can+you+do+better%3f`);
	});

	$("#shareToTwitter").on("click", function () {
	window.open(`https://twitter.com/share?url=
		https://github.com/RadioArsenic/hrps
		&text=I+${reslt}+Can+you+do+better%3f`);
	});

	$("#shareToEmail").on("click", function () {
	let myWindow = window.open(`mailto:?subject=
		Check out this game!&body=I ${reslt} Can you do better?%0D%0A
		Check it out here: https://github.com/RadioArsenic/hrps`);
	myWindow.close();
	});
}

function main() {
	share();

	document
	.getElementById("gameArea")
	.addEventListener("click", onClick);
}

main();