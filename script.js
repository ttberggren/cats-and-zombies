
// declaration of var's (global)
// map
var first = document.getElementById
var arrayColumns = 7;
var arrayRows = 7;
var map = mapArray(arrayRows, arrayColumns);
var gameScore = [];

function mapArray(cols, rows){
    var newArray = new Array(cols);
    var indexNr = 0;
    for(var i = 0; i < newArray.length; i++){
        newArray[i] = new Array(rows);
    
    
    for(var j = 0; j < newArray[i].length; j++){
        newArray[i][j] = indexNr + ".jpeg";
       indexNr++;
        var img = document.getElementById("myImage");
        //img.setAttribute("src", newArray[0]);
        
    }
        
    }
    return newArray;
    }
   //player position and spawn


    var playerY = (arrayColumns = 1);       
var playerX = (arrayRows = 1);  
var player = {
    y: playerY,
    x: playerX
}
var positionY = player.y;
var positionX = player.x;

//test in console to see player pos
console.log("y: " + player.y + ", " + "x: " + player.x);

//////////////////////

var cats =  [];     
var numCats = 2;

// cats spawn

for(i = 0; i < numCats; i++){
    cats[i] = {y:Math.floor(Math.random()* map.length +1),x:Math.floor(Math.random() * map.length + 1)};
     console.log("cats y: " + cats[i].y + ", cats x: " + cats[i].x);
}

// finding or not finding cats

function findCats(){
    for(i = 0; i < cats.length; i++){
        if (cats[i].x == player.x && cats[i].y == player.y){
            cats.splice(i);
            console.log("one cat found");
            document.getElementById("gameScore").textContent = "1/2"; //adds 1 point to gameScore when first cat is found

        } else {
            console.log("no cats here");
        }
    }
    }

//zombie spawn randomly

var zombieA = [];   
var numZombies = 2;
for(i = 0; i < numZombies; i++){
zombieA[i] = {y:Math.floor(Math.random() * map.length + 1),x:Math.floor(Math.random() * map.length + 1)};

}
  
// movement for the player and also functions that run after each time

function move(direction){
    if (direction === 'north'){
        if (player.y < 1) {
            console.log("you have reached the northern wall"); 
        } else {
        positionY--;
        player.y = positionY;
        console.log('y: ' + player.y + ', x: ' + player.x);
        moveZombie();
        findCats();
        losing();
    }
    }
    else if (direction === 'south') {
        if (player.y > map[player.y].length -2){
            console.log("you have reached the southern wall");
        } else {
        positionY++;
        player.y = positionY;
        console.log('y: ' + player.y + ', x: ' + player.x);
        moveZombie();
        findCats();
        losing();
    }
}
    else if (direction === 'west'){
        if (player.x < 1){
            console.log("you have reached the western wall");
        } else {
        positionX--;
        player.x = positionX;
        console.log('y: ' + player.y + ', x: ' + player.x);
        moveZombie();
        findCats();
        losing();
    }
}
    else {
        if (player.x > map[player.x].length -2){
            console.log("you have reached the eastern wall");
        } else {
        positionX++;
        player.x = positionX;
        console.log('y: ' + player.y + ', x: ' + player.x);
        moveZombie();
        findCats();
        losing();
    }
}
}

// to make the zombie move, somtimes, when the player moves

function moveZombie(){

   
    for (i = 0; i < zombieA.length; i++){
        if (Math.floor(Math.random() < 0.4)){
        if (zombieA[i].x === player.x){
            if (zombieA[i].y > player.y){
                zombieA[i].y--;
                console.log("zombieA y: " + zombieA[i].y + ", " + "x: " + zombieA[i].x);
            } else {
                zombieA[i].y++;
                console.log("zombieA y: " + zombieA[i].y + ", " + "x: " + zombieA[i].x);
            }
        } else if (zombieA[i].x > player.x){
        zombieA[i].x--;
        console.log("zombieA y: " + zombieA[i].y + ", " + "x: " + zombieA[i].x);
        } else {
       zombieA[i].x++
       console.log("zombieA y: " + zombieA[i].y + ", " + "x: " + zombieA[i].x);
   }
} 
   }
    }




function init(){
    // starts a new game with all values at default

    // removes certain elements and adds others for when the game is starting

    document.getElementById("first").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("controls").style.display = "block";
    document.getElementById("gameScore").style.display = "block";
    document.getElementById("newGame").style.display = "none";

    // player position
var playerY = (arrayColumns = 1);       
var playerX = (arrayRows = 1);  
var player = {
    y: playerY,
    x: playerX
}


// zombies spawn randomly

var zombieA = [];   
var numZombies = 2;
for(i = 0; i < numZombies; i++){
zombieA[i] = {y:Math.floor(Math.random() * map.length +1),x:Math.floor(Math.random() * map.length +1)};

}
// cats spawn

var cats =  [];    
var numCats = 2;
for(i = 0; i < numCats; i++){
    cats[i] = {y:Math.floor(Math.random()* map.length ),x:Math.floor(Math.random() * map.length)};
     console.log("cats y: " + cats[i].y + ", cats x: " + cats[i].x);
}
console.log("y: " + player.y + ", " + "x: " + player.x);

// resets the score when init() is run
document.getElementById("gameScore").textContent = "0";
      

        
}

// what to do if you win the game (saving both cats)
function winning(){
    for(i = 0; i < gameScore; i++){
    if(findCats(2)){
        console.log("Both cats found, you win!")
        // adds a 2 to gameScore when both cats is found and game is won
        document.getElementById("gameScore").textContent = "2";
       
        init();
    }
    }
}
// what happens if a zombie gets you
function losing(){
     for (i = 0; i < zombieA.length; i++){
if(zombieA[i].x == player.x && zombieA[i].y == player.y){
console.log("The zombies got you, you lose!")

init();
}
     }
}