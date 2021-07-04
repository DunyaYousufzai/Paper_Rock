function rpsGame(yourChoice){
    var humanchoice, botchoice;
    humanchoice = yourChoice.id;
    botchoice = numberToChoice(randToRpsint());
    result = decideWinner(humanchoice,  botchoice);
    message = FinalMessage(result);
    rpsFrontEnd(yourChoice.id,botchoice, message);
}


function randToRpsint(){
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerchoice){
    var rpsdatabase = {
        "rock":{ "sccisors": 1, "rock": 0.5,  "paper":0},
        "paper":{ "rock": 1, "paper": 0.5,  "scissors":0},
        "scissors":{ "paper": 1, "scissors": 0.5,  "rock":0}
    }
     var  yourscore = rpsdatabase[yourChoice][computerchoice]
     var computerscore = rpsdatabase[computerchoice][yourChoice]
     return[yourscore, computerscore]
}

function FinalMessage([yourscore, computerscore]){
    if (yourscore === 0){
        return  {"message": "You lost!" , 'color':"red"};
    }
    else if (yourscore === 0.5){
        return  {"message": "You tied!" , 'color':"yellow"};
    }
    else{
        return  {"message": "You win!" , 'color':"green"};
    }
}

function  rpsFrontEnd(humanImageChoice, botImageChoice, FinalMessage){
    var imageDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }
    // remove all  images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();  
    document.getElementById("scissors").remove();  
    var humandiv = document.createElement("div");
    var botdiv = document.createElement("div");
    var msgdiv = document.createElement("div");

    humandiv.innerHTML = "<img  src  ='" + imageDatabase[humanImageChoice] +
    "' height = 150 width= 150 style = 'box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    msgdiv.innerHTML = "<h1 style = 'color: "+ FinalMessage["color"] + "; font-size: 60px; padding 30px; '>" +FinalMessage['message'] + "</h1>"
    botdiv.innerHTML = "<img  src  ='" + imageDatabase[botImageChoice] + 
    "' height = 150 width= 150 style = 'box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
    document.getElementById("flex-box-rps-div").appendChild(humandiv);
    document.getElementById("flex-box-rps-div").appendChild(msgdiv);
    document.getElementById("flex-box-rps-div").appendChild(botdiv);
    

}