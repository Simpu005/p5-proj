<<<<<<< HEAD
class World {
    constructor() {
        this.walls = [];
        this.platforms = [];
        this.movingPlatforms = [];
        this.fallHazards = [];
        this.triggers = [];
        this.movingDoors = [];
        this.player;
        this.dt = 0.05;
    }
    addPlayer(player) {
        this.player = player;
    }
    addWalls(walls){
        this.walls = walls;
    }
    addPlatforms(platforms){
        this.platforms = platforms;
    }
    addFallHazards(hazards){
        this.fallHazards = hazards;
    }
    addTriggers(triggers){
        this.triggers = triggers;
    }
    pushTrigger(trigger){
        this.triggers.push(trigger);
    }
    addMovingPlatforms(movingPlatforms){
        this.movingPlatforms = movingPlatforms;
    }
    addMovingDoor(movingDoors){
        this.movingDoors = movingDoors;
    }
    update() {

        this.dt = Math.min(deltaTime / 1000, 0.05);

        HorizontalMovement(this.dt, this.player);

        this.player.update(this.dt);
        
        this.player.isGrounded = false;
        
        this.movingPlatforms.forEach(movingPlatform => movingPlatform.update(this.dt, this.player));
        this.movingDoors.forEach(movingDoor => movingDoor.update(this.dt, this.player));
        
        [...this.walls, ...this.platforms].forEach(obstacle => {
            let hit = resolveCollision(this.player, obstacle);
            if (hit.hitTop) {
                this.player.isGrounded = true;
            }
        });

        this.fallHazards.forEach(fallHazard => {
            if (detectCollision(this.player, fallHazard)) {
                this.player.respawn();
                window.location.reload();
            }
        });

        this.triggers.forEach((trigger, index) => {
            if (detectCollision(this.player, trigger)) {
                if(trigger.id === 'tr1') {
                    this.player.pos.y -= 60;
                    this.player.h = 120;
                }
                if(trigger.id === 'tr2') {
                    this.player.h = 20;
                    this.player.pos.y -= 20;
                }
                if(trigger.id === 'tr3') {
                    this.pushTrigger(level.hiddenTriggers[0]);
                    this.player.w = 40;
                }
                if(trigger.id === 'tr4') {
                    this.pushTrigger(level.hiddenTriggers[1]);
                    this.player.w = 20;
                }
                if(trigger.id === 'tr5') {
                    this.movingDoors.forEach(movingDoor => movingDoor.id == 'dr1' && movingDoor.open());
                    this.pushTrigger(level.hiddenTriggers[2]);
                }
                if(trigger.id === 'tr6'){
                    this.movingDoors.forEach(movingDoor => movingDoor.id == 'dr1' && movingDoor.close());
                    this.pushTrigger(level.hiddenTriggers[3]);
                }
                if(trigger.id === 'tr7') {
                    this.movingDoors.forEach(movingDoor => movingDoor.id == 'dr2' && movingDoor.open());
                    this.pushTrigger(level.hiddenTriggers[4]);
                }
                if(trigger.id === 'tr8') {
                    window.alert("Congratulations !!");
                    window.location.reload();
                }
                this.triggers.splice(index, 1);
            }
        });
        

    }

    render() {
        this.player.draw();
        this.movingPlatforms.forEach(movingPlatform => movingPlatform.draw());
        this.fallHazards.forEach(fallHazard => fallHazard.draw());
        this.platforms.forEach(platform => platform.draw());
        this.movingDoors.forEach(door => door.draw());
        this.walls.forEach(wall => wall.draw());
        this.triggers.forEach(trigger => trigger.draw());
    }
=======
class World {
    constructor() {
        this.walls = [];
        this.platforms = [];
        this.movingPlatforms = [];
        this.fallHazards = [];
        this.triggers = [];
        this.movingDoors = [];
        this.player;
        this.dt = 0.05;
    }
    addPlayer(player) {
        this.player = player;
    }
    addWalls(walls){
        this.walls = walls;
    }
    addPlatforms(platforms){
        this.platforms = platforms;
    }
    addFallHazards(hazards){
        this.fallHazards = hazards;
    }
    addTriggers(triggers){
        this.triggers = triggers;
    }
    pushTrigger(trigger){
        this.triggers.push(trigger);
    }
    addMovingPlatforms(movingPlatforms){
        this.movingPlatforms = movingPlatforms;
    }
    addMovingDoor(movingDoors){
        this.movingDoors = movingDoors;
    }
    update() {

        this.dt = Math.min(deltaTime / 1000, 0.05);

        HorizontalMovement(this.dt, this.player);

        this.player.update(this.dt);
        
        this.player.isGrounded = false;
        
        this.movingPlatforms.forEach(movingPlatform => movingPlatform.update(this.dt, this.player));
        this.movingDoors.forEach(movingDoor => movingDoor.update(this.dt, this.player));
        
        [...this.walls, ...this.platforms].forEach(obstacle => {
            let hit = resolveCollision(this.player, obstacle);
            if (hit.hitTop) {
                this.player.isGrounded = true;
            }
        });

        this.fallHazards.forEach(fallHazard => {
            if (detectCollision(this.player, fallHazard)) {
                this.player.respawn();
                window.location.reload();
            }
        });

        this.triggers.forEach((trigger, index) => {
            if (detectCollision(this.player, trigger)) {
                if(trigger.id === 'tr1') {
                    this.player.pos.y -= 60;
                    this.player.h = 120;
                }
                if(trigger.id === 'tr2') {
                    this.player.h = 20;
                    this.player.pos.y -= 20;
                }
                if(trigger.id === 'tr3') {
                    this.pushTrigger(level.hiddenTriggers[0]);
                    this.player.w = 40;
                }
                if(trigger.id === 'tr4') {
                    this.pushTrigger(level.hiddenTriggers[1]);
                    this.player.w = 20;
                }
                if(trigger.id === 'tr5') {
                    this.movingDoors.forEach(movingDoor => movingDoor.id == 'dr1' && movingDoor.open());
                    this.pushTrigger(level.hiddenTriggers[2]);
                }
                if(trigger.id === 'tr6'){
                    this.movingDoors.forEach(movingDoor => movingDoor.id == 'dr1' && movingDoor.close());
                    this.pushTrigger(level.hiddenTriggers[3]);
                }
                if(trigger.id === 'tr7') {
                    this.movingDoors.forEach(movingDoor => movingDoor.id == 'dr2' && movingDoor.open());
                    this.pushTrigger(level.hiddenTriggers[4]);
                }
                if(trigger.id === 'tr8') {
                    window.alert("Congratulations !!");
                    window.location.reload();
                }
                this.triggers.splice(index, 1);
            }
        });
        

    }

    render() {
        this.player.draw();
        this.movingPlatforms.forEach(movingPlatform => movingPlatform.draw());
        this.fallHazards.forEach(fallHazard => fallHazard.draw());
        this.platforms.forEach(platform => platform.draw());
        this.movingDoors.forEach(door => door.draw());
        this.walls.forEach(wall => wall.draw());
        this.triggers.forEach(trigger => trigger.draw());
    }
>>>>>>> 98b3e8fc83d562139567f2725510c352295b9ed5
}