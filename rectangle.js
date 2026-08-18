<<<<<<< HEAD
class Rectangle {
    constructor(pos, w, h, type = 'normal', id) {
        this.pos = pos;
        this.w = w;
        this.h = h;
        this.type = type; // 'normal', 'hot', 'mossy', 'ice', 'lava'
        this.id = id;
    }

    draw() {
        push();
        translate(this.pos.x, this.pos.y);
        rectMode(CENTER);

        switch (this.type) {
            case 'hot':
                this.drawHot();
                break;
            case 'mossy':
                this.drawMossy();
                break;
            case 'ice':
                this.drawIce();
                break;
            case 'lava':
                this.drawLava();
                break;
            case 'trigger':
                this.drawTrigger();
                break;
            case 'n2':
                this.drawNormal2();
                break;
            case 'normal':
            default:
                this.drawNormal();
                break;
        }

        pop();
    }

    drawNormal() {
        // Base, Bevel, Left Shadow, Bottom Shadow, Cracks, Small Pixels
        this.drawStoneHelper([75, 80, 90], [120, 125, 135], [55, 60, 70], [45, 48, 58], [45, 48, 58], [95, 100, 110]);
    }

    drawNormal2() {
         // Deep charcoal-brown cave stone
        this.drawStoneHelper(
        [52, 56, 64],     // Base - deep slate
        [88+50, 94+50, 105+50],    // Bevel - muted cool highlight
        [38, 41, 48],     // Left shadow
        [30, 33, 40],     // Bottom shadow
        [34, 37, 44],     // Cracks
        [70, 75, 85]      // Small stone pixels
    );
    }

    drawHot() {
        // Scorched reddish-dark-brown stone for volcanic areas
        this.drawStoneHelper([70, 40, 40], [110, 60, 50], [50, 25, 25], [40, 20, 20], [40, 20, 20], [90, 50, 50]);
    }

 drawMossy() {
    // =========================================================
    // DARK CAVE STONE
    // =========================================================

    this.drawStoneHelper(
        [52, 42, 40],     // Base - dark earthy stone
        [78, 62, 56],     // Bevel - faint warm light
        [36, 28, 26],     // Left shadow
        [28, 21, 19],     // Bottom shadow
        [42, 33, 30],     // Cracks
        [72, 61, 54]      // Small stone pixels
    );


    // =========================================================
    // SUBTLE ANIMATION
    // =========================================================

    let t = millis() * 0.0015;

    // Very slow pulse: 0 -> 1 -> 0
    let pulse = (sin(t + this.pos.x * 0.015) + 1) * 0.5;


    // =========================================================
    // VERY THIN MOSS LAYER
    // =========================================================

    noStroke();

    // Moss slowly changes brightness.
    // Keep the range dark so it doesn't look like bright grass.
    let mossR = 38 + pulse * 5;
    let mossG = 48 + pulse * 8;
    let mossB = 32 + pulse * 4;

    fill(mossR, mossG, mossB);

    rect(
        0,
        -this.h / 2 + 4,
        this.w - 8,
        4
    );


    // =========================================================
    // SMALL IRREGULAR MOSS PATCHES
    // =========================================================

    // Slightly darker moss
    fill(31, 42, 28);

    // Left patch
    rect(
        -this.w * 0.30,
        -this.h / 2 + 7,
        8,
        6
    );

    // Small center patch
    rect(
        this.w * 0.08,
        -this.h / 2 + 6,
        5,
        5
    );

    // Right patch
    rect(
        this.w * 0.34,
        -this.h / 2 + 7,
        7,
        7
    );


    // =========================================================
    // TINY MOSS DROPS
    // =========================================================

    // Almost static — only a tiny 1px breathing movement.
    let drip1 = sin(t * 0.7 + this.pos.x * 0.02) * 0.5;
    let drip2 = sin(t * 0.5 + 2.0) * 0.4;

    fill(34, 46, 29);

    rect(
        -this.w * 0.29,
        -this.h / 2 + 10 + drip1,
        4,
        7
    );

    rect(
        this.w * 0.34,
        -this.h / 2 + 11 + drip2,
        5,
        8
    );


    // =========================================================
    // TINY MOSS HIGHLIGHTS
    // =========================================================

    // These gently brighten/dim with the pulse.
    fill(
        70 + pulse * 12,
        82 + pulse * 15,
        43 + pulse * 7
    );

    rect(
        -this.w * 0.31,
        -this.h / 2 + 3,
        4,
        2
    );

    rect(
        this.w * 0.08,
        -this.h / 2 + 3,
        3,
        2
    );


    // =========================================================
    // TINY CAVE SPORE / LIGHT SPECKS
    // =========================================================

    // Extremely subtle.
    // They shouldn't look like fireflies.
    let speckPulse = (sin(t * 1.2 + this.pos.x * 0.03) + 1) * 0.5;

    if (speckPulse > 0.65) {
        fill(
            105 + speckPulse * 30,
            115 + speckPulse * 30,
            55 + speckPulse * 15
        );

        rect(
            -this.w * 0.18,
            -this.h / 2 - 5,
            2,
            2
        );
    }

    if (speckPulse < 0.25) {
        fill(90, 100, 48);

        rect(
            this.w * 0.27,
            -this.h / 2 - 4,
            2,
            2
        );
    }
}
    
