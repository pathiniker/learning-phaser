var SideScroller = SideScroller || {};

// this is the object that will contain the Boot state,
// as passed in main.js
SideScroller.Boot = function(){};

// setting game configuration and loading
// the assets for the loading screen
SideScroller.Boot.prototype = {
  preload: function(){

    // assets we'll use in the loading screen
    this.load.image('preloadbar', 'assets/images/preloader-bar.png');
  },
    create: function(){

      // loading screen background
      this.game.stage.backgroundColor = "#ffffff";

      // scaling options
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

      // center the game horizontally
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;

      // set screen size automatically
      this.scale.setScreenSize(true);

      // initiate the physics engine and launch the Preload state
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.state.start('Preload');
    }

}; //end prototype
