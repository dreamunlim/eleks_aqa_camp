import Vehicle from "./vehicle.js"

class Car extends Vehicle {
    constructor(model, year, maxSpeed, maxPassengers, colour) {
        super(model, year, maxSpeed);
        this.constructor.type = "car";
        this.maxPassengers = maxPassengers;
        this.colour = colour;
    }

    displayInfo() {
        super.displayInfo();
        console.log("Max passengers: ", this.maxPassengers,
            "\nColour: ", this.colour,
            "\n");
    }

    transportPeople() {
        if (! this.engineStarted) {
            console.log(`Start ${this.constructor.type} engine before transporting people.`);
        } else {
            console.log(`${this.constructor.name} status: I am transporting passengers.\n`);
        }
    }

    startEngine() {
        this.engineStarted = true;
        console.log(`${this.constructor.name} engine has been started!`);
    }
}

export default Car;