// Initialisation on global variables
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var game
var score




$('#play').click(function (e) {

  if (gameOver === true) {

    game = new Game(ctx)
    game.start()
    score = 0

    return gameOver = false
  }
  if (game) {
    game.stop()
  }
  game = new Game(ctx)
  game.start()


  window.addEventListener('keydown', function (e) {
    e.preventDefault();
    game.keys = (game.keys || []);
    game.keys[e.keyCode] = (e.type == "keydown");
  })
  window.addEventListener('keyup', function (e) {
    game.keys[e.keyCode] = (e.type == "keydown");
  })
})
























