
    // declaration of player and map

                var arrayColumns = 7;
                var arrayRows = 7;
                var map = mapArray(arrayRows, arrayColumns);

                playerX = Math.floor(arrayColumns= 1);
                playerY = Math.floor(arrayRows = 1);
                player = {
                    x: playerX,
                    y: playerY,
}

    /*///////////////////////////////////////////////*/

    // array for the map

        function mapArray(cols, rows){
                map = [];
                var newArray = new Array(cols);
   
            for(var i = 0; i < newArray.length; i++){
                newArray[i] = new Array(rows);
    
            for(var j = 0; j < newArray[i].length; j++){
                newArray[i][j] = createBackground();
    }
        
    }
            return newArray;
    }
 
     /*///////////////////////////////////////////////*/

    // create the unique backgrounds by pushing images

        function createBackground(){
                var tempArray = [];
    // push Backgrounds 
                tempArray.push(numRandom(1,4));
    // push trees 
            if (Math.floor(Math.random() * 7 + 1) < 4){
                tempArray.push(numRandom(1,4));
    }       else {
                tempArray.push(0);
    }
    // push monsters
            if(Math.floor(Math.random() * 7 + 1) < 4){
                tempArray.push(numRandom(1,3));
    }       else {
                tempArray.push(0);
    }   
    // push objects
            if(Math.floor(Math.random() * 7 + 1) < 4){
                tempArray.push(numRandom(1,3));
    }       else {
                tempArray.push(0);
            
    }
            return tempArray;
    }
    //  function to load the backgrounds created by other functions

        function loadBackground(){
            for(y = 0; y < map.length; y++){
            for(x = 0; x < map[y].length; x++){
                clearTop();
                setBackgroundimg();
                setTreesimg();
                setMonstersimg();
                setObjectsimg();
    }   
    }
    }

    // function to place backgrounds

        function setBackgroundimg(){
            if (map[player.y][player.x][0] == 1){
            createBG('background1.png');
    }       else if (map[player.y][player.x][0] == 2){
            createBG('background2.png');
    }       else if (map[player.y][player.x][0] == 3){
            createBG('background3.png');
    }       else  {
            createBG('background4.png');
    }   
    }

    // function to place trees

        function setTreesimg(){
            if (map[player.y][player.x][1] == 1){
            createTrees('tree1.png');
    }       else if (map[player.y][player.x][1] == 2){
            createTrees('tree2.png');
    }       else if (map[player.y][player.x][1] == 3){
            createTrees('tree3.png');
    }       else if(map[player.y][player.x][1] == 4) {
            createTrees('tree4.png');
    } 
    }
         
    // function to place monsters
        function setMonstersimg(){
            if (map[player.y][player.x][2] == 1){
            createMonsters('monster1.png');
    }       else if (map[player.y][player.x][2] == 2){
            createMonsters('monster2.png');
    }       else if (map[player.y][player.x][2] == 3){
            createMonsters('monster3.png');
    }       else if (map[player.y][player.x][2] == 4){
            createMonsters('monster4.png');
    }
    }
   // function to place monsters
        function setObjectsimg(){
            if (map[player.y][player.x][3] == 1){
            createObjects('object1.png');
    }       else if (map[player.y][player.x][3] == 2){
            createObjects('object2.png');
    }       else if (map[player.y][player.x][3] == 3){
            createObjects('object3.png');
    }      
    }
    

    /*///////////////////////////////////////////////*/

    // function to create the backgrounds
        function createBG(filename){
                var topContainer = document.getElementById('game');
                var background = document.createElement("img");
                background.src = 'images/backgrounds/'+filename;
                background.id = 'bg-images';
                topContainer.appendChild(background);    
    }

    // function to create trees
        function createTrees(filename){
                var topContainer = document.getElementById('game');
                var trees = document.createElement("img");
                trees.src = 'images/trees/'+filename;
                trees.id = 'tree-images';
                topContainer.appendChild(trees);    
    } 
    // function to create monsters
        function createMonsters(filename){
                var topContainer = document.getElementById('game');
                var monsters = document.createElement("img");
                monsters.src = 'images/monsters/'+filename;
                monsters.id = "monsters-images"
                topContainer.appendChild(monsters);    
        
    } 
    // function to create objects
        function createObjects(filename){
                var topContainer = document.getElementById('game');
                var objects = document.createElement("img");
                objects.src = 'images/objects/'+filename;
                objects.id = "object-images"
                topContainer.appendChild(objects);    

    } 
    //  function to clear gamescreen
        function clearTop(){
                var topwindow = document.getElementById('game');
                topwindow.innerHTML = "";
    }

   //   randomfunction between two values
        function numRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    /*///////////////////////////////////////////////*/

    //  cats spawn randomly

                var cats =  [];     
                var numCats = 1;

        function spawnCats(){
            for(i = 0; i < numCats; i++){
            cats[i] = {x:Math.floor(Math.random()* map.length ),y:Math.floor(Math.random() * map.length )};
    }
    }

     //  zombie spawn randomly

                var zombieA = [];
                var numZombies = 2;

        function spawnZombies(){

            for(i = 0; i < numZombies; i++){
                zombieA[i] = {y:Math.floor(Math.random() * map.length ),x:Math.floor(Math.random() * map.length )};

    }
    }

    /*///////////////////////////////////////////////*/

    //  finding cats

        function findCats(){
            for(i = 0; i < cats.length; i++){
        
            if (cats[i].x == player.x && cats[i].y == player.y){
            
                document.getElementById("gameScore").textContent = "1"; //adds 1 point to gameScore when first cat is found
                var topContainer = document.getElementById('game');
                var cat = document.createElement("img");
                cat.src = 'images/cats/cat'+numRandom(1,2)+'.png';
                cat.id = "cats"
                topContainer.appendChild(cat);
        
    }  
    }
    }

    /*///////////////////////////////////////////////*/

    // movement for the player and also functions that run after each time

        function move(direction){
            if (direction === 'north'){
            if (player.y < 1) {
          
    }       else {
                player.y--;
    
                moveZombie();
                loadBackground();
                losing();
                findCats();
                catClose();
                zombieClose();
                winning();
        
    }
    }
            else if (direction === 'south') {
            if (player.y > map[player.y].length -2){
                
    }       else {
                player.y++;

                moveZombie();
                loadBackground();
                losing();
                catClose();
                zombieClose();
                findCats();
                winning();
            
    }
    }
            else if (direction === 'west'){
            if (player.x < 1){
               
    }       else {
                player.x--;
    
                moveZombie();
                loadBackground();
                losing();
                catClose();
                zombieClose();
                findCats();
                winning();
        
    }
    }
            else {
            if (player.x > map[player.x].length -2){
    
    }       else {
                player.x++;
                        
                moveZombie();
                loadBackground();
                catClose();
                zombieClose();
                losing();
                findCats();
                winning();
        
       
    }
    }
    } 

     // to make the zombie move, sometimes, when the player moves

     function moveZombie(){
        for (i = 0; i < zombieA.length; i++){
        if (Math.floor(Math.random() < 0.2)){
        if (zombieA[i].x === player.x){
        if (zombieA[i].y > player.y){
            zombieA[i].y--;
            
}       else {
            zombieA[i].y++;
            
}
}       else if (zombieA[i].x > player.x){
            zombieA[i].x--;
                
}       else {
            zombieA[i].x++
                
}
}
}
}


    /*///////////////////////////////////////////////*/

    //functions to see if zombie/cat is close
 
        function catClose(){
            for (i = 0 ; i < cats.length; i++){
            if(player.x === cats[i].x +1 && player.y === cats[i].y){
                var topContainer = document.getElementById('game');
                var catLeft = document.createElement("img");
                catLeft.src = 'images/cats/catclose.png'
                catLeft.id = "catLeft"
                topContainer.appendChild(catLeft);
    }

            else  if(player.x === cats[i].x -1 && player.y === cats[i].y){
                var topContainer = document.getElementById('game');
                var catRight = document.createElement("img");
                catRight.src = 'images/cats/catclose.png'
                catRight.id = "catRight"
                topContainer.appendChild(catRight);
    }
            else  if(player.y === cats[i].y -1 && player.x === cats[i].x){
                var topContainer = document.getElementById('game');
                var catDown = document.createElement("img");
                catDown.src = 'images/cats/catclose.png'
                catDown.id = "catDown"
                topContainer.appendChild(catDown);
    }

            else  if(player.y === cats[i].y +1 && player.x === cats[i].x){
                var topContainer = document.getElementById('game');
                var catUp = document.createElement("img");
                catUp.src = 'images/cats/catclose.png'
                catUp.id = "catUp"
                topContainer.appendChild(catUp);
    }
    }
    }

        function zombieClose(){
            for (i = 0 ; i < zombieA.length; i++){
            if(player.x === zombieA[i].x +1 && player.y === zombieA[i].y){
                var topContainer = document.getElementById('game');
                var dangerLeft = document.createElement("img");
                dangerLeft.src = 'images/danger/dangerLeft.png'
                dangerLeft.id = "dangerLeft"
                topContainer.appendChild(dangerLeft);
    }

            else  if(player.x === zombieA[i].x -1 && player.y === zombieA[i].y){
                var topContainer = document.getElementById('game');
                var dangerRight = document.createElement("img");
                dangerRight.src = 'images/danger/dangerRight.png'
                dangerRight.id = "dangerRight"
                topContainer.appendChild(dangerRight);
    }
            else  if(player.y === zombieA[i].y -1 && player.x === zombieA[i].x){
                var topContainer = document.getElementById('game');
                var dangerDown = document.createElement("img");
                dangerDown.src = 'images/danger/dangerDown.png'
                dangerDown.id = "dangerDown"
                topContainer.appendChild(dangerDown);
    }

            else  if(player.y === zombieA[i].y +1 && player.x === zombieA[i].x){
                var topContainer = document.getElementById('game');
                var dangerUp = document.createElement("img");
                dangerUp.src = 'images/danger/dangerUp.png'
                dangerUp.id = "dangerUp"
                topContainer.appendChild(dangerUp);
    }
    }
    }
    /*///////////////////////////////////////////////*/
  

   
    /*///////////////////////////////////////////////*/

    // resets the players locations and reloads background

        function resetPlayer()
    {
            clearTop();
            loadBackground();
                playerX = Math.floor(arrayColumns / 2);
                playerY = Math.floor(arrayRows / 2);
                player = {
                    x: playerX,
                    y: playerY,
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
                document.getElementById("location").style.display = "block";

    // resets the score when init() is run

                document.getElementById("gameScore").textContent = "0"; 

    // player position

            resetPlayer();
            spawnCats();
            spawnZombies();
            
    }

    // what happens if a zombie gets you

        function losing(){
            for (i = 0; i < zombieA.length; i++){
            if(zombieA[i].x == player.x && zombieA[i].y == player.y){ 
                  

                var topContainer = document.getElementById('game');
                var zombies = document.createElement("img");
                zombies.src = 'images/zombies/zombiechase.png'
                zombies.id = "zombies"
                topContainer.appendChild(zombies);

                var topContainer = document.getElementById('game');
                var gameOver = document.createElement("img");
                gameOver.src = 'images/gameover.png'
                gameOver.id = "gameOver"
                topContainer.appendChild(gameOver);
    }
    }
    }

    // what happens when you find the cat(s)

        function winning(){
            for(i = 0; i < cats.length; i++){
    
            if (cats[i].x == player.x && cats[i].y == player.y){
   
                var topContainer = document.getElementById('game');
                var winning = document.createElement("img");
                winning.src = 'images/winning.png';
                winning.id = "winning"
                topContainer.appendChild(winning);
    }
    }
    }
