

/*const add = (a, b) => a + b;

console.log(add(55, 1));

const user = {
    name: 'Ana',
    cities: [" Beograd", " UZice"],
    printPlacesLived: function () {
        this.cities.forEach ((city) => {
            console.log(this.name + 'has lived in' + city);
        });
    }
};

user.printPlacesLived();*/

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    printMultiply() {
        return this.numbers.map((number) => number *this.multiplyBy); 
    }
};

console.log(multiplier.printMultiply());