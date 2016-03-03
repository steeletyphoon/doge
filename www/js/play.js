// STATE DogeDodge.play

'use strict'

 var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    console.log("%c~~~ Booting the DogeDodge ~~~\n Compliments of Skilstak", "color:#fdf6e3; background:#073642");
  },

  preload : function () {
    this.load.image('background', 'assets/background.jpg');
    this.load.spritesheet('dodger', 'assets/groom.png', 64,199,2);
    this.load.spritesheet('fall', 'assets/Imported piskel.png', 60, 150);
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,"background" );
    this.background.autoScroll(0,50);
    this.background.scale.set(1);

    this.dodger = this.add.sprite(160,518, 'dodger');
    this.dodger.anchor.set(0.5,0.5);
    this.fall = this.add.sprite(296 ,200, 'fall');
    this.fall.anchor.set(0.5,0.5);
    
    this.cursors = game.input.keyboard.createCursorKeys();

  
  },



  update: function () {
    if (this.cursors.left.isDown) {
      this.dodger.x -= 10;
    }
    if (this.cursors.right.isDown) {
      this.dodger.x += 10;
    }
  }

};


