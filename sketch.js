var catImg;
var miceImg;
var pathImg;
var PLAY = 1;
var gameState = PLAY;




function preload(){
  catImg = loadAnimation("c2.png");
  miceImg = loadAnimation("m1.png");
  pathImg = loadImage("images/garden.png");
}

function setup(){
  createCanvas(600,600); 
  
  path = createSprite(400,300);
  path.addImage(pathImg);

  cat=createSprite(450,500);
  cat.addAnimation("Running",catImg);
  
  
  
  mice = createSprite(50,500); 
  mice.addAnimation("Running",miceImg);
 
 

  cat.setCollider("circle",0,0,40);
  cat.debug = false;

}



function draw(){
  background(0);
  
  if(mice.isTouching(cat)) {
    mice.velocityY = -3;
  
}
  
  if(gameState === PLAY){
    cat.velocityX = -3;
  
    

    edges= createEdgeSprites();
    cat.collide(edges);
    mice.collide(edges);
  cat.bounceOff(mice);
  mice.bounceOff(cat);

 


    }
    
  drawSprites();
}


