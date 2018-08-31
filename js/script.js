var main01; //画像用の変数
var main02; //画像用の変数
var main03; //画像用の変数


function preload() {
    //画像を読み込み
    main01 = loadAnimation('./asset/img/main0100.png', './asset/img/main0159.png');
    main02 = loadAnimation('./asset/img/main0200.png', './asset/img/main0259.png');
    main03 = loadAnimation('./asset/img/main0300.png', './asset/img/main0359.png');
    main01.playing = false; // 再生しないように
    main02.playing = false; // 再生しないように
    main03.playing = false; // 再生しないように
}


function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    canvas.parent('canvas-container');
    background(0);
    colorMode(HSB,360,100,100,100);

    // スプライトを配置
    main01 = createSprite(windowWidth/2+18, 450);
    main02 = createSprite(windowWidth/2+390, 450);
    main03 = createSprite(windowWidth/2-340, 450);

    var worksCanvas = $('#works-canvas-container');
    var closeBtn = $('.close-btn');
    var fullscreenBtn = $('.fullscreen-btn');

    // アニメーションを追加
    main01.addAnimation('stop', './asset/img/main0100.png'); //初期状態停止
    main02.addAnimation('stop', './asset/img/main0200.png'); //初期状態停止
    main03.addAnimation('stop', './asset/img/main0300.png'); //初期状態停止
    main01.addAnimation('start','./asset/img/main0101.png', './asset/img/main0159.png'); //再生用のアニメーションを登録
    main02.addAnimation('start', './asset/img/main0201.png', './asset/img/main0259.png'); //再生用のアニメーションを登録
    main03.addAnimation('start', './asset/img/main0301.png', './asset/img/main0359.png'); //再生用のアニメーションを登録

    main01.mouseActive = true; // マウスに反応するように
    main02.mouseActive = true; // マウスに反応するように
    main03.mouseActive = true; // マウスに反応するように

    // ホバーしたら
    main01.onMouseOver = function(){
        this.changeAnimation('start');
        this.animation.goToFrame(this.animation.getLastFrame());
    }
    main02.onMouseOver = function(){
        this.changeAnimation('start');
        this.animation.goToFrame(this.animation.getLastFrame());
    }
    main03.onMouseOver = function(){
        this.changeAnimation('start');
        this.animation.goToFrame(this.animation.getLastFrame());
    }

    // ホバーを外したら
    main01.onMouseOut = function(){
        this.changeAnimation('start');
        this.animation.goToFrame(0);
    }
    main02.onMouseOut = function(){
        this.changeAnimation('start');
        this.animation.goToFrame(0);
    }
    main03.onMouseOut = function(){
        this.changeAnimation('start');
        this.animation.goToFrame(0);
    }

    // クリックしたら
    main01.onMousePressed = function(){
        // click
        console.log('click01!!!!!');
        loadCanvas(works01);
        changeBtn('#FFFFFF');
        $('#audio01').get(0).play();
        $('#audio01').get(0).loop=true;
    }
    main02.onMousePressed = function(){
        // click
        console.log('click02!!!!!');
        loadCanvas(works02);
        changeBtn('#FFFFFF');
        $('#audio02').get(0).play();
        $('#audio02').get(0).loop=true;
    }
    main03.onMousePressed = function(){
        // click
        console.log('click03!!!!!');
        loadCanvas(works03);
        changeBtn('#000000');
        $('#audio03').get(0).play();
        $('#audio03').get(0).loop=true;

;    }


    function loadCanvas(work){
        var myp5 = new p5(work, 'works-canvas-container');
        worksCanvas.addClass('in');
        closeBtn.addClass('in');
        fullscreenBtn.addClass('in');
    }

    function changeBtn(color){
        $('close-btn').css('color',color);
        $('fullscreen-btn').css('color',color);
    }

    $('.close-btn').on('click',function(){
        worksCanvas.removeClass('in');
        $('#audio01').get(0).pause();
        $('#audio02').get(0).pause();
        $('#audio03').get(0).pause();
        setTimeout(function(){
            var myp5 = $('#defaultCanvas1');
            myp5.remove();
        },1000);
    });
    fullscreenBtn.on('click',function(){
        console.log("fullscreenBtn clicked!");
        document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
    });
}


function draw(){
    background(0);
    drawSprites(); // スプライトを実行　これが必要
}
