var works03=function(p){
    var num;
    var yCenter;
    var rotation;
    var offset;
    var rectHeight;
    var rectWidth;
    var speed;

    var nAdd;
    var rhAdd;
    var rwAdd;

    var wid;
    var widAdd;

    var r,g,b;
    var bc;

    p.setup=function() {
      p.createCanvas(p.windowWidth, p.windowHeight+200);
      p.background(255);
      p.rectMode(CENTER);

      yCenter = windowHeight / 2;
      num = 100;
      rectHeight=50;
      rectWidth=20;
      offset = 0;

      nAdd=1;
      rhAdd=1;
      rwAdd=3;

      wid=1800;
      widAdd=-0.5;

      bc=0;
      bcAdd=0.5;

    }

    p.draw=function() {
      p.background(bc);
      if( bc > 255|| bc < 0 ) bcAdd *= -1;
      bc += bcAdd;
      p.stroke(255);



      if(num >= 500 || num < 100 ) nAdd *= -1;
      num += nAdd;
      if( rectHeight >= 1000 || rectHeight <50 )rhAdd*=-1;
      rectHeight += rhAdd;

      if( wid < windowWidth || wid > 1800 ) widAdd *= -1;
      wid += widAdd;

      if( rectWidth > 300 || rectWidth < 20 ) rwAdd *= -1;
      rectWidth += rwAdd;

      for(var i = 0; i < num; i++){
          var r = p.map( i,0 ,num ,80 ,220);
          var g = p.map( i,0 ,num ,150 ,190);
          var b = p.map( i,0 ,num ,190 ,139);
          p.fill(r,g,b);
        p.push();

    	p.translate((wid / num) * i+((p.windowWidth - wid) / 2), yCenter);
        rotation = ((p.TWO_PI / num) * i) + offset;
        rotation = p.sin(rotation);
        p.rotate(rotation);
      	p.rect(0, 0+100, rectWidth, rectHeight);
        p.translate(-((p.windowWidth / num) * i+((p.windowWidth - wid) / 2)), -yCenter);
      	p.pop();
      }

      speed = p.map(num, 20, 250, 0.3, 1.2);
      offset += (p.TWO_PI / num) * speed;
    }
    p.windowResized=function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
}
