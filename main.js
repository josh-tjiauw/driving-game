var $car = document.getElementById('car');
console.log($car);
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowUp') {
    $car.style.transform = "rotate(270deg)"
    if(data.started === true){
      move('up');
    }
  }
  else if (event.code === 'ArrowDown') {
    $car.style.transform = "rotate(90deg)"
    if (data.started === true) {
      move('down');
    }
  }
  else if (event.code === 'ArrowLeft') {
    $car.style.transform = "rotate(180deg)"
    if (data.started === true) {
      move('left');
    }
  }
  else if (event.code === 'ArrowRight') {
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
    clearInterval(moveCarLeft, moveCarDown, moveCarUp)
    moveCarRight = setInterval(function () {
      data.location.x++;
      $car.style.top = data.location.y.toString().concat('px');
      $car.style.left = data.location.x.toString().concat('px');
    }, 16)
  }

  if(direction === 'left'){
    clearInterval(moveCarDown, moveCarRight, moveCarUp)
    moveCarLeft = setInterval(function () {
      data.location.x--;
      $car.style.top = data.location.y.toString().concat('px');
      $car.style.left = data.location.x.toString().concat('px');
    }, 16)
  }

  if(direction === 'up'){
    clearInterval(moveCarLeft, moveCarRight, moveCarDown)
    moveCarUp = setInterval(function () {
      data.location.y--;
      $car.style.top = data.location.y.toString().concat('px');
      $car.style.left = data.location.x.toString().concat('px');
    }, 16)
  }

  if(direction === 'down'){
    clearInterval(moveCarLeft, moveCarRight, moveCarUp)
    moveCarDown = setInterval(function () {
      data.location.y++;
      $car.style.top = data.location.y.toString().concat('px');
      $car.style.left = data.location.x.toString().concat('px');
    }, 16)
  }
}

function stop(){
  clearInterval(moveCarRight, moveCarLeft, moveCarUp, moveCarDown);
  data.started = false;
}
