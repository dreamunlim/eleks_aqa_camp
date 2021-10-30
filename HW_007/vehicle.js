class Vehicle {
    static totalNumberProduced = 0;
    static type = null;

    constructor(model, year, maxSpeed) {
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineStarted = false;
        this.constructor.totalNumberProduced += 1;
    }

    static getTotalNumberProduced() {
        console.log(`Total number of object type "${this.type}" produced: `, this.totalNumberProduced);
    }

    displayInfo() {
        console.log("\nName: ", this.model,
            "\nYear: ", this.year,
            "\nMax speed: ", this.maxSpeed,
            "\nType: ", this.constructor.type);
    }

    startEngine() {
        console.log("The engine has not been installed yet.");
    }
}

export default Vehicle;