(function() {
  /*;

  var EntityZombie;

  EntityZombie = {};

  */;


  ig.module('game.entities.zombie').requires('impact.entity').defines(function() {
    return EntityZombie = ig.Entity.extend({
      animSheet: new ig.AnimationSheet('media/zombie.png', 16, 16),
      size: {
        x: 8,
        y: 14
      },
      offset: {
        x: 4,
        y: 2
      },
      maxVel: {
        x: 100,
        y: 100
      },
      friction: {
        x: 150,
        y: 0
      },
      speed: 14,
      flip: false,
      init: function(x, y, settings) {
        this.parent(x, y, settings);
        return this.addAnim('walk', .07, [0, 1, 2, 3, 4, 5]);
      },
      update: function() {
        var nextHorTile, nextVerTile, xdir;
        nextHorTile = this.pos.x + (this.flip ? this.size.x / 2 : this.size.x - (this.size.x / 2));
        nextVerTile = this.pos.y + this.size.y + 1;
        if (!ig.game.collisionMap.getTile(nextHorTile, nextVerTile)) {
          this.flip = !this.flip;
        }
        xdir = this.flip ? -1 : 1;
        this.vel.x = this.speed * xdir;
        this.currentAnim.flip.x = this.flip;
        return this.parent();
      },
      handleMovementTrace: function(res) {
        this.parent(res);
        if (res.collision.x) {
          return this.flip = !this.flip;
        }
      }
    });
  });

}).call(this);
