var $car = document.getElementById('car');
var direction;
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowUp' && direction !== 'up') {
    direction = 'up';
  }
  else if (event.code === 'ArrowDown' && direction !== 'down') {
    direction = 'down';
  }
  else if (event.code === 'ArrowLeft' && direction !== 'left') {
    direction = 'left';
  }
  else if (event.code === 'ArrowRight' && direction !== 'right') {
    direction = 'right';
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

var moveCar;

function move(event){
  data.started = true;
  clearInterval(moveCar);
  moveCar = setInterval(function () {
    if(direction === 'right'){
      data.location.x += 10;
      $car.style.transform = "rotate(0deg)"
    }
    else if(direction === 'left'){
      data.location.x -= 10;
      $car.style.transform = "rotate(180deg)"
    }
    else if(direction === 'up'){
      data.location.y -= 10;
      $car.style.transform = "rotate(270deg)"
    }
    else if(direction === 'down'){
      data.location.y += 10;
      $car.style.transform = "rotate(90deg)"
    }
    $car.style.top = data.location.y.toString().concat('px');
    $car.style.left = data.location.x.toString().concat('px');
  }, 16)
}

function stop(){
  clearInterval(moveCar);
  data.started = false;
}
