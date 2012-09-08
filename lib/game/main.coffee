ig.module(
  'game.main'

).requires(
  'impact.game'
  'game.levels.dorm1'

).defines ->
  window.MyGame = ig.Game.extend
    gravity: 300
    init: ->
          @loadLevel LevelDorm1
          # ig.Timer.maxStep()
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
  ig.Timer.maxStep = .2
  ig.main '#canvas', MyGame, 1, 640, 480, 2