    drawTrigger() {
    // =========================================================
    // GROWTH TRIGGER
    // Warm, welcoming stone with a small glowing growth core.
    // =========================================================

    // ---------------------------------------------------------
    // 1. Warm volcanic stone body
    // ---------------------------------------------------------
    fill(75, 45, 38);
    stroke(35, 24, 24);
    strokeWeight(4);
    rect(0, 0, this.w, this.h);

    noStroke();

    // ---------------------------------------------------------
    // 2. Warm bevel
    // ---------------------------------------------------------
    fill(115, 70, 50);
    rect(
        0,
        -this.h / 2 + 3,
        this.w - 7,
        5
    );

    // Left shadow
    fill(55, 32, 30);
    rect(
        -this.w / 2 + 4,
        2,
        5,
        this.h - 8
    );

    // Bottom shadow
    fill(45, 27, 27);
    rect(
        0,
        this.h / 2 - 4,
        this.w - 8,
        5
    );

    // ---------------------------------------------------------
    // 3. Small recessed center
    // ---------------------------------------------------------
    fill(55, 40, 30);

    rect(
        0,
        0,
        this.w - 12,
        this.h - 12
    );

    // ---------------------------------------------------------
    // 4. Soft breathing animation
    // ---------------------------------------------------------
    let breathe = sin(frameCount * 0.035) * 1.5;

    // ---------------------------------------------------------
    // 5. Warm golden aura
    // ---------------------------------------------------------
    fill(185, 145, 55);

    rect(
        0,
        breathe,
        this.w * 0.55,
        this.h * 0.55
    );

    // ---------------------------------------------------------
    // 6. Growth-colored core
    // ---------------------------------------------------------
    fill(180, 205, 80);

    rect(
        0,
        breathe,
        this.w * 0.36,
        this.h * 0.36
    );

    // ---------------------------------------------------------
    // 7. Soft golden center
    // ---------------------------------------------------------
    fill(245, 215, 105);

    rect(
        0,
        breathe,
        this.w * 0.18,
        this.h * 0.18
    );

    // ---------------------------------------------------------
    // 8. Simple "growth" shape
    // ---------------------------------------------------------
    fill(205, 225, 100);

    // Stem
    rect(
        0,
        breathe + this.h * 0.12,
        3,
        this.h * 0.20
    );

    // Left leaf
    rect(
        -this.w * 0.10,
        breathe - this.h * 0.02,
        this.w * 0.15,
        this.h * 0.08
    );

    // Right leaf
    rect(
        this.w * 0.10,
        breathe - this.h * 0.02,
        this.w * 0.15,
        this.h * 0.08
    );

    // ---------------------------------------------------------
    // 9. Tiny warm highlights
    // ---------------------------------------------------------
    fill(235, 180, 70);

    rect(
        -this.w * 0.32,
        -this.h * 0.28,
        4,
        3
    );

    rect(
        this.w * 0.30,
        this.h * 0.25,
        4,
        3
    );

    // ---------------------------------------------------------
    // 10. Tiny stone imperfections
    // ---------------------------------------------------------
    fill(100, 55, 40);

    rect(
        -this.w * 0.30,
        this.h * 0.30,
        5,
        3
    );

    rect(
        this.w * 0.32,
        -this.h * 0.25,
        4,
        3
    );
}

    drawIce() {
        // Light blues and cyans. The "cracks" are replaced with bright white colors to act as reflections/glints
        this.drawStoneHelper([140, 200, 240], [210, 240, 255], [100, 170, 210], [80, 140, 180], [230, 250, 255], [180, 220, 250]);
    }

