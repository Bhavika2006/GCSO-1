var speed,weight

var car,wall


function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,70,30);
  car.shapeColor = "white";
  wall = createSprite(1500,200,30,height/2)
  speed = random(55,90)
  car.velocityX = speed;
 weight = random(400,1500)
}

function draw() {
  background("black"); 
  
  
  if(wall.x-car.x <= (wall.width+car.width)/2){
    car.velocityX = 0;
    var deformation = speed*0.5*speed*weight/22500
    
    if(deformation<100){
      car.shapeColor = color(255,0,0);
    }
    if(deformation>100 && deformation<180){
      car.shapeColor = color(230,230,0);
    }
    if(deformation>180){
      car.shapeColor = color(0,255,0);
    }
    

  }
  drawSprites();
}