:// STATE DogeDodge.play

'use strict'

var = Dogedodge = {}

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    console.log("%c~~~ Booting the DogeDodge ~~~\n Compliments of Skilstak", "color:#fdf6e3; background:#073642");
  },

  preload : function () {
    this.load.spritesheet('background', 'assets/background.png');
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,"background" );
    this.backround.autoScroll(0,-50);
    this.background.scale.set(1);
  },

  update: function () {
  }

};
