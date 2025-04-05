// Complete the js code
function Car(make, model) {
	this._make=make;
	this._model=model;
}
Car.prototype.getMakeModel = function(){
	return this._make + this._model
}

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model)
	this._topSpeed = topSpeed
}



SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function(){
	return this._topSpeed;
}

// Create a new SportsCar instance
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Call getMakeModel() to get the make and model of the car
console.log(car.getMakeModel());
// Output: Ferrari Testarossa

// Call getTopSpeed() to get the top speed of the sports car
console.log(car.getTopSpeed()); // Output: 200



// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
