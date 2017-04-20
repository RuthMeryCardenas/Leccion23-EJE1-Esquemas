//VARIABLES GLOBALES
  var container = document.getElementById('container');

//FUNCIONES
function createCube (parent, classList) {
  var cube = document.createElement('div');
  for (var i = 0; i < classList.length; i++) {
    cube.classList.add(classList[i]);
  }
  parent.appendChild(cube);
  return cube;
}
function printCubes(numberCubes, container) {
  for (var i = 0; i < numberCubes; i++) {
    var cube = createCube (container, ["cube-big", "cube-center"]);
    createCube (cube, ["cube-medium", "cube-absolute"]);
    createCube (cube, ["cube-small", "cube-absolute"]);
  }
}

//Imprimir 2 cubos
  printCubes(2, container);
