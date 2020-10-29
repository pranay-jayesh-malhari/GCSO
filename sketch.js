var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,60,width/2);

  speed = random(50,90);
  weight= random(400,1500);

  car.velocityX = speed;
}

function draw() {

  background(0); 
  deformation = 0.5*weight*speed*speed/22500
  if(car.isTouching(wall)){

    car.velocityX=0
  if(deformation>180){
    car.shapeColor=rgb(255,0,0)
  }

  if(deformation<180 && deformation>100){

    car.shapeColor=rgb(230,230,0)
  }
  
  if(deformation<100){

    car.shapeColor=rgb(0,255,0)
  }

  }
  drawSprites();

}