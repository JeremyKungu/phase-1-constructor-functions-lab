function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

const scoot = new Scooter("scoots", "red", "2015");

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}