var fruits,chips,chocolates;
var player;
var nutella,chocolate, bluechips, yellowchips;
var strawberry, mango, guava, watermelon;
var hand;
var fruitsgroup,chipsgroup,chocolatesgroup;
var gameoverimg,gameover;
var resetbutton,resetbuttonimg;
var fruitcount = 0;
var chipscount = 0;
var score = 0;
var gameState= "Play";

function preload(){
nutella= loadImage("nutella.png");
chocolate= loadImage("choco.png");
bluechips= loadImage("blue.png");
yellowchips= loadImage("yellow.png");
strawberry= loadImage("strawberry.png");
mango= loadImage("mango.png");
guava= loadImage("guava.png");
watermelon= loadImage("wm.png");
background1= loadImage ("bg.jpg");
grabbinghand= loadImage ("grabbing hand.png");
handimg= loadImage ("hand.png");
gameoverimg = loadImage ("gameOver.png");
resetbuttonimg = loadImage ("reset button.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  hand = createSprite(width/2,height/2,50,50);
  hand.addImage("hand",handimg);
  hand.scale = 0.3;
  
  fruitsgroup = new Group ();
  chipsgroup = new Group ();
  chocolatesgroup = new Group ();
  gameover = createSprite(width/2,height/2-100);
  gameover.addImage ("Game Over",gameoverimg);
  resetbutton = createSprite(width/2,height/2+150);
  resetbutton.addImage("Reset",resetbuttonimg)
  resetbutton.scale = 0.5;
}


function draw() {
  background(background1);
  textSize(40);
  fill ("yellow");
  text("What would you choose to eat ? ",width/2-200,50)
  
  textSize(30);
  fill("red");
  text("Fruits : "+ fruitcount,50,50)
  text("Chips : "+ chipscount,200,50)
  text("Score : "+ score,width-200,50)

if (gameState === "Play"){


  hand.x=mouseX;
  hand.y=mouseY;
  gameover.visible=false;
  resetbutton.visible = false;
  if (mousePressedOver(fruits)){
    hand.addImage("hand",grabbinghand )
    fruits.destroy();
    fruitcount+=1;
    score+=10;
    
  }

  else if (mousePressedOver(chocolates)){
    hand.addImage("hand",grabbinghand )
    chocolates.destroy();
    gameState = "end";
  }
  else if (mousePressedOver(chips)){
    hand.addImage("hand",grabbinghand )
    chips.destroy();
    chipscount+=1;
    score-=10;
    
  }
  else{
    hand.addImage("hand",handimg); 
  }
  createchips();
  createchocolates();
  createfruits();
  
}
if (gameState === "end"){
  background(background1);
  gameover.visible=true;
  resetbutton.visible = true;
  fruitsgroup.setVelocityEach(0);
  chocolatesgroup.setVelocityEach(0);
  chipsgroup.setVelocityEach(0);
  fruitsgroup.setLifetimeEach(-1);
  chocolatesgroup.setLifetimeEach(-1);
  chipsgroup.setLifetimeEach(-1);
if (fruitcount>chipscount){
textSize(30)
fill("green")
  text ("You have a heathy diet",width/2-150,height/2)
}
else {
  textSize(30)
fill("red")
  text ("You don't have a heathy diet",width/2-150,height/2)
}
}
if (mousePressedOver(resetbutton)){
reset();
}
  drawSprites();

}

function createfruits(){
if (frameCount % 71===0){
fruits = createSprite((random(20,width-50)),0,50,50)
fruits.velocityY = 15;
var rand = Math.round(random(1,4));
switch(rand){
  case 1:fruits.addImage("strawberry",strawberry);
  break;
  case 2:fruits.addImage("guava",guava);
  break;
  case 3:fruits.addImage("mango",mango);
  break;
  case 4:fruits.addImage("watermelon",watermelon);
  break;
  
}
fruits.scale=0.5;
fruits.lifetime = 100;
fruits.depth=hand.depth;
hand.depth=hand.depth+1;
fruitsgroup.add(fruits);

}
}


function createchips(){
  if (frameCount % 111===0){
  chips = createSprite((random(20,width-50)),0,40,80)
  chips.velocityY = 15;
  var rand = Math.round(random(1,2));
  switch(rand){
    case 1:chips.addImage("yellow",yellowchips);
    break;
    case 2:chips.addImage("blue",bluechips);
    break;
    
    
  }
  chips.scale=0.3;
  chips.lifetime = 100;
  chips.depth=hand.depth;
  hand.depth=hand.depth+1;
  chipsgroup.add(chips);
  
  
  }
  }

  function createchocolates(){
    if (frameCount % 171===0){
    chocolates = createSprite((random(20,width-50)),0,20,20)
    chocolates.velocityY = 15;
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1:chocolates.addImage("nutella",nutella);
      break;
      case 2:chocolates.addImage("choco",chocolate);
      break;
     
      
    }
    chocolates.scale=0.2;
    chocolates.lifetime = 100;
    chocolates.depth=hand.depth;
    hand.depth=hand.depth+1; 
    chocolatesgroup.add(chocolates);
    }
    
    }
    function reset (){
      gameState = "Play";
      gameover.visible=false;
      resetbutton.visble=false;
      fruitsgroup.destroyEach();
      chocolatesgroup.destroyEach();
      chipsgroup.destroyEach();
      chipscount=0;
      score=0;
      fruitcount=0;
    }