    drawLava() {
        // 1. Dark red magma base
        fill(180, 40, 10);
        stroke(60, 10, 10);
        strokeWeight(4);
        rect(0, 0, this.w, this.h);

        noStroke();

        // 2. Animated bubbling lava shapes using p5's global frameCount
        let wave1 = sin(frameCount * 0.05) * 4;
        let wave2 = cos(frameCount * 0.04) * 4;
        let wave3 = sin(frameCount * 0.06 + 2) * 4;

        // Orange mid-tones
        fill(240, 110, 10);
        rect(-this.w * 0.25, wave1, this.w * 0.4, this.h * 0.5);
        rect(this.w * 0.25, wave2, this.w * 0.3, this.h * 0.6);
        rect(0, wave3, this.w * 0.2, this.h * 0.4);

        // Yellow hot centers
        fill(255, 200, 20);
        rect(-this.w * 0.25, wave1, this.w * 0.2, this.h * 0.25);
        rect(this.w * 0.25, wave2, this.w * 0.15, this.h * 0.3);
        rect(0, wave3, this.w * 0.1, this.h * 0.15);
    }
    
    drawStoneHelper(cBase, cBevel, cLeft, cBot, cCrack, cPixel) {
        // Base Stone
        fill(...cBase);
        stroke(20, 20, 30);
        strokeWeight(4);
        rect(0, 0, this.w, this.h);
        
        // Top Bevel / Light
        noStroke();
        fill(...cBevel);
        rect(0, -this.h / 2 + 4, this.w - 8, 4);
        
        // Left Edge Shadow
        fill(...cLeft);
        rect(-this.w / 2 + 5, 3, 5, this.h - 10);
        
        // Bottom Edge Shadow
        fill(...cBot);
        rect(0, this.h / 2 - 5, this.w - 8, 5);
        
        // Pixel Cracks
        fill(...cCrack);
        rect(-this.w * 0.25, 2, 12, 3);
        rect(-this.w * 0.18, 5, 3, 8);
        rect(this.w * 0.18, -this.h * 0.05, 10, 3);
        rect(this.w * 0.25, this.h * 0.01, 3, 9);
        
        // Small Stone Pixels
        fill(...cPixel);
        rect(-this.w * 0.35, -this.h * 0.2, 5, 4);
        rect(this.w * 0.35, this.h * 0.2, 4, 4);
        rect(this.w * 0.05, this.h * 0.25, 6, 3);
    }
}
=======
class Rectangle {
    constructor(pos, w, h, type = 'normal', id) {
        this.pos = pos;
        this.w = w;
        this.h = h;
        this.type = type; // 'normal', 'hot', 'mossy', 'ice', 'lava'
        this.id = id;
    }

    draw() {
        push();
        translate(this.pos.x, this.pos.y);
        rectMode(CENTER);

        switch (this.type) {
            case 'hot':
                this.drawHot();
                break;
            case 'mossy':
                this.drawMossy();
                break;
            case 'ice':
                this.drawIce();
                break;
            case 'lava':
                this.drawLava();
                break;
            case 'trigger':
                this.drawTrigger();
                break;
            case 'n2':
                this.drawNormal2();
                break;
            case 'normal':
            default:
                this.drawNormal();
                break;
        }

        pop();
    }

    drawNormal() {
        // Base, Bevel, Left Shadow, Bottom Shadow, Cracks, Small Pixels
        this.drawStoneHelper([75, 80, 90], [120, 125, 135], [55, 60, 70], [45, 48, 58], [45, 48, 58], [95, 100, 110]);
    }

    drawNormal2() {
         // Deep charcoal-brown cave stone
        this.drawStoneHelper(
        [52, 56, 64],     // Base - deep slate
        [88+50, 94+50, 105+50],    // Bevel - muted cool highlight
        [38, 41, 48],     // Left shadow
        [30, 33, 40],     // Bottom shadow
        [34, 37, 44],     // Cracks
        [70, 75, 85]      // Small stone pixels
    );
    }

    drawHot() {
        // Scorched reddish-dark-brown stone for volcanic areas
        this.drawStoneHelper([70, 40, 40], [110, 60, 50], [50, 25, 25], [40, 20, 20], [40, 20, 20], [90, 50, 50]);
    }

