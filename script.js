





// declaration of var's (global)
// map

var arrayColumns = 7;
var arrayRows = 7;
var map = mapArray(arrayRows, arrayColumns);
var gamePlaying;


function mapArray(cols, rows){
    var newArray = new Array(cols);
    
    for(var i = 0; i < newArray.length; i++){
        newArray[i] = new Array(rows);
    
    }
        return newArray;
    }
    
    var playerY = (arrayColumns = 1);       //player position
var playerX = (arrayRows = 1);  
var player = {
    y: playerY,
    x: playerX
}
var positionY = player.y;
var positionX = player.x;

//test in console
console.log("y: " + player.y + ", " + "x: " + player.x);

//////////////////////

var cats =  [];     
var numCats = 2;

//function spawnCats(){
// cats spawn

for(i = 0; i < numCats; i++){
    cats[i] = {y:Math.floor(Math.random()* map.length ),x:Math.floor(Math.random() * map.length)};
     console.log("cats y: " + cats[i].y + ", cats x: " + cats[i].x);
}

//spawnCats();


function findCats(){
    if (cats[i].x == player.x){
        if(cats[i].y == player.y){
            console.log("cat found!");

        }
    }
}


var zombieA = [];   //zombie spawn 
var numZombies = 2;
for(i = 0; i < numZombies; i++){
zombieA[i] = {y:Math.floor(Math.random()*7 ),x:Math.floor(Math.random() * 7)};


}
  
// init();

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
        
    }
}
}




/*
console.log("y: " + cats[i].y + ", " + "x: " + cats[i].x);
*/


  

function moveZombie(){

   
    for (i = 0; i < zombieA.length; i++){
        if (Math.random() < 0.4){
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

// document.querySelector(".btn-new").addEventListener("click", init)


function init(){
    // starts a new game
        catSpawn();
        playerSpawn();
        zombieSpawn();
        score = 0;  // score
        gamePlaying = true;
}


function winning(){
    if(catsFound === 2){
        
    }

}

function losing(){

}