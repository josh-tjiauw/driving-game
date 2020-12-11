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
