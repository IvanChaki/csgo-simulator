 var car, car_image, car_weight, car_speed, car_calculation;
    var car3, car3_image, car3_weight, car3_speed, car3_calculation;
    var car2, car2_image, car2_weight, car2_speed, car2_calculation;
    var wall, wall_image;
    var Title_image, title;
    var button1, button1_image;
    var button2, button2_image;
    var button3, button3_image;
    var simulator_state;
    var START, ZENIA, TORUS, CYCLAP, END1, END2, END3;
    var button;
    var hit;
    var road, road_image;
    var back, back_image;
    
    function preload() {
    
        car_image = loadImage("car1.jpg");

        car2_image = loadImage("car2.jng");

        car3_image = loadImage("car3.jpg");

        Title_image = loadImage("title.png");
        
            button1_image = loadImage("button1.png");
            button2_image = loadImage("button2.png");
            button3_image = loadImage("button3.png");

        
            button = loadSound("button.mp3");


            hit = loadSound("hit.mp3");
            road_image = loadImage("road.jpg");
            START = 0;
            ZENIA = 1;
            TORUS = 2;
            CYCLAP = 3;
            END1 = 4;
            END2 = 5;
            END3 = 6;

            simulator_state = START;

            back_image = loadImage("back.png");
    }

    function setup() {
   
         createCanvas(1100,500);

                road = createSprite(550,250);
                road.addImage(road_image);
                road.scale = 1.8;
        
                car = createSprite(150,220);
                car.addImage(car_image);
                car.scale = 0.32;
                car.pointTo(0,220);

                car2 = createSprite(150,230);
                car2.addImage(car2_image);
                car2.scale = 0.32;

            car3 = createSprite(150,230);
                car3.addImage(car3_image);
                car3.scale = 0.17;
            
           title = createSprite(550,100);
                title.addImage(Title_image);
                title.scale = 0.5;

              button1 = createSprite(200,350);
                button1.addImage(button1_image);
                button1.scale = 0.3;

            button2 = createSprite(550,350);
                button2.addImage(button2_image);
                button2.scale = 0.3;

            button3 = createSprite(900,350);
                button3.addImage(button3_image);
                button3.scale = 0.3;

            back = createSprite(50,50,10,10);
                back.addImage(back_image);
                back.scale = 0.2;

          wall = createSprite(1045,250,20,500);
                wall.shapeColor = rgb(210,105,0);

          car2_weight = 2500;
            car2_speed = 60;
            car2_calculation = 0.5*car2_speed*car2_weight*car2_speed/22500;

            car_speed = 50;
            car_weight = 2300;
            car_calculation = 0.5*car_speed*car_weight*car_speed/22500;

            car3_speed = 90;
            car3_weight = 1700;
            car3_calculation = 0.5*car3_speed*car3_weight*car3_speed/22500;
            
    }

    function draw() {

        
            title.visible = false;

        
            if(simulator_state === START) {
                back.visible = false;
                background("white");
                reset();
                road.visible = false;
                title.visible = true;
                button1.visible = true;
                button2.visible = true;
                button3.visible = true;
            
                wall.visible = false;
                car.visible = false;
                car2.visible = false;
                car3.visible = false;

                if(mousePressedOver(button2)) {
                    button.play();
                    simulator_state = TORUS;
                }
                if(mousePressedOver(button3)) {
                    button.play();
                    simulator_state = ZENIA;
                }
                if(mousePressedOver(button1)) {
                    button.play();
                    simulator_state = CYCLAP;
                }
            }
                if(simulator_state === TORUS) {

                    back.visible = false;
                    title.visible = false;
                    button1.visible = false;
                    button2.visible = false;
                    button3.visible = false;
                    road.visible = true;  
                    wall.visible = true;
                    car2.visible = true;
                    if(keyDown("right")) {
                        car2.velocityX = 60;
                    }
        
                if(car2.x - wall.x <= car2.width/2 + wall.width/2 && wall.x - car2.x <= wall.width/2 + car2.width/2 
                        && car2.y - wall.y <= car2.height/2 + wall.height/2 &&  wall.y - car2.y <= wall.height/2 + car2.height/2) {
                            simulator_state = END1;
                            hit.play();
                            
                     }
             }
       
                 if(simulator_state === ZENIA) {

                    title.visible = false;
                    button1.visible = false;
                    button2.visible = false;
                    button3.visible = false;
                    car.visible = true;
                    road.visible = true;
                    wall.visible = true;

                    if(keyDown("right")) {
                    car.velocityX = 50; 
                    }
                     if(car.x - wall.x <= car.width/2 + wall.width/2 && wall.x - car.x <= wall.width/2 + car.width/2 
                       && car.y - wall.y <= car.height/2 + wall.height/2 &&  wall.y - car.y <= wall.height/2 + car.height/2) {
                            simulator_state = END2;
                            hit.play();
                            
                    }
            }

              if(simulator_state === CYCLAP) {

                  title.visible = false;
                    button1.visible = false;
                    button2.visible = false;
                    button3.visible = false;
                    car3.visible = true;
                    road.visible = true;
                    wall.visible = true;
                    if(keyDown("right")) {
                        car3.velocityX = 90;  
                    }
                    if(car3.x - wall.x <= car3.width/2 + wall.width/2 && wall.x - car3.x <= wall.width/2 + car3.width/2 
                        && car3.y - wall.y <= car3.height/2 + wall.height/2 &&  wall.y - car3.y <= wall.height/2 + car3.height/2) {
                            simulator_state = END3;
                            hit.play();  
                    }
             }

            drawSprites();

          if(simulator_state === END1) {
            back.visible = true;

            if(mousePressedOver(back)) {
                simulator_state = START;
                button.play();

            }

                car2.collide(wall);
                textSize(40);
                fill("255");
                textFont("Impact");
                text("DEFORMATION: " + car2_calculation,417,310);

                if(car2_calculation > 180)  {
                    fill(250);
                    textSize(80);
                    textStyle(BOLD);
                    textFont("Calibri")
                    fill("red");
                    textFont("Arial");
                    text("NOT SAFE!",360,170);
                }
          }

         
        if(simulator_state === END2) {
            back.visible = true;

            if(mousePressedOver(back)) {
                simulator_state = START;
                button.play();

            }
            car.collide(wall);
            textSize(40);
            fill("255");
            textFont("Impact");
            text("DEFORMATION: " + Math.round(car_calculation),417,310);

            if(car_calculation > 180)  {
                fill(250);
                textSize(80);
                textStyle(BOLD);
                textFont("Calibri")
                fill("red");
                textFont("Arial");
                text("NOT SAFE!",360,170);

            } else {
                fill(250);
                textSize(80);
                textStyle(BOLD);
                textFont("Calibri")
                fill("green");
                textFont("Arial");
                text("SAFE!",440,170);
            }
         }

        //simulator state END3.
            if(simulator_state === END3) {
                back.visible = true;

                if(mousePressedOver(back)) {
                    simulator_state = START;
                    button.play();

                }
                car3.collide(wall);
                textSize(40);
                fill("255");
                textFont("Impact");
                text("DEFORMATION: " + Math.round(car3_calculation),417,310);
                if(car3_calculation > 180)  {
                    fill(250);
                    textSize(80);
                    textStyle(BOLD);
                    textFont("Calibri")
                    fill("red");
                    textFont("Arial");
                    text("NOT SAFE!",360,170);
                } else {
                    fill(250);
                    textSize(80);
                    textStyle(BOLD);
                    textFont("Calibri")
                    fill("green");
                    textFont("Arial");
                    text("SAFE!",440,170);
                }
             }
    }


    function reset() {

            car2.x = 150;
            car2.y = 230;
            car.x = 150;
            car.y = 230;
            car3.x = 150;
            car3.y = 230;
    }
