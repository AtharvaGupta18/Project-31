// name spacing Matter.js commands
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//creating arrays
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
	// creating canvas
	createCanvas(480, 800);

	//creating engine
	engine = Engine.create();
	world = engine.world;

	// creating divisions
	for(var i = 0; i <= width; i = i + 80){
		divisions.push(new Division(i, height - divisionHeight/2, 10, divisionHeight*2.2));
	}

	// creating plinkos
	for (var j = 40; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,25));
    }

    for (var j = 15; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,100));
    }

     for (var j = 40; j <=width; j=j+50) {
    	plinkos.push(new Plinko(j,175));
    }

     for (var j = 15; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,250));
    }

	// creating ground
	ground = new Ground();

}

function draw() {
	// making background to black
	background(0, 180, 0); 

	// updating engine with every frame
	Engine.update(engine);
	
	// creating particles after every 60 frames
	if(frameCount % 15 === 0){
		particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
	}

	// displaying divisions
	for (var k = 0; k < divisions.length; k++) {
		divisions[k].display();
	}

	// displaying plinkos
	for (var i = 0; i < plinkos.length; i++) {
		plinkos[i].display();
	}
	
	//displaying particles
	for (var j = 0; j < particles.length; j++) {
		particles[j].display();
	}

	//displaying ground
	ground.display();

}