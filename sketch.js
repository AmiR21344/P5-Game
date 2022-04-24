let myXPos = 100;
let myYPos = 270;
let enemyXPos = 1500;
let enemyYPos = 400;
let enemySpeedValue = 15;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let fimg;
let ikimg;
let ikdimg;
let ylimg;
let changeButton = document.querySelector("#change-button");


function preload(){
    ikimg = loadImage("images/akuma.gif");
    ikdimg = loadImage("images/Street back.jpg");
    ylimg = loadImage("images/GAMEOVER.jpg");
     
//if (jump = 2){
    fimg = loadImage("images/sean-jump.png");
}

    
//else {
   // fimg = loadImage("images/sean-jump.gif");
//};
//}

function setup() {
    createCanvas(1500, 700);
    ellipseMode(CENTER);
}

let jump = 0;

let gameOver = 0;

function draw() {
    background(ylimg);
   
    
        
        
    if (gameOver == 0) {
        
        myLeft = myXPos - 100
        myRight = myXPos + 100;
        myTop = myYPos - 100;
        myBottom = myYPos + 100;

        enemyLeft = enemyXPos - 100;
        enemyRight = enemyXPos + 100;
        enemyTop = enemyYPos - 100;
        enemyBottom = enemyYPos + 100;
       
        
        
        
        if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop){
            
        
        } else {
            gameOver = -1
            
        }

        ellipse(enemyXPos, enemyYPos, 172, 374);
        ellipse(myXPos, myYPos, 172, 374);
        background(ikdimg);
        image(fimg,myXPos,myYPos,172,374);
        image(ikimg,enemyXPos,enemyYPos,226,244);
        

        
        

        if (myYPos > -10 && jump == 1) {

            myYPos -= 7;
            
         

            if (myYPos <= -10) {

                jump = 2
                
            }

            //myYPos = 400;

        } 
        
        if (jump == 2) {

            if (myYPos <= 270) {

                myYPos += 7

            } else {

                jump = 0;

            }

        }
        
    
        enemyXPos -= enemySpeedValue;
        
        if (enemyXPos < -100) {

            enemyXPos = 1500;

        }

    } 
    
}



function mouseClicked() {

    if (jump == 0) {

        jump = 1;

    }

}
