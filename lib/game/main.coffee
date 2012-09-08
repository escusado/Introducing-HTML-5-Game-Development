ig.module(
  'game.main'

).requires(
  'impact.game'
  'game.levels.dorm1'

).defines ->
  MyGame = ig.Game.extend
    gravity: 300
    init: ->
          @loadLevel LevelDorm1

          #Bind keys
          ig.input.bind ig.KEY.LEFT_ARROW, 'left'
          ig.input.bind ig.KEY.RIGHT_ARROW, 'right'
          ig.input.bind ig.KEY.X, 'jump'
          ig.input.bind ig.KEY.C, 'shoot'

  	update: ->
  		#Update all entities and backgroundMaps
  		@parent()
  		
  		#Add your own, additional update code here

  	
  	draw: ->
  		#Draw all entities and backgroundMaps
  		@parent()

  # Start the Game with 60fps, a resolution of 320x240, scaled
  # up by a factor of 2
  ig.main '#canvas', MyGame, 60, 320, 240, 2