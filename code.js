var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var sofia = createSprite(200,200,20,20);
var wall1 = createSprite(235,190,20,200);
var wall2 = createSprite(170,140,20,80);
var wall3 = createSprite(80,220,200,20);
var wall4 = createSprite(100,140,20,80);
var wall5 = createSprite(200,100,220,20);
var wall6 = createSprite(100,350,200,20);
var wall7 = createSprite(200,10,20,100);
var wall8 = createSprite(140,50,50,20);
var wall9 = createSprite(125,20,20,40);
var wall10 = createSprite(150,360,15,15);
var wall11 = createSprite(110,395,15,15);
var wall12 = createSprite(190,280,80,20);
var wall13 = createSprite(40,280,80,20);
var wall14 = createSprite(10,200,20,400);
var wall15 = createSprite(390,200,20,400);
var wall16 = createSprite(300,330,20,60);
var wall17 = createSprite(200,397,400,5);
var wall18 = createSprite(60,360,15,15);
var wall19 = createSprite(300,40,20,120);
var wall20 = createSprite(235,280,20,80);
var wall21 = createSprite(290,310,100,20);
var wall22 = createSprite(310,200,140,20);
var end = createSprite(10,380,40,40);
createEdgeSprites();
sofia.shapeColor="darkorange";
end.shapeColor="yellow";
function draw() {
  
 background ("lightpink");
 sofia.bounciness = 1;
 sofia.bounceOff(wall1);
 sofia.bounceOff(wall2);
 sofia.bounceOff(wall3);
 sofia.bounceOff(wall4);
 sofia.bounceOff(wall5);
 sofia.bounceOff(wall6);
 sofia.bounceOff(wall7);
 sofia.bounceOff(wall8);
 sofia.bounceOff(wall9);
 sofia.bounceOff(wall10);
 sofia.bounceOff(wall11);
 sofia.bounceOff(wall12);
 sofia.bounceOff(wall13);
 sofia.bounceOff(wall14);
 sofia.bounceOff(wall15);
 sofia.bounceOff(wall16);
 sofia.bounceOff(wall17);
 sofia.bounceOff(wall18);
 sofia.bounceOff(wall19);
 sofia.bounceOff(wall20);
 sofia.bounceOff(wall21);
 sofia.bounceOff(wall22);
 sofia.bounceOff(edges);
 
  if (keyDown("DOWN_ARROW") || keyDown("s")) {
    sofia.y+=3;
  } 
   if (keyDown("UP_ARROW") || keyDown("w")) {
    sofia.y-=3;
  } 
   if (keyDown("LEFT_ARROW") || keyDown("a")) {
    sofia.x-=3;
  } 
   if (keyDown("RIGHT_ARROW") || keyDown("d")) {
    sofia.x+=3;
  } 
  drawSprites();
  
  if (sofia.isTouching(end)) {
     textSize(20);
     text("Você escapou da mazelândia!",25 , 80);
  }
  
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
