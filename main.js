var $car = document.getElementById('car');
console.log($car);
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowUp') {
    $car.style.transform = "rotate(270deg)"
  }
  else if (event.code === 'ArrowDown') {
    $car.style.transform = "rotate(90deg)"
  }
  else if (event.code === 'ArrowLeft') {
    $car.style.transform = "rotate(180deg)"
  }
  else if (event.code === 'ArrowRight') {
    $car.style.transform = "rotate(0deg)"
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

function move(){
  $car.style.top = data.location.y;
  data.started = true;
  moveCar = setInterval(function(){
    data.location.x++;
    $car.style.left = data.location.x.toString().concat('px');
  }, 16)
}

function stop(){
  clearInterval(moveCar);
  data.started = false;
}
