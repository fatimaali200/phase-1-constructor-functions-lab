function Scooter(year, color, model){
    this.year=year;
    this.color=color;
    this.model=model;
}
const samson=new Scooter(2000,"red","swoosh");

function Driver(name, age, experience){
    this.name=name;
    this.age=age;
    this.experience=experience;
}
let allison = new Driver("Allison", "16 years", "2 years");