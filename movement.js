function HorizontalMovement(dt, player) {
    let targetSpeed = 0;
    let maxSpeed = 350;

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65) || touchLeft) {
        targetSpeed = -maxSpeed;

    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68) || touchRight) {
        targetSpeed = maxSpeed;
    }

    player.vel.x = lerp(player.vel.x, targetSpeed, 15 * dt);
}


// DEV CHEATS — keyboard only
function keyPressed() {
    if (key === ' ' && player.isGrounded) {
        player.vel.y = -jumpStrength;
        player.isGrounded = false;
    }

    // DEV CHEAT: C
    if (key === 'c') {
        player.pos.y -= 200;
        player.h = 165;
        player.w = 40;
    }

    // DEV CHEAT: V
    else if (key === 'v') {
        player.h = 20;
        player.w = 20;
    }
}


function createTouchControls() {

    console.log("createTouchControls");
    
    // LEFT
    let leftButton = createButton("◀");
    leftButton.position(30, height + 80);
    leftButton.size(80, 70);
    
    leftButton.touchStarted(() => {
        console.log("createTouchControls");
        touchLeft = true;
        return false;
    });
    
    leftButton.touchEnded(() => {
        console.log("createTouchControls");
        touchLeft = false;
        return false;
    });


    // RIGHT
    let rightButton = createButton("▶");
    rightButton.position(125, height + 80);
    rightButton.size(80, 70);

    rightButton.touchStarted(() => {
        touchRight = true;
        return false;
    });

    rightButton.touchEnded(() => {
        touchRight = false;
        return false;
    });


    // JUMP
    let jumpButton = createButton("JUMP");
    jumpButton.position(width - 130, height + 80);
    jumpButton.size(100, 70);

    jumpButton.touchStarted(() => {

        console.log("jumped touch");

        if (player.isGrounded) {
            player.vel.y = -jumpStrength;
            player.isGrounded = false;
        }

        return false;
    });
}