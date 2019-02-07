
class Person {
    constructor(name = 'Anonymus', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `HI. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`
    }
}

// Da ne bi kopirali ceo kod iz Person, staviti extends

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); //pozovamo Parenta
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, homeLocation) {
        super(name);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGretting() {
        let greeting = super.getGretting();

        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Traveler("Ana", 'Philadelphia');
console.log(me.getGretting());

const other = new Traveler(undefined, 'Nowhere');
console.log(other.getGretting());
