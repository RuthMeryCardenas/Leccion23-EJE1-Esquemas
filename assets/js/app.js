//VARIABLES GLOBALES
  var container = document.getElementById('container');
  printCubes(container);
  printCubes(container);

//FUNCIONES
function createCube (parent, classList) {
  var cube = document.createElement('div');
  cube.classList.add(classList[0]);
  cube.classList.add(classList[1]);
  parent.appendChild(cube);
  return cube;
}

function printCubes(container) {
  var cube = createCube (container, ["cube-big", "cube-center"]);
  createCube (cube, ["cube-medium", "cube-absolute"]);
  createCube (cube, ["cube-small", "cube-absolute"]);
}
