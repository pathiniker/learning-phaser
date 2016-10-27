// Create an object that will keep all the data from our game
var SideScroller = SideScroller || {};

// Initiating our Phaser game with a screen resolution
// Setting rendering to AUTO lets Phaser decide,
// according to what's available
SideScroller.game = new Phaser.Game(746, 420, Phaser.AUTO, '');

// Add 'states', the general stages of the application
SideScroller.game.state.add('Boot', SideScroller.Boot);
SideScroller.game.state.add('Preload', SideScroller.Preload);
SideScroller.game.state.add('Game', SideScroller.Game);
SideScroller.game.state.start('Boot');
