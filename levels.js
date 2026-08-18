function level1(){
    return {
        platforms: [
            new Rectangle(createVector(150, height - 15), 300, 30, 'n2'),
            new Rectangle(createVector(300+200+250, height - 15), 500, 30, 'n2'),
            new Rectangle(createVector(200, 530), 100, 20, 'hot', "st1"),
        ],
        walls: [
            new Rectangle(createVector(300, 50), 20, 100, 'n2'), // |
            new Rectangle(createVector(450, 50), 20, 100, 'n2'), // |
            new Rectangle(createVector(150+5, 50+50+10), 310, 20, 'n2'), // ---
            new Rectangle(createVector(450+170-10, 50+50+10), 340, 20, 'n2'), // ---
            new Rectangle(createVector(450+170-10+170+10, 50+50+10+175-10), 20, 350, 'n2'), // |
            
            new Rectangle(createVector(150+5, 50+50+10+150-10+150+10), 310, 20, 'n2'), // ---
            new Rectangle(createVector(150+5+155-10, 50+50+10+150-10+150+10-75-10), 20, 150, 'n2'), // |
            
            new Rectangle(createVector(155+155+125-120, 50+50+10+150), 250+240, 20, 'n2'), // ---

            new Rectangle(createVector(10, 50+50+10+150-10+150+10-100), 20, 20, 'hot'), // ---
            
            new Rectangle(createVector(140, 50+50+10+150-10+150+10-20), 20, 20, 'hot'), // ---
            new Rectangle(createVector(140+80, 50+50+10+150-10+150+10-20), 20, 20, 'hot'), // ---

            new Rectangle(createVector(-10, height / 2), 20, height, 'n2'),
            new Rectangle(createVector(width + 10, height / 2), 20, height, 'n2'),
        ],
        fallHazards: [
            new Rectangle(createVector(300+100, height - 10), 200, 20, 'lava'),
            new Rectangle(createVector(150+5, 50+50+10+150-10+150+10-18), 310, 10, 'lava'), // ---
        ],

        // triggers go like 1 -> 2 -> 3 -> 4 -> ... so on
        triggers: [
            new Rectangle(createVector(300+200+250, height - 15 - 30), 30, 30, 'trigger', 'tr1'),
            new Rectangle(createVector(200+50+10, 530), 20, 20, 'trigger', 'tr2'),
            new Rectangle(createVector(300+200+250-100, height - 15 - 30-400), 20, 20, 'trigger', 'tr3'),
            // new Rectangle(createVector(155+155+125-120-35, 50+50+10+150+20), 20, 20, 'trigger', 'tr6'),
            // new Rectangle(createVector(150+5+155-10+90, 50+50+10+150-10+150+10-75-10-150+75-10-20), 20, 20, 'trigger', 'tr7'),
            // new Rectangle(createVector(150+5+155-10+90-60, 20), 20, 20, 'trigger', 'tr8'),
            // new Rectangle(createVector(200+50+10-50, 530 - 30), 20, 20, 'trigger', 'tr4'),
            // new Rectangle(createVector(155+155+125-120+100+50, 50+50+10+150-20), 20, 20, 'trigger', 'tr5'),
        ],
        // these get pushed in triggers array
        hiddenTriggers: [
            new Rectangle(createVector(200+50+10-50, 530 - 30), 20, 20, 'trigger', 'tr4'),
            new Rectangle(createVector(155+155+125-120+100+50, 50+50+10+150-20), 20, 20, 'trigger', 'tr5'),
            new Rectangle(createVector(155+155+125-120-35, 50+50+10+150+20), 20, 20, 'trigger', 'tr6'),
            new Rectangle(createVector(150+5+155-10+90, 50+50+10+150-10+150+10-75-10-150+75-10-20), 20, 20, 'trigger', 'tr7'),
            new Rectangle(createVector(150+5+155-10+90-60, 20), 20, 20, 'trigger', 'tr8'),
        ],
        movingPlatforms: [
            new MovingPlatform(createVector(540, 530), 100, 20, createVector(700, 530), 100),
            new MovingPlatform(createVector(450+340+10-50, 50+50+10+150-10+180+10-100), 100, 20, createVector(450+340+10-50, 50+50+10+150-10+180+10), 50, 'n2'), // ---
        ],
        // opening and closing are controlled by triggers
        movingDoors: [
            new MovingDoor(createVector(150+5+155-10, 50+50+10+150-10+150+10-75-10-150), 20, 150, createVector(150+5+155-10, 0), 50, 'hot', 'dr1'),
            new MovingDoor(createVector(150+5+155-10+90, 50+50+10+150-10+150+10-75-10-150+75-10), 80, 20, createVector(150+5+155+90, 110), 50, 'hot', 'dr2'),
        ],
    };
}