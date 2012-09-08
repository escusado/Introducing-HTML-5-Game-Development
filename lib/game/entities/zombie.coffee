`/*`
EntityZombie = {}
`*/`

ig.module(
  'game.entities.zombie'

).requires(
  'impact.entity'

).defines ->
  EntityZombie = ig.Entity.extend
    #INIT
    
    #spritesheet
    animSheet : new ig.AnimationSheet 'media/zombie.png', 16, 16
    
    #size values
    size:     x: 8  , y: 14
    offset:   x: 4  , y: 2
    
    #movement values
    maxVel:   x: 100, y: 100
    friction: x: 150, y: 0
    speed: 14

    #direction
    flip: no

    #Methods
    init: (x, y, settings) ->
      @parent x, y, settings

      #Set animations
      @addAnim 'walk', .07, [0,1,2,3,4,5]

    update: ->
      #next floor tile position
      nextHorTile = @pos.x+( if @flip then (@size.x/2) else (@size.x-(@size.x/2)) )
      nextVerTile = @pos.y + @size.y+1
      
      #near the edge?
      if not ig.game.collisionMap.getTile( nextHorTile,  nextVerTile)
        @flip = not @flip #Change direction!

      #motion calculation
      xdir = if @flip then -1 else 1 #check direction
      @vel.x = @speed * xdir #set next direction movement
      @currentAnim.flip.x = @flip #handle sprite direction

      #update animation
      @parent()

    #set collision detection to level collision map
    handleMovementTrace: (res) ->
      @parent res
      if res.collision.x
        @flip = not @flip
