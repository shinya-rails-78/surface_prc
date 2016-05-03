enchant();

window.onload = function(){
    var game = new Core(320,320);
    game.onload = function(){
	
	sprite = new Sprite(320,320);
	surface = new Surface(320,320);
	sprite.image = surface;

        rx = Math.random()*200;
        ry = Math.random()*200;
	
	c = surface.context;
	c.beginPath();
	c.arc(rx,ry,30,0,360);
	c.fillStyle='rgba(192, 80, 77, 0.7)';
	c.fill();
	c.closePath();

        game.rootScene.addChild(sprite); 

    }
    game.rootScene.backgroundColor='rgb(240,255,255)';
    game.start();
}
