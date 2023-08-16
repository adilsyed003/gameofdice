var randomNum1 = Math.random()*6 +1;
randomNum1 = Math.floor(randomNum1);
var randomimage1 = "./images/dice"+randomNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage1);

var randomnum2 = Math.floor(Math.random()*6)+1;
var randomimage2 = "./images/dice"+randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(randomNum1>randomnum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins🥳";
}
else if(randomnum2>randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 Wins🥳";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!😐";
}

function refresh(){
    window.location.reload("Refresh");
}