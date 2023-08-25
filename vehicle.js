class A28MercurySedan {
    constructor(maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService, mileage) {
        this.maximumPassengers = maximumPassengers || 5;
        this.passengers = passengers || 0;
        this.numberOfWheels = numberOfWheels || 4;
        this.maximumSpeed = maximumSpeed || 160;
        this.fuel = fuel || 10;
        this.scheduleService = scheduleService || false;
        this.mileage = mileage || 0;
    }

    loadPassenger(num) {
        if (this.passengers + num <= this.maximumPassengers) {
            this.passengers += num;
            return true;
        }
        return false;
    }

    start() {
        if (this.fuel > 0) {
            return true;
        }
        return false;
    }

    scheduleService() {
        if (this.mileage > 30000) {
            return true;
        }
        return false;
    }
}

const myCar = new A28MercurySedan(5, 2, 4, 160, 15, false, 25000);

console.log(myCar);
console.log(myCar.loadPassenger(3));
console.log(myCar.start());
console.log(myCar.scheduleService());
