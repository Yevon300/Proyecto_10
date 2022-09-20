var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dbeeb5ea-944a-4b58-8c17-2e2b3216b6c3","06860f5e-24f0-487e-8e46-1cf626bd640d","d284bfb2-5202-429c-b702-e1b78d584c26","eb9c8186-cf35-4bec-9cee-c74b08e2327e","297f425b-5526-4ef8-b0a5-21a306a275cf","fe6780fa-cc45-4dfb-95bf-da4091254b89","44a9dcd6-a52f-4614-a373-286ccdba7d4b"],"propsByKey":{"dbeeb5ea-944a-4b58-8c17-2e2b3216b6c3":{"name":"idle","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":4,"looping":true,"frameDelay":4,"version":"vM48pmVZeKdwgLDE8eRkb3h07RmgElXV","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/dbeeb5ea-944a-4b58-8c17-2e2b3216b6c3.png"},"06860f5e-24f0-487e-8e46-1cf626bd640d":{"name":"fire1","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":4,"looping":true,"frameDelay":2,"version":".X7MwVvaKYLDe8.CATLQC0iOwPqKajNR","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/06860f5e-24f0-487e-8e46-1cf626bd640d.png"},"d284bfb2-5202-429c-b702-e1b78d584c26":{"name":"fire2","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":4,"looping":true,"frameDelay":2,"version":"3YJySVesVMCqDHv1YF2x1FMcB8gYefAy","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/d284bfb2-5202-429c-b702-e1b78d584c26.png"},"eb9c8186-cf35-4bec-9cee-c74b08e2327e":{"name":"fire3","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":4,"looping":true,"frameDelay":2,"version":"RmxmNe4IkQWFdnfVv_CQ4UHPAjeB3lOu","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/eb9c8186-cf35-4bec-9cee-c74b08e2327e.png"},"297f425b-5526-4ef8-b0a5-21a306a275cf":{"name":"fire4","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":4,"looping":true,"frameDelay":2,"version":"BzlWfqRCANY5xIPszk2nsHagBGO5ys0U","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/297f425b-5526-4ef8-b0a5-21a306a275cf.png"},"fe6780fa-cc45-4dfb-95bf-da4091254b89":{"name":"point","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":2,"looping":true,"frameDelay":4,"version":"uONIq78cWbtdmnA.aouE.9mdD6Ggy9iI","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":20},"rootRelativePath":"assets/fe6780fa-cc45-4dfb-95bf-da4091254b89.png"},"44a9dcd6-a52f-4614-a373-286ccdba7d4b":{"name":"background","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"uWW8GrNZExB5dyhLzSfyS4pD1B536Dqc","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/44a9dcd6-a52f-4614-a373-286ccdba7d4b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var back = createSprite(200,200,400,1,1)
back.setAnimation("background")
var player = createSprite(200,200,30,30);
player.setAnimation("idle");
var f1 = createSprite(125,50,20,20);
f1.setAnimation("fire1");
var f2 = createSprite(175,50,20,20);
f2.setAnimation("fire2");
var f3 = createSprite(225,50,20,20);
f3.setAnimation("fire3");
var f4 = createSprite(275,50,20,20);
f4.setAnimation("fire4");

var point = createSprite(200,100,10,10)
point.setAnimation("point")

var gameState = "start";
var score = 0

createEdgeSprites()

function draw() {
  background("grey")
  
  textSize(10)
stroke("yellow")
text("SCORE: "+score,340,10)
  
  if(gameState == "start"){
    
    textSize(15)
    stroke("yellow")
    text("PRESS ENTER TO START",110,180)
    
    score=0
    
    player.x=200
    player.y=200
    f1.x=125
    f1.y=50
    f2.x=175
    f2.y=50
    f3.x=225
    f3.y=50
    f4.x=275
    f4.y=50
    point.x=200
    point.y=100
    
    if(keyDown("enter")){
      
      //MOVIMIENTO FUEGO
  f1.velocityX=5.5
  f1.velocityY=5
  f2.velocityX=-4
  f2.velocityY=-5
  f3.velocityX=2
  f3.velocityY=6
  f4.velocityX=-6
  f4.velocityY=2
      
      gameState = "game"
    }
  }
  
  if(gameState == "game"){
    
    //MOVIMIENTO JUGADOR
    if(keyDown("up")){
    player.y=player.y-6
  }
  if(keyDown("down")){
    player.y=player.y+6
  }
  if(keyDown("left")){
    player.x=player.x-6
  }
  if(keyDown("right")){
    player.x=player.x+6
  }
  
  if(player.isTouching(point)){
    point.x=randomNumber(10,390)
    point.y=randomNumber(10,390)
    score=score+1
    playSound("assets/category_retro/start_game.mp3");
  }
  
  
  if(player.isTouching(f1)){
    gameState = "lose"
    playSound("assets/category_retro/retro_game_classic_player_death_9.mp3");
  }
  
  if(player.isTouching(f2)){
    gameState = "lose"
    playSound("assets/category_retro/retro_game_classic_player_death_9.mp3");
  }
  
  if(player.isTouching(f3)){
    gameState = "lose"
    playSound("assets/category_retro/retro_game_classic_player_death_9.mp3");
  }
  
  if(player.isTouching(f4)){
    gameState = "lose"
    playSound("assets/category_retro/retro_game_classic_player_death_9.mp3");
    
  }
  
  }
  
  if(gameState == "lose"){
    
    textSize(30)
    text("GAME OVER",110,210)
    textSize(15)
    text("SCORE: "+score,160,240)
    textSize(10)
    text("press enter to restart",150,255)
    
    f1.velocityX=0
    f1.velocityY=0
    f2.velocityX=0
    f2.velocityY=0
    f3.velocityX=0
    f3.velocityY=0
    f4.velocityX=0
    f4.velocityY=0
    player.velocityX=0
    player.velocityY=0
    
    if(keyDown("enter")){
      gameState = "start"
    }
  }
  
  player.bounce(edges)
  f1.bounceOff(edges)
  f2.bounceOff(edges)
  f3.bounceOff(edges)
  f4.bounceOff(edges)
  
  drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
