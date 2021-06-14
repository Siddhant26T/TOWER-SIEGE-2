const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box12,box13,box11,box12,box13,box14,box15,box16;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block12,block13,block11,block12,block13,block14,block15,block16;
var polygon,polygonIMG;
var slingShot;
var score = 0;

function preload() 
{
   polygonIMG = loadImage('polygon.png');
}
function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
    //polygon body
    polygon = Bodies.circle(800,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:600,y:200});

    ground = new Ground(600,400,1200,40);
    // fourth level
    box10 = new Box(130,375,30,40);
    box11 = new Box(160,375,30,40);
    box12 = new Box(190,375,30,40);
    box13 = new Box(220,375,30,40);
    box14 = new Box(250,375,30,40);
    box15 = new Box(100,375,30,40);
    box16 = new Box(280,375,30,40);
    // third level
    box1 = new Box2(130,335,30,40);
    box2 = new Box2(160,335,30,40);
    box3 = new Box2(190,335,30,40);
    box4 = new Box2(220,335,30,40);
    box5 = new Box2(250,335,30,40);
    // second level
    box6 = new Box(160,295,30,40);
    box7 = new Box(190,295,30,40);
    box8 = new Box(220,295,30,40);
    // top level
    box9 = new Box2(190,255,30,40);
    
    // 2nd dome
    // fourth level
    block10 = new Box2(930,375,30,40);
    block11 = new Box2(960,375,30,40);
    block12 = new Box2(990,375,30,40);
    block13 = new Box2(1020,375,30,40);
    block14 = new Box2(1050,375,30,40);
    block15 = new Box2(900,375,30,40);
    block16 = new Box2(1080,375,30,40);
    // third level
    block1 = new Box(930,335,30,40);
    block2 = new Box(960,335,30,40);
    block3 = new Box(990,335,30,40);
    block4 = new Box(1020,335,30,40);
    block5 = new Box(1050,335,30,40);
    // second level
    block6 = new Box2(960,295,30,40);
    block7 = new Box2(990,295,30,40);
    block8 = new Box2(1020,295,30,40);
    // top level
    block9 = new Box(990,255,30,40);
    Engine.run(engine);
   
}
function draw()
{
    rectMode (CENTER);
    background("blue");
    Engine.update(engine);
    strokeWeight(5);
    fill ("white");
    strokeWeight(5);
    text("score:" + score,600,50);
     
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    //2nd dome display functions
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    //polygon.display();
    slingShot.display();

    imageMode(CENTER);
    image(polygonIMG,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged()
{
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
    slingShot.fly();
}
function keyPressed()
{
     if(keyCode === 32) {
         slingShot.attach(this.polygon);
     }
    }
