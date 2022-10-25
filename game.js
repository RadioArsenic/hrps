// rock = 1
// paper = 2
// scissors = 3

//rock > scissors       1 > 3
//scissors > paper      3 > 2
//paper > rock          2 > 1

function picked(element) {
  var uchoice = element.innerHTML;
  switch (uchoice) {
    case "rock":
      uchoice = 1;
      break;
    case "paper":
      uchoice = 2;
      break;
    case "scissors":
      uchoice = 3;
      break;
    default:
      break;
  }
  // console.log(uchoice);
  comparison(uchoice, randomNumberGenerator());
}

function randomNumberGenerator() {
  var random = Math.round(Math.random() * 2) + 1; //1,2,3
  // console.log("random", random); 
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
  //modal popup
  console.log(reslt);

  //todo find way to override ghost

}

