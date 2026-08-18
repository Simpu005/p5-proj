let player;

let worldGravity = 1500; 
let jumpStrength = 550;

let world;
let level;


function setup() {
    createCanvas(930, 700);

    world = new World();

    
    // player = new Player(createVector(70+150, 610-200), 20, 20);
    // player = new Player(createVector(450+340+10-50, 50+50+10+150-10+180+10-100), 20, 20);
    // player = new Player(createVector(160, 50+50+10+150-10+150+10-300), 20, 20);
    player = new Player(createVector(130, 610), 20, 20);
    
    level = level1();

    world.addWalls(level.walls);
    world.addPlatforms(level.platforms);
    world.addFallHazards(level.fallHazards);
    world.addTriggers(level.triggers);
    world.addMovingPlatforms(level.movingPlatforms);
    world.addMovingDoor(level.movingDoors);

    world.addPlayer(player);
}

function draw() {
    background(13, 2, 1);

    world.update();
    world.render();
    // DebugControl();
}
