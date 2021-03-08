var leftIdleImg,rightIdleImg,leftRunImg,rightRunImg,leftJumpImg,rightJumpImg,bgImg,laserImg;
var score=0;
var play=1;
var end=0
var gameState=play;
var hlaser,ground,main,bg,live;



function preload(){
  leftIdleImg=loadAnimation("sprites/Left Idle/leftidle1.png","sprites/Left Idle/leftidle2.png","sprites/Left Idle/leftidle3.png","sprites/Left Idle/leftidle4.png","sprites/Left Idle/leftidle5.png",);
  rightIdleImg=loadAnimation("sprites/Right Idle/rightidle1.png","sprites/Right Idle/rightidle2.png","sprites/Right Idle/rightidle3.png","sprites/Right Idle/rightidle4.png","sprites/Right Idle/rightidle5.png","sprites/Right Idle/rightidle6.png");
  leftRunImg=loadAnimation("sprites/Left Run/leftrun1.png","sprites/Left Run/leftrun2.png","sprites/Left Run/leftrun3.png","sprites/Left Run/leftrun4.png","sprites/Left Run/leftrun5.png","sprites/Left Run/leftrun6.png","sprites/Left Run/leftrun7.png","sprites/Left Run/leftrun8.png","sprites/Left Run/leftrun9.png","sprites/Left Run/leftrun10.png")
  rightRunImg=loadAnimation("sprites/Right Run/rightrun1.png","sprites/Right Run/rightrun2.png","sprites/Right Run/rightrun3.png","sprites/Right Run/rightrun4.png","sprites/Right Run/rightrun5.png","sprites/Right Run/rightrun6.png","sprites/Right Run/rightrun7.png","sprites/Right Run/rightrun8.png","sprites/Right Run/rightrun9.png","sprites/Right Run/rightrun10.png")
  leftJumpImg=loadAnimation("sprites/Left Jump/leftjump1.png","sprites/Left Jump/leftjump2.png","sprites/Left Jump/leftjump3.png","sprites/Left Jump/leftjump4.png","sprites/Left Jump/leftjump5.png","sprites/Left Jump/leftjump6.png","sprites/Left Jump/leftjump7.png")
  rightJumpImg=loadAnimation("sprites/Right Jump/rightjump1.png","sprites/Right Jump/rightjump2.png","sprites/Right Jump/rightjump3.png","sprites/Right Jump/rightjump4.png","sprites/Right Jump/rightjump5.png","sprites/Right Jump/rightjump6.png","sprites/Right Jump/rightjump7.png",)
  llaserImg=loadImage("sprites/llaser.png");
  rlaserImg=loadImage("sprites/rlaser.png");
  hlaserImg=loadImage("sprites/hlaser.png");
  bgImg=loadImage("sprites/bg.png");
  laserTurretImg=loadImage("sprites/laser turret.png");
  laserTurretImg2=loadImage("sprites/laser turret left.png");
  laserTurretImg3=loadImage("sprites/laser turret up.png");
  laserSound=loadSound("sound/laser.mp3");
  laserObstacleImg=loadImage("sprites/laser obstacle.png");
}


function setup(){
    canvas=createCanvas(800,500);
    main=createSprite(30,400);
    main.addAnimation("rightidle",rightIdleImg);
    main.addAnimation("leftidle",leftIdleImg);
    main.addAnimation("rightjump",rightJumpImg);
    main.addAnimation("leftjump",leftJumpImg);
    main.addAnimation("rightrun",rightRunImg);
    main.addAnimation("leftrun",leftRunImg);
    main.setCollider("rectangle",0,0,30,50,0);
     ground= createSprite(400,450,800,20);
     leftEdge= createSprite(0,250,1,500);
     rightEdge= createSprite(800,250,1,500);
     ceiling= createSprite(400,150,800,20);
    ground.visible=false;
    leftEdge.visible=false;
    rightEdge.visible=false;
    
    bg=createSprite(400,250,800,500);
    bg.addImage(bgImg);
    bg.scale=1.5;
    main.depth=bg.depth+1;
     laserGrp=createGroup();
    live=3;
    obstacleGrp=createGroup();

    laserTurret=createSprite(0,412,40,50);
    laserTurret.addImage(laserTurretImg);
    laserTurret.scale=0.1;
    laserTurret2=createSprite(0,362,40,50);
    laserTurret2.addImage(laserTurretImg);
    laserTurret2.scale=0.1;
    laserTurret3=createSprite(0,312,40,50);
    laserTurret3.addImage(laserTurretImg);
    laserTurret3.scale=0.1;
    laserTurret4=createSprite(0,262,40,50);
    laserTurret4.addImage(laserTurretImg);
    laserTurret4.scale=0.1;
    laserTurret5=createSprite(0,212,40,50);
    laserTurret5.addImage(laserTurretImg);
    laserTurret5.scale=0.1;
    laserTurret6=createSprite(800,412,40,50);
    laserTurret6.addImage(laserTurretImg2);
    laserTurret6.scale=0.1;
    laserTurret7=createSprite(800,362,40,50);
    laserTurret7.addImage(laserTurretImg2);
    laserTurret7.scale=0.1;
    laserTurret8=createSprite(800,312,40,50);
    laserTurret8.addImage(laserTurretImg2);
    laserTurret8.scale=0.1;
    laserTurret9=createSprite(800,262,40,50);
    laserTurret9.addImage(laserTurretImg2);
    laserTurret9.scale=0.1;
    laserTurret10=createSprite(800,212,40,50);
    laserTurret10.addImage(laserTurretImg2);
    laserTurret10.scale=0.1;
    laserTurreth=createSprite(main.x,20,40,50);
    laserTurreth.addImage(laserTurretImg3);
    laserTurreth.scale=0.2;


}