 drawMossy() {
    // =========================================================
    // DARK CAVE STONE
    // =========================================================

    this.drawStoneHelper(
        [52, 42, 40],     // Base - dark earthy stone
        [78, 62, 56],     // Bevel - faint warm light
        [36, 28, 26],     // Left shadow
        [28, 21, 19],     // Bottom shadow
        [42, 33, 30],     // Cracks
        [72, 61, 54]      // Small stone pixels
    );


    // =========================================================
    // SUBTLE ANIMATION
    // =========================================================

    let t = millis() * 0.0015;

    // Very slow pulse: 0 -> 1 -> 0
    let pulse = (sin(t + this.pos.x * 0.015) + 1) * 0.5;


    // =========================================================
    // VERY THIN MOSS LAYER
    // =========================================================

    noStroke();

    // Moss slowly changes brightness.
    // Keep the range dark so it doesn't look like bright grass.
    let mossR = 38 + pulse * 5;
    let mossG = 48 + pulse * 8;
    let mossB = 32 + pulse * 4;

    fill(mossR, mossG, mossB);

    rect(
        0,
        -this.h / 2 + 4,
        this.w - 8,
        4
    );


    // =========================================================
    // SMALL IRREGULAR MOSS PATCHES
    // =========================================================

    // Slightly darker moss
    fill(31, 42, 28);

    // Left patch
    rect(
        -this.w * 0.30,
        -this.h / 2 + 7,
        8,
        6
    );

    // Small center patch
    rect(
        this.w * 0.08,
        -this.h / 2 + 6,
        5,
        5
    );

    // Right patch
    rect(
        this.w * 0.34,
        -this.h / 2 + 7,
        7,
        7
    );


    // =========================================================
    // TINY MOSS DROPS
    // =========================================================

    // Almost static — only a tiny 1px breathing movement.
    let drip1 = sin(t * 0.7 + this.pos.x * 0.02) * 0.5;
    let drip2 = sin(t * 0.5 + 2.0) * 0.4;

    fill(34, 46, 29);

    rect(
        -this.w * 0.29,
        -this.h / 2 + 10 + drip1,
        4,
        7
    );

    rect(
        this.w * 0.34,
        -this.h / 2 + 11 + drip2,
        5,
        8
    );


    // =========================================================
    // TINY MOSS HIGHLIGHTS
    // =========================================================

    // These gently brighten/dim with the pulse.
    fill(
        70 + pulse * 12,
        82 + pulse * 15,
        43 + pulse * 7
    );

    rect(
        -this.w * 0.31,
        -this.h / 2 + 3,
        4,
        2
    );

    rect(
        this.w * 0.08,
        -this.h / 2 + 3,
        3,
        2
    );


    // =========================================================
    // TINY CAVE SPORE / LIGHT SPECKS
    // =========================================================

    // Extremely subtle.
    // They shouldn't look like fireflies.
    let speckPulse = (sin(t * 1.2 + this.pos.x * 0.03) + 1) * 0.5;

    if (speckPulse > 0.65) {
        fill(
            105 + speckPulse * 30,
            115 + speckPulse * 30,
            55 + speckPulse * 15
        );

        rect(
            -this.w * 0.18,
            -this.h / 2 - 5,
            2,
            2
        );
    }

    if (speckPulse < 0.25) {
        fill(90, 100, 48);

        rect(
            this.w * 0.27,
            -this.h / 2 - 4,
            2,
            2
        );
    }
}
    
