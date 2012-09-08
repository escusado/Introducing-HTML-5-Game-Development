(function() {

  ig.module('game.main').requires('impact.game', 'game.levels.dorm1').defines(function() {
    window.MyGame = ig.Game.extend({
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
    ig.Timer.maxStep = .2;
    return ig.main('#canvas', MyGame, 1, 640, 480, 2);
  });

}).call(this);
