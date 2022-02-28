

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  energydrinkImg = loadImage("energydrink.png");
  powerImg = loadImage("power.png");
  bombImg = loadImage("bomb.png")
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("Running",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createcoin();
    createenergydrink();
    createpower();
    createbomb();

    if (coin.isTouching(boy)) {
      coin.destroyEach();
      score=score+50;
    }
    else if (energydrink.isTouching(boy)) {
      energydrink.destroyEach();
      score=score+100;
      
    }else if(power.isTouching(boy)) {
      power.destroyEach();

      
       score= score + 150;
      
    }else{
      if(bomb.isTouching(boy)) {
        gameState=END;
        
       
         coin.destroyEach;
         energydrink.destroyEach;
         power.destroyEach;
         

       
        
        coin.setVelocityYEach(0);
        power.setVelocityYEach(0);
        energydrink.setVelocityYEach(0);
        
        
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("score: "+ score,10,30);
  }

}

function createCoin() {
  if (World.frameCount % 200 == 0) {
  var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
  coin.addImage(coinImg);
  coin.scale=0.12;
  coin.velocityY = 3;
  coin.lifetime = 150;
  coin.add(coin);
  }
}

function createenergydrink() {
  if (World.frameCount % 320 == 0) {
  var energydrink = createSprite(Math.round(random(50, 350),40, 10, 10));
  energydrink.addImage(energydrinkImg);
  energydrink.scale=0.03;
  energydrink.velocityY = 3;
  energydrink.lifetime = 150;
  energydrink.add(energydrink);
}
}