    drawTrigger() {
    // =========================================================
    // GROWTH TRIGGER
    // Warm, welcoming stone with a small glowing growth core.
    // =========================================================

    // ---------------------------------------------------------
    // 1. Warm volcanic stone body
    // ---------------------------------------------------------
    fill(75, 45, 38);
    stroke(35, 24, 24);
    strokeWeight(4);
    rect(0, 0, this.w, this.h);

    noStroke();

    // ---------------------------------------------------------
    // 2. Warm bevel
    // ---------------------------------------------------------
    fill(115, 70, 50);
    rect(
        0,
        -this.h / 2 + 3,
        this.w - 7,
        5
    );

    // Left shadow
    fill(55, 32, 30);
    rect(
        -this.w / 2 + 4,
        2,
        5,
        this.h - 8
    );

    // Bottom shadow
    fill(45, 27, 27);
    rect(
        0,
        this.h / 2 - 4,
        this.w - 8,
        5
    );

    // ---------------------------------------------------------
    // 3. Small recessed center
    // ---------------------------------------------------------
    fill(55, 40, 30);

    rect(
        0,
        0,
        this.w - 12,
        this.h - 12
    );

    // ---------------------------------------------------------
    // 4. Soft breathing animation
    // ---------------------------------------------------------
    let breathe = sin(frameCount * 0.035) * 1.5;

    // ---------------------------------------------------------
    // 5. Warm golden aura
    // ---------------------------------------------------------
    fill(185, 145, 55);

    rect(
        0,
        breathe,
        this.w * 0.55,
        this.h * 0.55
    );

    // ---------------------------------------------------------
    // 6. Growth-colored core
    // ---------------------------------------------------------
    fill(180, 205, 80);

    rect(
        0,
        breathe,
        this.w * 0.36,
        this.h * 0.36
    );

    // ---------------------------------------------------------
    // 7. Soft golden center
    // ---------------------------------------------------------
    fill(245, 215, 105);

    rect(
        0,
        breathe,
        this.w * 0.18,
        this.h * 0.18
    );

    // ---------------------------------------------------------
    // 8. Simple "growth" shape
    // ---------------------------------------------------------
    fill(205, 225, 100);

    // Stem
    rect(
        0,
        breathe + this.h * 0.12,
        3,
        this.h * 0.20
    );

    // Left leaf
    rect(
        -this.w * 0.10,
        breathe - this.h * 0.02,
        this.w * 0.15,
        this.h * 0.08
    );

    // Right leaf
    rect(
        this.w * 0.10,
        breathe - this.h * 0.02,
        this.w * 0.15,
        this.h * 0.08
    );

    // ---------------------------------------------------------
    // 9. Tiny warm highlights
    // ---------------------------------------------------------
    fill(235, 180, 70);

    rect(
        -this.w * 0.32,
        -this.h * 0.28,
        4,
        3
    );

    rect(
        this.w * 0.30,
        this.h * 0.25,
        4,
        3
    );

    // ---------------------------------------------------------
    // 10. Tiny stone imperfections
    // ---------------------------------------------------------
    fill(100, 55, 40);

    rect(
        -this.w * 0.30,
        this.h * 0.30,
        5,
        3
    );

    rect(
        this.w * 0.32,
        -this.h * 0.25,
        4,
        3
    );
}

    drawIce() {
        // Light blues and cyans. The "cracks" are replaced with bright white colors to act as reflections/glints
        this.drawStoneHelper([140, 200, 240], [210, 240, 255], [100, 170, 210], [80, 140, 180], [230, 250, 255], [180, 220, 250]);
    }

    drawLava() {
        // 1. Dark red magma base
        fill(180, 40, 10);
        stroke(60, 10, 10);
        strokeWeight(4);
        rect(0, 0, this.w, this.h);

        noStroke();

        // 2. Animated bubbling lava shapes using p5's global frameCount
        let wave1 = sin(frameCount * 0.05) * 4;
        let wave2 = cos(frameCount * 0.04) * 4;
        let wave3 = sin(frameCount * 0.06 + 2) * 4;

        // Orange mid-tones
        fill(240, 110, 10);
        rect(-this.w * 0.25, wave1, this.w * 0.4, this.h * 0.5);
        rect(this.w * 0.25, wave2, this.w * 0.3, this.h * 0.6);
        rect(0, wave3, this.w * 0.2, this.h * 0.4);

        // Yellow hot centers
        fill(255, 200, 20);
        rect(-this.w * 0.25, wave1, this.w * 0.2, this.h * 0.25);
        rect(this.w * 0.25, wave2, this.w * 0.15, this.h * 0.3);
        rect(0, wave3, this.w * 0.1, this.h * 0.15);
    }
    
    drawStoneHelper(cBase, cBevel, cLeft, cBot, cCrack, cPixel) {
        // Base Stone
        fill(...cBase);
        stroke(20, 20, 30);
        strokeWeight(4);
        rect(0, 0, this.w, this.h);
        
        // Top Bevel / Light
        noStroke();
        fill(...cBevel);
        rect(0, -this.h / 2 + 4, this.w - 8, 4);
        
        // Left Edge Shadow
        fill(...cLeft);
        rect(-this.w / 2 + 5, 3, 5, this.h - 10);
        
        // Bottom Edge Shadow
        fill(...cBot);
        rect(0, this.h / 2 - 5, this.w - 8, 5);
        
        // Pixel Cracks
        fill(...cCrack);
        rect(-this.w * 0.25, 2, 12, 3);
        rect(-this.w * 0.18, 5, 3, 8);
        rect(this.w * 0.18, -this.h * 0.05, 10, 3);
        rect(this.w * 0.25, this.h * 0.01, 3, 9);
        
        // Small Stone Pixels
        fill(...cPixel);
        rect(-this.w * 0.35, -this.h * 0.2, 5, 4);
        rect(this.w * 0.35, this.h * 0.2, 4, 4);
        rect(this.w * 0.05, this.h * 0.25, 6, 3);
    }
}
>>>>>>> 98b3e8fc83d562139567f2725510c352295b9ed5
