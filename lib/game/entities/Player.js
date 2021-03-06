(function() {
  /*;

  var EntityPlayer;

  EntityPlayer = {};

  */;


  ig.module('game.entities.Player').requires('impact.entity').defines(function() {
    return EntityPlayer = ig.Entity.extend({
      animSheet: new ig.AnimationSheet('media/player.png', 16, 16),
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
        y: 150
      },
      friction: {
        x: 600,
        y: 0
      },
      accelGround: 400,
      accelAir: 200,
      jump: 200,
      flip: false,
      init: function(x, y, settings) {
        this.parent(x, y, settings);
        this.addAnim('idle', 1, [0]);
        this.addAnim('run', .07, [0, 1, 2, 3, 4, 5]);
        this.addAnim('jump', 1, [9]);
        return this.addAnim('fall', .4, [6, 7]);
      },
      update: function() {
        var accel;
        accel = this.standing ? this.accelGround : this.accelAir;
        if (ig.input.state('left')) {
          this.accel.x = -accel;
          this.flip = true;
        } else if (ig.input.state('right')) {
          this.accel.x = accel;
          this.flip = false;
        } else {
          this.accel.x = 0;
        }
        if (this.standing && ig.input.pressed('jump')) {
          this.vel.y = -this.jump;
        }
        if (this.vel.y < 0) {
          this.currentAnim = this.anims.jump;
        } else if (this.vel.y > 0) {
          this.currentAnim = this.anims.fall;
        } else if (this.vel.x !== 0) {
          this.currentAnim = this.anims.run;
        } else {
          this.currentAnim = this.anims.idle;
        }
        this.currentAnim.flip.x = this.flip;
        return this.parent();
      }
    });
  });

}).call(this);
