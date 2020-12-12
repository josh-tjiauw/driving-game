var $car = document.getElementById('car');
var direction;
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowUp' && direction !== 'up') {
    direction = 'up';
    $car.style.transform = "rotate(270deg)"
    if(data.started === true){
      move('up');
    }
  }
  else if (event.code === 'ArrowDown' && direction !== 'down') {
    direction = 'down';
    $car.style.transform = "rotate(90deg)"
    if (data.started === true) {
      move('down');
    }
  }
  else if (event.code === 'ArrowLeft' && direction !== 'left') {
    direction = 'left';
    $car.style.transform = "rotate(180deg)"
    if (data.started === true) {
      move('left');
    }
  }
  else if (event.code === 'ArrowRight' && direction !== 'right') {
    direction = 'right';
    $car.style.transform = "rotate(0deg)"
    if (data.started === true) {
      move('right');
    }
  }
  else if (event.code === 'Space' && data.started === false) {
    move();
  }
  else if (event.code === 'Space' && data.started === true){
    stop();
  }
});

var data = {
  location: {
    x: 0,
    y: 0
  },
  started: false
};

var moveCarRight;
var moveCarLeft;
var moveCarUp;
var moveCarDown;

function move(direction){
  data.started = true;
  if(direction === 'right'){
    clearInterval(moveCarLeft);
    clearInterval(moveCarDown);
    clearInterval(moveCarUp);
    moveCarRight = setInterval(function () {
      data.location.x+=10;
      $car.style.top = data.location.y.toString().concat('px');
      $car.style.left = data.location.x.toString().concat('px');
    }, 16)
  }

  if(direction === 'left'){
    clearInterval(moveCarRight);
    clearInterval(moveCarDown);
    clearInterval(moveCarUp);
    moveCarLeft = setInterval(function () {
      data.location.x-=10;
      $car.style.top = data.location.y.toString().concat('px');
      $car.style.left = data.location.x.toString().concat('px');
    }, 16)
  }

  if(direction === 'up'){
    clearInterval(moveCarLeft);
    clearInterval(moveCarRight);
    clearInterval(moveCarDown);
    moveCarUp = setInterval(function () {
      data.location.y-=10;
      $car.style.top = data.location.y.toString().concat('px');
      $car.style.left = data.location.x.toString().concat('px');
    }, 16)
  }

  if(direction === 'down'){
    clearInterval(moveCarLeft);
    clearInterval(moveCarRight);
    clearInterval(moveCarUp);
    moveCarDown = setInterval(function () {
      data.location.y+=10;
      $car.style.top = data.location.y.toString().concat('px');
      $car.style.left = data.location.x.toString().concat('px');
    }, 16)
  }
}

function stop(){
  clearInterval(moveCarLeft);
  clearInterval(moveCarRight);
  clearInterval(moveCarUp);
  clearInterval(moveCarDown);
  data.started = false;
}