function draw(){
    background("white");

    console.log(main.y);
    if (keyDown("w")){
       main.velocityY=-7;
       main.changeAnimation("rightjump",rightJumpImg);
  
     }
     
     if(keyWentUp("d")){
       main.changeAnimation("rightidle",rightIdleImg);
       main.velocityX=0;
     bg.velocityX=0;
       
       
     }
     if( keyWentUp("a")){
      
      main.changeAnimation("rightidle",rightIdleImg);
       main.velocityX=0;
       
       
       
       
     }
     if(keyDown("d")){
      if(main.isTouching(ground)){   
      main.changeAnimation("rightrun",rightJumpImg);}
         main.velocityX=7;
         
       }
       if(keyDown("a")){
         if(main.isTouching(ground)){
         main.changeAnimation("rightrun",rightRunImg);}
         main.velocityX=-7;
         
        
       }
   spawn();
   spawn2();
   spawn3();
   spawn4();
   spawnLaserObstacle();
     main.velocityY=main.velocityY+0.8;
    main.collide(ground);
    main.collide(ceiling);
    for(var i=0;i<laserGrp.length;i++){
      if(main.isTouching(laserGrp[i])){
        laserGrp[i].destroy();
        live=live-1;
      }
    }
    for(var i=0;i<obstacleGrp.length;i++){
      if(main.isTouching(obstacleGrp[i])){
        obstacleGrp[i].destroy();
        live=live-1;
      }
    }
    

    fill("white");
    textSize(30);
   

 main.collide(rightEdge);
 main.collide(leftEdge);
 laserTurreth.x=main.x;
    
    drawSprites();
    text("Lives: "+live,600,50);
    text("Score: "+score,0,50);
}









