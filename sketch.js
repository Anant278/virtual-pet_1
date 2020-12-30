//Create variables here
var dog, happy_dog;
var dog_img;
var database, foodS, foodStock;

function preload()
{
  dog_img = loadImage("images/dogImg.png");
  happy_dog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);

  dog = createSprite(400, 350, 30, 30);
  dog.addImage(dog_img);
  dog.scale = 0.2;

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}

function draw() {
  background("green");

  //Feed
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happy_dog);
  }

  drawSprites();
  fill("black");
  textSize(20);
  text("Press UP_ARROW to feed the dog", 260, 100);
}

function readStock(data){
    foodS = data.val();
}

function writeStock(x){
    if(x <= 0){
      x = 0;
    }
    else{
      x = x + 1;
    }

    database.ref('/').update({
      Food: x
    })
}