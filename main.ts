import { Car } from './car';
import { Boat } from './boat';
import { Plane } from './plane';
import { Vehicle } from './vehicle';

const car1: Car = new Car('Ford', 20);
const car2: Car = new Car('Mercedes', 30);
const plane1: Plane = new Plane('Airbus', 40);
const plane2: Plane = new Plane('Milleras', 50);
const boat1: Boat = new Boat('Guard', 200);
const boat2: Boat = new Boat('Style', 4);

const vehicles: Vehicle[] = [car1, car2, plane1, plane2, boat1, boat2];

for (let vehicle of vehicles) {
  for (let i = 0; i < 2; i++) {
    vehicle.accelerate();
  }
  for (let i = 0; i < 10; i++) {
    vehicle.decelerate();
  }
}

for (let vehicle of vehicles) {
  console.log(
    `Vehicle with name ${vehicle.name} has a speed of ${vehicle.currentSpeed} km/h`
  );
}

function filterByType(vehiclesArray: Vehicle[]) {
  const updatedVehiclesArray: Vehicle[] = [];

  for (let vehicle of vehiclesArray) {
    if (vehicle instanceof Plane) {
      updatedVehiclesArray.push(vehicle);
    }
  }

  return updatedVehiclesArray;
}

filterByType(vehicles).forEach((vehicle) => console.log(vehicle.currentSpeed));
