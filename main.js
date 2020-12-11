var $car = document.getElementById('car');
console.log($car);
document.addEventListener('keydown', function(event){
  if(event.code === 'ArrowUp'){
    console.log('Hi');
  }
  else if(event.code === 'ArrowDown'){
    console.log('Hello');
  }
  else if (event.code === 'ArrowLeft') {
    console.log('Hey');
  }
  else if (event.code === 'ArrowRight') {
    console.log('Her');
  }
  else {
    return;
  }
});
