var works02 =function(p){
    var rValue;
    var add=1;

    p.setup=function() {
      p.createCanvas(p.windowWidth+50,p.windowHeight+200);
      p.fill(0);
      p.noStroke();
      p.rectMode(CENTER);
      p.frameRate(30);
      p.noiseDetail(2, 0.9);
      rValue=81;
    }

    p.draw=function() {
        if(rValue>=230||rValue<=80)add*=-1;
        rValue+=add;
      p.background(rValue,204,210);
      for (var x = 10; x < p.windowWidth+50; x += 10) {
        for (var y = 10; y < p.windowHeight+200; y += 10) {
          var n = p.noise(x * 0.005, y * 0.005, p.frameCount * 0.05);
          p.push();
          p.translate(x, y);
          p.rotate(TWO_PI * n);
          p.scale(10 * n);
          p.rect(0, 0, 2, 2);
          p.pop();
        }
      }
    }
    p.windowResized=function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
}
