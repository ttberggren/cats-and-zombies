





// declaration of var's (global)
// map

var arrayColumns = 7;
var arrayRows = 7;
var map = mapArray(arrayRows, arrayColumns);


function mapArray(cols, rows){
var newArray = new Array(cols);

for(var i = 0; i < newArray.length; i++){
    newArray[i] = new Array(rows);

    for (var j = 0; j < newArray.length; j++){
        newArray[i][j] = j; 
    }
}
    return newArray;
}



// player position

var playerY = (arrayColumns = 1);
var playerX = (arrayRows = 1);
var player = {
    y: playerY,
    x: playerX
}
var positionY = player.y;
var positionX = player.x;

// zombieA position

var zombieY = Math.floor(Math.random() * map.length)
var zombieX =  Math.floor(Math.random() * map.length)

var zombieA = [];
var numZombies = 2;

for(i = 0; i < numZombies; i++){
    zombieA[i] = {y:Math.floor(Math.random()*7 ),x:Math.floor(Math.random() * 7)};
  }
  

//test in console
console.log("y: " + player.y + ", " + "x: " + player.x);




function move(direction){
    if (direction === 'north'){
        if (player.y < 1) {
            console.log("you have reached the northern wall"); 
        } else {
        positionY--;
        player.y = positionY;
        console.log('y: ' + player.y + ', x: ' + player.x);
        moveZombie();
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
        
    }
}
}


function moveZombie(){

    
    for (i = 0; i < zombieA.length; i++){
        
        if (Math.random() < 0.5){
            return Math.random();
            if (zombieA[i].y === player.y){
                if (zombieA[i].x > player.x){
                    zombieA[i].x--;
                    console.log("zombieA y: " + zombieA[i].y + ", " + "x: " + zombieA[i].x);
                    }
                    else {
                   zombieA[i].x++
                   console.log("zombieA y: " + zombieA[i].y + ", " + "x: " + zombieA[i].x);
                    }
            } else if (zombieA[i].y > player.y){
                    zombieA[i].y--;
                    console.log("zombieA y: " + zombieA[i].y + ", " + "x: " + zombieA[i].x);
            }
        else {
        zombieA[i].y++
        console.log("zombieA y: " + zombieA[i].y + ", " + "x: " + zombieA[i].x);
        }
    } else {
       
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

// function for zombieA to move when player moves