function spawn(){
    if(World.frameCount%200===0){
         
     rlaser= createSprite(-10,400,50,20);
    rlaser.addImage(rlaserImg);
    rlaser.scale=0.1;
    rlaser.setCollider("rectangle", 0,0,40,20,0);
    laserSound.play();
    if(rlaser.x-main.x>=0){
      rlaser.velocityX=-10;
    }
    if(rlaser.x-main.x<0){
      rlaser.velocityX=10;
    }
    laserGrp.add(rlaser);
    rlaser.lifetime=100;
    if(rlaser.isTouching(main)){
      rlaser.destroy();
    }
    if(rlaser.x>800){
      score=score+1;
    }
    }
    if(World.frameCount%750===0){
         
      llaser= createSprite(810,400,50,20);
    llaser.addImage(llaserImg);
     llaser.scale=0.1;
     llaser.setCollider("rectangle", 0,0,40,20,0);
     laserSound.play();
     if(llaser.x-main.x>=0){
       llaser.velocityX=-10;
     }
     if(llaser.x-main.x<0){
       llaser.velocityX=10;
     }
     laserGrp.add(llaser);
     if(llaser.x<0){
      score=score+1;
    }
     }
     if(World.frameCount%100===0){
         
      hlaser= createSprite(main.x,-10,50,20);
     hlaser.addImage(hlaserImg);
     hlaser.scale=0.2;
    hlaser.velocityY=15;
    hlaser.setCollider("rectangle", 0,0,20,40,0);
    laserSound.play();
  laserGrp.add(hlaser);
  if(hlaser.y<510){
    score=score+2;
  }
     }
    
  }


  function spawn2(){
    if(World.frameCount%100===0){
         
     rlaser= createSprite(-10,350,50,20);
    rlaser.addImage(rlaserImg);
    rlaser.scale=0.1;
    rlaser.setCollider("rectangle", 0,0,40,20,0);
    laserSound.play();
    if(rlaser.x-main.x>=0){
      rlaser.velocityX=-10;
    }
    if(rlaser.x-main.x<0){
      rlaser.velocityX=10;
    }
    laserGrp.add(rlaser);
    rlaser.lifetime=100;
    if(rlaser.isTouching(main)){
      rlaser.destroy();
    }
    if(rlaser.x>800){
      score=score+1;
    }
    }
    if(World.frameCount%350===0){
         
      llaser= createSprite(810,350,50,20);
    llaser.addImage(llaserImg);
     llaser.scale=0.1;
     llaser.setCollider("rectangle", 0,0,40,20,0);
     laserSound.play();
     if(llaser.x-main.x>=0){
       llaser.velocityX=-10;
     }
     if(llaser.x-main.x<0){
       llaser.velocityX=10;
     }
     laserGrp.add(llaser);
     if(llaser.x<0){
      score=score+1;
    }
     }
    }
    function spawn3(){
      if(World.frameCount%300===0){
           
       rlaser= createSprite(-10,200,50,20);
      rlaser.addImage(rlaserImg);
      rlaser.scale=0.1;
      rlaser.setCollider("rectangle", 0,0,40,20,0);
      laserSound.play();
      if(rlaser.x-main.x>=0){
        rlaser.velocityX=-10;
      }
      if(rlaser.x-main.x<0){
        rlaser.velocityX=10;
      }
      laserGrp.add(rlaser);
      rlaser.lifetime=100;
      if(rlaser.x>800){
        score=score+1;
      }
      if(rlaser.isTouching(main)){
        rlaser.destroy();
      }
     
      }
      if(World.frameCount%250===0){
           
        llaser= createSprite(810,300,50,20);
      llaser.addImage(llaserImg);
       llaser.scale=0.1;
       llaser.setCollider("rectangle", 0,0,40,20,0);
       laserSound.play();
       if(llaser.x-main.x>=0){
         llaser.velocityX=-10;
       }
       if(llaser.x-main.x<0){
         llaser.velocityX=10;
       }
       laserGrp.add(llaser);
       if(llaser.x<0){
        score=score+1;
      }
       }
      }

      function spawn4(){
        if(World.frameCount%500===0){
             
         rlaser= createSprite(-10,250,50,20);
        rlaser.addImage(rlaserImg);
        rlaser.scale=0.1;
        rlaser.setCollider("rectangle", 0,0,40,20,0);
        if(rlaser.x>800){
          score=score+1;
        }
        laserSound.play();
        if(rlaser.x-main.x>=0){
          rlaser.velocityX=-10;
        }
        if(rlaser.x-main.x<0){
          rlaser.velocityX=10;
        }
        laserGrp.add(rlaser);
        rlaser.lifetime=100;
        if(rlaser.isTouching(main)){
          rlaser.destroy();
        }
        
        }
        if(World.frameCount%150===0){
             
          llaser= createSprite(810,250,50,20);
        llaser.addImage(llaserImg);
         llaser.scale=0.1;
         laserSound.play();
         llaser.setCollider("rectangle", 0,0,40,20,0);
         if(llaser.x-main.x>=0){
           llaser.velocityX=-10;
         }
         if(llaser.x-main.x<0){
           llaser.velocityX=10;
         }
         if(llaser.x<0){
          score=score+1;
        }
         laserGrp.add(llaser);
         }
        }




        function spawnLaserObstacle(){
        if(World.frameCount%1375===0){
          leftObstacle= createSprite(810,random(200,400),10,70);
          leftObstacle.addImage(laserObstacleImg);
          leftObstacle.scale=0.5;
          leftObstacle.debug=true;
          leftObstacle.setCollider("rectangle",0,0,10,170);
          leftObstacle.velocityX=-5
          leftObstacle.lifetime=190;
          obstacleGrp.add(leftObstacle);
        
        }
        if(World.frameCount%5677===0){
          rightObstacle= createSprite(-10,random(200,400),10,70);
          rightObstacle.addImage(laserObstacleImg);
          rightObstacle.scale=0.5;
          rightObstacle.debug=true;
          rightObstacle.setCollider("rectangle",0,0,10,170);
          rightObstacle.velocityX=5
          rightObstacle.lifetime=190;
          obstacleGrp.add(rightObstacle)
         
        }
        



        }