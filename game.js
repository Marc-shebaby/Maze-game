let gt_scr=0;
let player=prompt("Enter username");


 window.onload=function beforeStart() {
    

  
    while(localStorage.getItem(player)===null){
        alert("User does not exist");
        player=prompt("Enter username");
    };
    
    document.getElementById("start").addEventListener("mouseover", startGame); 
    
    document.getElementById("start").addEventListener("click", resetGame);
    document.getElementById("game").removeEventListener("mouseleave", cheaterCaught);
    
    document.getElementById("end").removeEventListener("mouseover", winEvent);

    for (var i = 0; i < document.getElementsByClassName("boundary").length; i++) {
        document.getElementsByClassName("boundary")[i].removeEventListener("mouseover", touchedBorder);
    };
}; 

function startGame() {
    document.getElementsByClassName("example")[0].style.textAlign = "center";
    document.getElementById("status").innerHTML = "Game Started!";
    arr=JSON.parse(localStorage.getItem(player));
    document.getElementsByClassName("boundary example")[0].innerHTML = "Score: " + arr.score;
    document.getElementById("end").addEventListener("mouseover", winEvent);
    document.getElementById("game").addEventListener("mouseleave", cheaterCaught);

    for (var i = 0; i < document.getElementsByClassName("boundary").length; i++) {
        document.getElementsByClassName("boundary")[i].addEventListener("mouseover", touchedBorder);
      
           
    
}
removered();
   


};

function winEvent() {
    document.getElementById("status").innerHTML = "Good Job!";
    document.getElementById("game").removeEventListener("mouseleave", cheaterCaught);

    for (var i = 0; i < document.getElementsByClassName("boundary").length; i++) {
        document.getElementsByClassName("boundary")[i].removeEventListener("mouseover", touchedBorder);
    };
    let arr=JSON.parse(localStorage.getItem(player));
    
    
   arr.score += 5;
    localStorage.setItem(player,JSON.stringify(arr));
    gt_scr=JSON.parse(localStorage.getItem(player));
    document.getElementsByClassName("example")[0].innerHTML = "Score: " + gt_scr.score;
    beforeStart();
};
function removered(){ //used remove red color for each div of the border after start


for (var i = 0; i < document.getElementsByClassName("boundary").length - 1; i++) {
    document.getElementsByClassName("boundary")[i].style.backgroundColor="#eeeeee";
}
};
 function addred(){ // used to add red color after touching border
    for (var i = 0; i < document.getElementsByClassName("boundary").length - 1; i++) {
        document.getElementsByClassName("boundary")[i].style.backgroundColor= "#ff8888";
    }

}
 function touchedBorder() {
    document.getElementById("status").innerHTML = "you lost move mouse over S to play again";
    document.getElementById("end").removeEventListener("mouseover", winEvent);
    document.getElementById("game").removeEventListener("mouseleave", cheaterCaught);
    for (var i = 0; i < document.getElementsByClassName("boundary").length; i++) {
        document.getElementsByClassName("boundary")[i].removeEventListener("mouseover", touchedBorder);
    };

    
    
     arr=JSON.parse(localStorage.getItem(player));
    console.log(arr);
    
    arr.score -= 10;
     localStorage.setItem(player,JSON.stringify(arr));
     gt_scr=JSON.parse(localStorage.getItem(player));
   
    document.getElementsByClassName("example")[0].innerHTML = "Score: " + arr.score;
    addred();
    beforeStart();
};

 function cheaterCaught() {
    alert("Illegal move");
    document.getElementById("status").innerHTML= 'Begin by moving your mouse over the "S".';
    beforeStart();
};

  function resetGame() {
   // document.getElementById("start").removeEventListener("mouseover", startGame);
    document.getElementById("game").removeEventListener("mouseleave", cheaterCaught);
    document.getElementById("end").removeEventListener("mouseover", winEvent);
    for (var i = 0; i < document.getElementsByClassName("boundary").length; i++) {
        document.getElementsByClassName("boundary")[i].removeEventListener("mouseover", touchedBorder);
    };
   
    arr=JSON.parse(localStorage.getItem(player));
   
    
    arr.score=arr.score-arr.score;
    localStorage.setItem(player,JSON.stringify(arr));
    
    document.getElementById("status").innerHTML= 'The Game was reset, slide the mouse again to play';
    
    beforeStart();
    
  
    
    
    
};


