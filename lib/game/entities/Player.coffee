`/*`
EntityPlayer = {}
`*/`
ig.module(
  'game.entities.Player'

).requires(
  'impact.entity'

).defines ->
  EntityPlayer =  ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/player.png', 16, 16
    
    size:
      x: 8
      y: 14
    offset:
      x: 4
      y: 2
    flip: no

    maxVel:
      x: 100
      y: 150
    friction:
      x: 600
      y: 0
    accelGround: 400
    accelAir: 200
    jump: 200

    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'idle', 1, [0]
      @addAnim 'run', .07, [0,1,2,3,4,5]
      @addAnim 'jump', 1, [9]
      @addAnim 'fall', .4, [6,7]

    update: ->
      accel = if @standing then @accelGround else @accelAir

      #move
      if ig.input.state 'left'
        @accel.x = -accel
        @flip = yes
      else if ig.input.state 'right'
        @accel.x = accel
        @flip = no
      else
        @accel.x = 0

      #jump
      if @standing and ig.input.pressed 'jump'
        @vel.y = -@jump

      #calculate animations
      if @vel.y < 0
        @currentAnim = @anims.jump
      else if @vel.y > 0
        @currentAnim = @anims.fall
      else if @vel.x isnt 0
        @currentAnim = @anims.run
      else
        @currentAnim = @anims.idle

      @currentAnim.flip.x = @flip

      #calculate move!
      @parent()