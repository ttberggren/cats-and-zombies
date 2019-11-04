





// declaration of var's (global)
// map

var arrayColumns = 8;
var arrayRows = 8;
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

// zombie position

var zombieY = (arrayColumns = 7);
var zombieX = (arrayRows = 7);
var zombie = {
    y: zombieX,
    x: zombieX,
}

//test in console
console.log("y: " + player.y + ", " + "x: " + player.x);
console.log("y: " + zombie.y + ", " + "x: " + zombie.x);



function move(direction){
    if (direction === 'north'){
        if (player.y < 1) {
            console.log("northern wall"); 
        } else {
        positionY--;
        player.y = positionY;
        console.log('y: ' + player.y + ', x: ' + player.x);
        
    }
    }
    else if (direction === 'south') {
        if (player.y > map[player.y].length -2){
            console.log("southern wall");
        } else {
        positionY++;
        player.y = positionY;
        console.log('y: ' + player.y + ', x: ' + player.x);
        
    }
}
    else if (direction === 'west'){
        if (player.x < 1){
            console.log("western wall");
        } else {
        positionX--;
        player.x = positionX;
        console.log('y: ' + player.y + ', x: ' + player.x);
       
    }
}
    else {
        if (player.x > map[player.x].length -2){
            console.log("eastern wall");
        } else {
        positionX++;
        player.x = positionX;
        console.log('y: ' + player.y + ', x: ' + player.x);
        
        
    }
}
}
function moveZombie(){
    for (i = 0; i < zombie.length; i++){
        //only move 70% of the time
        if (Math.floor(Math.random()*10 +1) <= 7){
           //50% of the time move Y axis else X axis if on same axis as player
            if (Math.floor(Math.random() * 10 + 1) >= 5 ){
                //Förflyttar spelaren på Y axel förutom om spelaren är på samma axel isf X axel
                if (zombie[i].y === player.y){
                    if (zombie[i].x > player.x){
                        zombie[i].x--;
                        }
                        else {
                       zombie[i].x++
                        }
                } else if (zombie[i].y > player.y){
                        zombie[i].y--;
                }
            else {
            zombie[i].y++
            }
        } else {
            //Förflyttar zombie på X axeln förutom om spelaren är på samma axel isf Y axel
            if (zombie[i].x === player.x){
                if (zombie[i].y > player.y){
                    zombie[i].y--;
                } else {
                    zombie[i].y++;
                }
            } else if (zombie[i].x > player.x){
            zombie[i].x--;
            } else {
           zombie[i].x++
           
       }
    } 
} 
}
}

// function for zombie to move when player moves

function zombie(){
    moveZombie();
}