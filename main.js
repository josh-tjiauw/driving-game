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
  else if (event.code === 'Space') {
    move();
  }
  else {
    return;
  }
});

var data = {
  location: {
    x: 0,
    y: 0
  }
};

function move(){
  $car.style.top = data.location.y;
  var moveCar = setInterval(function(){
    data.location.x++;
    $car.style.left = data.location.x.toString().concat('px');
  }, 16)
}
