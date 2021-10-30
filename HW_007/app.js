import Car from "./car.js";
import Truck from "./truck.js";
import vehicleFactory from "./objectFactory.js";

vehicleFactory.registerObject("car", Car);
vehicleFactory.registerObject("truck", Truck);

const car = new (vehicleFactory.createObject("car"))("Ford", 2021, 200, 5, "silver");
car.displayInfo();
car.transportPeople();
car.startEngine();
car.transportPeople();

const truck = new (vehicleFactory.createObject("truck"))("Maz", 2020, 160, 4, "orange");
const truck2 = new (vehicleFactory.createObject("truck"))("Kraz", 2019, 160, 4, "green");
truck.displayInfo();
truck.transportContainer();
truck.startEngine();
truck.transportContainer();

Car.getTotalNumberProduced();
Truck.getTotalNumberProduced();