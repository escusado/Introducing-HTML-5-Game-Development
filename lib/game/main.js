(function() {
  ig.module('game.main').requires('impact.game', 'game.levels.dorm1').defines(function() {
    var MyGame;
    MyGame = ig.Game.extend({
      gravity: 300,
      init: function() {
        this.loadLevel(LevelDorm1);
        ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
        ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
        ig.input.bind(ig.KEY.X, 'jump');
        return ig.input.bind(ig.KEY.C, 'shoot');
      }
    });
    ({
      update: function() {
        return this.parent();
      },
      draw: function() {
        return this.parent();
      }
    });
    return ig.main('#canvas', MyGame, 60, 320, 240, 2);
  });
}).call(this);
