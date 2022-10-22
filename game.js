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
    console.log(uchoice);
    randomNumberGenerator();
}

function randomNumberGenerator() {
    var random = Math.round(Math.random() * 2) + 1; //1,2,3
    // console.log("random", random); 
    return random;
}

function comparison(uchoice, gchoice) {
    if (uchoice == gchoice) {
        //tie
    }
    else if (uchoice == 1) {
        if (gchoice == 2) {
            //lose
        }
        else {
            //win
        }
    }
    else if (uchoice == 2) {
        if (gchoice == 3) {
            //lose
        }
        else {
            //win
        }
    }
    else if (uchoice == 3) {
        if (gchoice == 1) {
            //lose
        }
        else {
            //win
        }
    }
}
  