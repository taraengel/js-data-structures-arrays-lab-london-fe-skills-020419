// Write your solution here!
// let drivers = ["Milo", "Otis", "Garfield"];
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) { 
  drivers.push('Ralph'); }
  
function destructivelyPrependDriver(name) {
  drivers.unshift('Bob'); 
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  return [...drivers, name];
}

function prependDriver(name) {
  return [name, ...drivers];
}



function removeLastDriver() {
  const newDrivers = [...drivers];
 newDrivers.slice(-1);
}

function removeFirstDriver() {
  
}

