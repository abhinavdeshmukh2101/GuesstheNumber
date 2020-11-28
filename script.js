//var->global scope
// let and const -> block scope

var correctnumber = Math.floor((Math.random * 100)+1);   // number which needs to be correctly guess by user
 
var flag = false;

var guess;  // variable guess number that will be entered by user

function checknum(){
    let x = document.getElementById("guess").value;
    if(x == 4){
        document.getElementById("correct").style.display = "block";
        document.getElementById("less").style.display = "none";
        document.getElementById("greater").style.display = "none";
    }
    else if(x < 4){
        document.getElementById("correct").style.display = "none";
        document.getElementById("greater").style.display = "none";
        document.getElementById("less").style.display = "block";
    }
    else if(x > 4){
        document.getElementById("correct").style.display = "none";
        document.getElementById("less").style.display = "none";
        document.getElementById("greater").style.display = "block";
    }
}


function checknumber(){
    let t = document.getElementById("guess").value;
    if(t>100 || t<1){
        document.write("Please enter a number between 1 to 100");
    }
    checknum();
    let temp = "Your entered " + t;
    document.getElementById("history").innerHTML = temp;
}