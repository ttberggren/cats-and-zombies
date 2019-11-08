
// declaration of var's (global)
// map

var arrayColumns = 7;
var arrayRows = 7;
var map = mapArray(arrayRows, arrayColumns);


function mapArray(cols, rows){
    var newArray = new Array(cols);
    var indexNr = 0;
    for(var i = 0; i < newArray.length; i++){
        newArray[i] = new Array(rows);
    
        //
    //console.log(newArray)
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
/*
var positionY = player.y;
var positionX = player.x;
*/


//////////////////////

// cats spawn randomly

var cats =  [];     
var numCats = 2;
/*for(i = 0; i < numCats; i++){
    cats[i] = {y:Math.floor(Math.random()* map.length ),x:Math.floor(Math.random() * map.length )};
     
}
*/

// finding cats

function findCats(){
    for(i = 0; i < cats.length; i++){
        //console.log(cats[i]);
        if (cats[i].x == player.x && cats[i].y == player.y){
            cats.splice(i);
            numCats--;
            console.log("one cat found");
            document.getElementById("gameScore").textContent = "1/2"; //adds 1 point to gameScore when first cat is found

        } else if(numCats < 1){
            console.log("both cats found");
            document.getElementById("gameScore").textContent = "2"; // sets score to 2
            init();

        }
        }
    }
    
//zombie spawn randomly

var zombieA = [];
var numZombies = 2;
for(i = 0; i < numZombies; i++){
zombieA[i] = {y:Math.floor(Math.random() * map.length ),x:Math.floor(Math.random() * map.length )};

}
// movement for the player and also functions that run after each time

function move(direction){
    if (direction === 'north'){
        if (player.y < 1) {
            console.log("you have reached the northern wall"); 
        } else {
        player.y--;
        console.log('y: ' + player.y + ', x: ' + player.x);
        moveZombie();
        zombieClose();
        losing();
    }
    }
    else if (direction === 'south') {
        if (player.y > map[player.y].length -2){
            console.log("you have reached the southern wall");
        } else {
        player.y++;
        console.log('y: ' + player.y + ', x: ' + player.x);
        moveZombie();
        zombieClose();
        losing();
    }
}
    else if (direction === 'west'){
        if (player.x < 1){
            console.log("you have reached the western wall");
        } else {
        player.x--;
        console.log('y: ' + player.y + ', x: ' + player.x);
        moveZombie();
        zombieClose();
        losing();
    }
}
    else {
        if (player.x > map[player.x].length -2){
            console.log("you have reached the eastern wall");
        } else {
        player.x++;
        console.log('y: ' + player.y + ', x: ' + player.x);
        moveZombie();
        zombieClose();
        losing();
       
    }
}
}

function zombieClose(){
    
    //if (zombieX === x + 1 && zombieY === y || zombieY === y + 1 && zombieX === x || zombieX === x - 1 && zombieY === y || zombieY === y - 1 && zombieX === x){
      for (i = 0; i < cats.length ; i++){
          
          for (j = 0 ; j < zombieA.length; j++){
          if (player.y === cats[i].y + 1 && player.y === cats[i] ||  cats[i].y === player.y +1 && cats[i].x === player.x -1){
              console.log("a cat is close!")
             
          }
          if (player.y === zombieA[i].y + 1 && player.y === zombieA[i] ||  zombieA[i].y === player.y +1 && zombieA[i].x === player.x -1){
            console.log("a zombie is close!")
      }
  } 
}
  }

// to make the zombie move, sometimes, when the player moves

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

    function resetPlayer()
    {
        var playerY = (arrayColumns = 1);       
var playerX = (arrayRows = 1);  
var player = {
    y: playerY,
    x: playerX
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
    document.getElementById("restartGame").style.display = "block";
    // resets the score when init() is run
document.getElementById("gameScore").textContent = "0"; 

    // player position

findCats();

resetPlayer();
     

// zombies spawn randomly


for(i = 0; i < numZombies; i++){
zombieA[i] = {y:Math.floor(Math.random() * 6 + 1 ),x:Math.floor(Math.random() * 6 + 1 )};

}
// cats spawn
for(i = 0; i < numCats; i++){
    
    cats[i] = {y:Math.floor(Math.random()* map.length ),x:Math.floor(Math.random() * map.length)};
    console.log(cats[i]);
     console.log("cats y: " + cats[i].y + ", cats x: " + cats[i].x);
}
console.log("y: " + player.y + ", " + "x: " + player.x);

 
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
