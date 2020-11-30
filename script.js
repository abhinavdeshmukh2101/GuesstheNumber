var correctnumber;
var turn = 0;
var hist = [];


function startgame(correctnumber,turn){
    correctnumber = Math.floor((Math.random() * 100)+1);
    console.log(correctnumber);
    document.getElementById("correct").style.display = "none";
    document.getElementById("less").style.display = "none";
    document.getElementById("correct").style.display = "none";
    document.getElementById("start").style.display = "block";
    document.getElementById("check").onclick = function() {checknumber(correctnumber,turn)};
}

function times(turn){
    if(document.getElementById("check").onclick = true)turn++;
}


function checknumber(correctnumber,turn){
    document.getElementById("start").style.display = "none";

    let tempo = document.getElementById("guess").value;

    if((Number(tempo)>100 || Number(tempo)<1) || Number(tempo) == null){
        document.write("Please enter a number between 1 to 100");
    }
    

    if(Number(tempo) == correctnumber){
        document.getElementById("less").style.display = "none";
        document.getElementById("greater").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("correct").style.display = "block";
        //alert("You finished the game in " + turn + " turns. Hope you like the game!");

    }
    else if(Number(tempo) < correctnumber){
        document.getElementById("correct").style.display = "none";
        document.getElementById("greater").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("less").style.display = "block";
    }
    else if(Number(tempo) > correctnumber){
        document.getElementById("correct").style.display = "none";
        document.getElementById("less").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("greater").style.display = "block";
    }

    let temp = "Your entered " + tempo;
    document.getElementById("history").style.innerText = temp;
    document.getElementById('history').style.display = "block";
}

