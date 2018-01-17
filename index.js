function calculateSquareArea(w, l) {
  return w * l;
}

function calculateSquarePerimeter(w, l) {
  return 2 * w + 2 * l;
}

function calculateCircleArea(r) {
  return Math.PI * r * r;
}

function calculateCircleCircumference(r) {
  return 2 * Math.PI * r;
}

function calculateCubeArea(a) {
  return 6 * a * a;
}

function calculateCubeVolume(a) {
  return a * a * a;
}

function calculateTubeArea(r, h) {
  return (2 * (2 * Math.PI * r)) + ((2 * Math.PI * r) * h)
}

function calculateTubeVolume(r, h) {
  return Math.PI * r * r * 2 * h;
}

function add(varA, varB) {
  return varA + varB;
}

function calculateTubeVolumeWithCircle(circleArea, h) {
  return circleArea * h;
}


//LEVEL 1

var squareArea = calculateSquareArea(7, 5);
var squarePerimeter = calculateSquarePerimeter(7, 5);
var circleArea = calculateCircleArea(5);
var circleCircumference = calculateCircleCircumference(5);
var cubeArea = calculateCubeArea(7);
var cubeVolume = calculateCubeVolume(7);
var tubeArea = calculateTubeArea(7, 5);
var tubeVolume = calculateTubeVolume(7, 5);

console.log(`square area = ${squareArea}`);
console.log(`square perimeter = ${squarePerimeter}`);
console.log(`circle area = ${circleArea}`);
console.log(`circle circumference = ${circleCircumference}`);
console.log(`cube area = ${cubeArea}`);
console.log(`cube volume = ${cubeVolume}`);
console.log(`tube area = ${tubeArea}`);
console.log(`tube volume = ${tubeVolume}`);


//LEVEL 2

squareArea = calculateSquareArea(add(7, 5), 3);
console.log(`square area = ${squareArea}`);


tubeVolume = calculateTubeVolumeWithCircle(calculateCircleArea(7), 5);
console.log(`tube volume = ${tubeVolume}`);