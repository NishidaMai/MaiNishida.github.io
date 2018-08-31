
var works01 =function (p){
    var rs;
    var num = 4500;
    var frames=30;
    var theta;
    var sw;
    var swAdd;
    var sg;
    var sgAdd;
    var bg;
    var bgAdd;

    p.setup = function() {
      p.createCanvas(p.windowWidth+50,p.windowHeight+200);
      rs = p.random(123456);
      // noStroke();
      theta=10;
      sw=1;
      swAdd=0.05;
      sg=200;
      bg=255;
      bgAdd=1;
      p.background(bg);
      p.strokeWeight(sw);
    }

    p.draw = function() {
      if(bg>255||bg<0) bgAdd *= -1;
      bg += bgAdd;
      p.background(bg);
      p.randomSeed(rs);
      if(sw>2||sw<0.5) swAdd *= -1;
      sw += swAdd;
      p.strokeWeight(sw);

      for (var i=0; i<num; i++) {
        var x = p.random(-50,windowWidth+50);
        var y2=200;
        var y = p.random(-50,windowHeight+50);
        var offSet = p.map(x, 0, windowWidth, 0, p.TWO_PI);
        var d=50;
        var varY = p.map(p.sin(theta+offSet), -1, 1, -d, d);
        var varX = p.map(p.sin(theta+offSet), -1, 1, -d, d);
        var sz = 1;
        sg=p.map(varX,-100,100,50,170);
        p.fill(200,150,sg);
        p.stroke(200,150,sg);
        p.line(x+varX,y+varY,x+p.cos(theta)*25,y+varY+p.sin(theta)*25);
      }
      theta+= p.TWO_PI/frames;
      //if (frameCount>120 && frameCount<frames+120) saveFrame("image-###.gif");
    }

    p.windowResized=function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
}
}
