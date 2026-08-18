
class Player extends Rectangle {
    constructor(pos, w, h, fillColor) {
        super(pos, w, h, fillColor);
        this.vel = createVector(0, 0);
        this.fillColor = color(0, 0, 255);
        this.isGrounded = false;
    }

    respawn() {
        this.pos = createVector(70, 610);
        this.vel = createVector(0, 0);
    }
    
    update(dt) {
        this.vel.y += 1500 * dt;
        
        // terminal velocity
        if (this.vel.y > 800) {
            this.vel.y = 800;
        }

        this.pos.x += this.vel.x * dt;
        this.pos.y += this.vel.y * dt;
    }
}

class MovingPlatform extends Rectangle {
    constructor(pos, w, h, end, speed, type = 'normal', id) {
        super(pos, w, h, type, id);
        this.id = id;
        this.start = p5.Vector.copy(pos);
        this.end = end;
        this.speed = speed;
        this.direction = p5.Vector.sub(this.end, this.pos).normalize();
    }

    update(dt, player) {
        // Implementation for moving platform movement
        let movement = p5.Vector.mult(this.direction, this.speed * dt);
        this.pos.add(movement);
        if(detectCollision(player, this)) {
            let hit = resolveCollision(player, this);
            if(hit.hitTop) player.isGrounded = true;
            player.pos.add(movement);
        }

        if(p5.Vector.dist(this.pos, this.start) > p5.Vector.dist(this.end, this.start)) {
            // Reverse direction
            let temp = this.start;
            this.start = this.end;
            this.end = temp;
            this.direction.mult(-1);
        }
    }
}

class MovingDoor extends Rectangle {
    constructor(pos, w, h, end, speed, type = 'normal', id) {
        super(pos, w, h, type, id);
        this.id = id;
        this.start = p5.Vector.copy(pos);
        this.end = end;
        this.speed = speed;
        this.direction = p5.Vector.sub(this.end, this.pos).normalize();
        this.isOpening = false;
        this.isClosing = false;
    }

    open() {
        this.isOpening = true;
    }
    
    close() {
        this.isClosing = true;
    }
    
    update(dt, player) {
        if(this.isOpening) {
            let movement = p5.Vector.mult(this.direction, this.speed * dt);
            this.pos.add(movement);

            if(p5.Vector.dist(this.pos, this.end) < 2) this.isOpening = false;
        }
        if(this.isClosing) {
            let movement = p5.Vector.mult(p5.Vector.mult(this.direction, -1), this.speed * 0.8 * dt);
            this.pos.add(movement);

            if(p5.Vector.dist(this.pos, this.start) < 2) this.isClosing = false;
        }
        if(detectCollision(player, this)) {
            let hit = resolveCollision(player, this);
            if(hit.hitTop) player.isGrounded = true;
        }
    }
}
