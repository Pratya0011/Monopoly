
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
var divarr1 = [box1, box2, box3, box4, box5, box8, box9, box12, box13, box14, box15, box16];
var divarr2 = [box1, box2, box3, box4, box5, box8, box9, box12, box13, box14, box15, box16];


var player1_Button = document.getElementById("player-1");
var player2_Button = document.getElementById("player-2");
var count1 = 0;
var count2 = 0;

class Player{
    constructor(name,position,money){
        this.name = name;
        this.position = position;
        this.money = money;
    }
    rollDice(){
        let pos = Math.floor(Math.random()*6)+1;
        console.log(pos);
        this.updatePosition(pos);
    }
    updatePosition(pos){
        count1++
        count2++;
        this.position+=pos;
        console.log(this.position);
        var img_1 = document.getElementById("img1");
        img_1.style.visibility = "hidden";
        var img_2 = document.getElementById("img2");
        img_2.style.visibility = 'hidden';
        this.position = this.position % 11;
        if(count1 >0){
            var elm1 = document.getElementById("img11");
            elm1.remove();
            var template1 = '<img src="/images/1.webp" alt="logo" style="width: 20px; height:20px;" id="img11">';
        divarr1[this.position].innerHTML += template1;
        }
        if(count2 >0){
            var elm2 = document.getElementById("img22");
            elm2.remove();
            var template2 = ' <img src="images/2.jfif" alt="logo" style="width: 20px; height: 20px;" id="img22">';
        divarr2[this.position].innerHTML += template2;
        }
        
        
       
        
        this.updateMoney();
    }
    updateMoney(){
        if(this.position < board.length){
            this.money -= board[this.position];
        }
        else{
            this.position %= 15;
            this.money -= board[this.position];
        }
        console.log(player1);
        console.log(player2);
    }
}

let player1 = new Player("Pratya",0,1000);
let player2 = new Player("Sayak",0,1000);

player1_Button.addEventListener('click',function(){
    player1.rollDice();
},false);

player2_Button.addEventListener('click',function(){
    player2.rollDice();
},false);