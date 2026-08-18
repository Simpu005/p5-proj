<<<<<<< HEAD

function detectCollision(rectA, rectB) {
    let AisToTheRightOfB = (rectA.pos.x - rectA.w / 2) >= (rectB.pos.x + rectB.w / 2);
    let AisToTheLeftOfB = (rectA.pos.x + rectA.w / 2) <= (rectB.pos.x - rectB.w / 2);
    let AisAboveB = (rectA.pos.y + rectA.h / 2) <= (rectB.pos.y - rectB.h / 2);
    let AisBelowB = (rectA.pos.y - rectA.h / 2) >= (rectB.pos.y + rectB.h / 2);

    return !(AisToTheRightOfB || AisToTheLeftOfB || AisAboveB || AisBelowB);
}

function resolveCollision(rectA, rectB) {
    let isColliding = detectCollision(rectA, rectB);
    
    // track of where the collision occurred
    let collisionInfo = { hitTop: false, hitBottom: false, hitLeft: false, hitRight: false };

    if (!isColliding) return collisionInfo;

    let halfW = (rectA.w + rectB.w) / 2;
    let halfH = (rectA.h + rectB.h) / 2;

    let dx = rectA.pos.x - rectB.pos.x;
    let dy = rectA.pos.y - rectB.pos.y;

    let xOverlap = halfW - Math.abs(dx);
    let yOverlap = halfH - Math.abs(dy);

    if (xOverlap < yOverlap) {
        if (dx > 0) {
            rectA.pos.x += xOverlap; // push right
            collisionInfo.hitLeft = true;
        } else {
            rectA.pos.x -= xOverlap; // push left
            collisionInfo.hitRight = true;
        }
        rectA.vel.x = 0;
    } else {
        if (dy > 0) {
            rectA.pos.y += yOverlap; // push down
            collisionInfo.hitBottom = true;
        } else {
            rectA.pos.y -= yOverlap; // push up
            collisionInfo.hitTop = true;
        }
        rectA.vel.y = 0;
    }

    return collisionInfo;
}
=======

function detectCollision(rectA, rectB) {
    let AisToTheRightOfB = (rectA.pos.x - rectA.w / 2) >= (rectB.pos.x + rectB.w / 2);
    let AisToTheLeftOfB = (rectA.pos.x + rectA.w / 2) <= (rectB.pos.x - rectB.w / 2);
    let AisAboveB = (rectA.pos.y + rectA.h / 2) <= (rectB.pos.y - rectB.h / 2);
    let AisBelowB = (rectA.pos.y - rectA.h / 2) >= (rectB.pos.y + rectB.h / 2);

    return !(AisToTheRightOfB || AisToTheLeftOfB || AisAboveB || AisBelowB);
}

function resolveCollision(rectA, rectB) {
    let isColliding = detectCollision(rectA, rectB);
    
    // track of where the collision occurred
    let collisionInfo = { hitTop: false, hitBottom: false, hitLeft: false, hitRight: false };

    if (!isColliding) return collisionInfo;

    let halfW = (rectA.w + rectB.w) / 2;
    let halfH = (rectA.h + rectB.h) / 2;

    let dx = rectA.pos.x - rectB.pos.x;
    let dy = rectA.pos.y - rectB.pos.y;

    let xOverlap = halfW - Math.abs(dx);
    let yOverlap = halfH - Math.abs(dy);

    if (xOverlap < yOverlap) {
        if (dx > 0) {
            rectA.pos.x += xOverlap; // push right
            collisionInfo.hitLeft = true;
        } else {
            rectA.pos.x -= xOverlap; // push left
            collisionInfo.hitRight = true;
        }
        rectA.vel.x = 0;
    } else {
        if (dy > 0) {
            rectA.pos.y += yOverlap; // push down
            collisionInfo.hitBottom = true;
        } else {
            rectA.pos.y -= yOverlap; // push up
            collisionInfo.hitTop = true;
        }
        rectA.vel.y = 0;
    }

    return collisionInfo;
}
>>>>>>> 98b3e8fc83d562139567f2725510c352295b9ed5
