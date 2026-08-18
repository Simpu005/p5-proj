<<<<<<< HEAD
function HorizontalMovement(dt, player) {
    let targetSpeed = 0;
    let maxSpeed = 350;

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        targetSpeed = -maxSpeed;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        targetSpeed = maxSpeed;
    }

    player.vel.x = lerp(player.vel.x, targetSpeed, 15 * dt);

}

// function DebugControl(){
//     if(keyIsDown(80)) {
//         console.log(5765);
//         player.vel.mult(0);
//     }
// }

// jump
function keyPressed() {
    if (key === ' ' && player.isGrounded) {
        player.vel.y = -jumpStrength;
        player.isGrounded = false;
    }
    if(key === 'c') {
        player.pos.y -= 200;
        player.h = 165;
        player.w = 40;
    } else if(key === 'v') {
        player.h = 20;
        player.w = 20;
    }
=======
function HorizontalMovement(dt, player) {
    let targetSpeed = 0;
    let maxSpeed = 350;

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        targetSpeed = -maxSpeed;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        targetSpeed = maxSpeed;
    }

    player.vel.x = lerp(player.vel.x, targetSpeed, 15 * dt);

}

// function DebugControl(){
//     if(keyIsDown(80)) {
//         console.log(5765);
//         player.vel.mult(0);
//     }
// }

// jump
function keyPressed() {
    if (key === ' ' && player.isGrounded) {
        player.vel.y = -jumpStrength;
        player.isGrounded = false;
    }
    if(key === 'c') {
        player.pos.y -= 200;
        player.h = 165;
        player.w = 40;
    } else if(key === 'v') {
        player.h = 20;
        player.w = 20;
    }
>>>>>>> 98b3e8fc83d562139567f2725510c352295b9ed5
}