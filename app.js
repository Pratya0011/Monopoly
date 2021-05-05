var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var box12 = document.getElementById("box12");
var box13 = document.getElementById("box13");
var box14 = document.getElementById("box14");
var box15 = document.getElementById("box15");
var box16 = document.getElementById("box16");



var board =  [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
var divarr = [box1, box2, box3, box4, box5, box8, box9, box12, box13, box14, box15, box16];

var board =  [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
var player1_Button = document.getElementById("player-1");
var player2_Button = document.getElementById("player-2");

player1_Button.addEventListener('click',rollDice_1); 
player2_Button.addEventListener('click',rollDice_2);


var player1 = ['Prograd',0,1000];
var player2 = ['Faceprep',0,1000];

//player 1
function rollDice_1(){
    var position = Math.floor(Math.random()*6)+1;
    console.log("rolls 1",position);
    changePosition_1(player1[1],position);
}
var count = 0;
function changePosition_1(old,current){
    count++;
    newPos = old+current;
    player1[1] = newPos;
    console.log(player1[1]);
    var img_1 = document.getElementById("img1");
        img_1.style.visibility = "hidden";
        newPos = newPos % 11;
        if(count >0){
            var elm = document.getElementById("img11");
            elm.remove();
        }
        var template = '<img src="/images/1.webp" alt="logo" style="width: 20px; height:20px;" id="img11">';
        divarr[newPos].innerHTML += template;

    updateMoney(player1[1]);
}
function updateMoney(p1){
    var money1 = 0;
    if(p1 < board.length){
         money1 = player1[2] - board[p1 -1];
         
    }
    else{
        p1 = p1%15;
        money1 = player1[2] - board[p1 -1];
        
    }
    document.getElementById("text1").textContent = money1;
    console.log(money1);
}

//player 2
function rollDice_2(){
    var position = Math.floor(Math.random()*6)+1;
    console.log("rolls 2",position);
    changePosition_2(player2[1],position);
}
var count2 = 0;
function changePosition_2(old,current){
    count2++;
    newPos = old+current;
    player2[1] = newPos;
    console.log(player2[1]);
    var img_2 = document.getElementById("img2");
        img_2.style.visibility = 'hidden';
    newPos = newPos % 11;
    if(count2 > 0){
        var elm = document.getElementById("img22");
            elm.remove();
    }
    var template = ' <img src="images/2.jfif" alt="logo" style="width: 20px; height: 20px;" id="img22">';
        divarr[newPos].innerHTML += template;
    updateMoney_2(player2[1]);
}
function updateMoney_2(p2){
    var money = 0;
    if(p2 < board.length){
         money = player2[2] - board[p2 -1];
         
    }
    else{
        p2 = p2%15;
        money = player2[2] - board[p2 -1];
        
    }
    document.getElementById("text2").textContent = money;
    console.log(money);
}