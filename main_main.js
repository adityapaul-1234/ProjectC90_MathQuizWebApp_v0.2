setInterval(function(){
    if (screen.width < 960){
        document.getElementById("Number1").style.width="70%";
        document.getElementById("Number2").style.width="70%"; 
    }
    else {
        document.getElementById("Number1").style.width="30%";
        document.getElementById("Number2").style.width="30%"; 
    }
}, 100);

var player1 = localStorage.getItem("User1");
var player2 = localStorage.getItem("User2");
var score1 = 0;
var score2 = 0;
var qt = player1;
var at = player2;

document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
document.getElementById("player_question").innerHTML = "Question Turn: " + qt;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + at;