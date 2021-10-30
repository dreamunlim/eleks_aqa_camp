import Vehicle from "./vehicle.js"

class Truck extends Vehicle {
    constructor(model, year, maxSpeed, maxPassengers, colour) {
        super(model, year, maxSpeed);
        this.constructor.type = "truck";
        this.maxPassengers = maxPassengers;
        this.colour = colour;
    }

    displayInfo() {
        super.displayInfo();
        console.log("Max passengers: ", this.maxPassengers,
            "\nColour: ", this.colour,
            "\n");
    }

    transportContainer() {
        if (! this.engineStarted) {
            console.log(`Start ${this.constructor.type} engine before transporting container.`);
        } else {
            console.log(`${this.constructor.name} status: I am transporting heavy container.\n`);
        }
    }

    startEngine() {
        this.engineStarted = true;
        console.log(`${this.constructor.name} engine has been started!`);
    }
}

export default Truck;