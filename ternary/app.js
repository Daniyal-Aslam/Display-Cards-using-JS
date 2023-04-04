class Car {
    constructor(door,engine,color,name){
        this.door = door;
        this.engine=engine;
        this.color=color;
        this.name=name;
    }
    carState(){
        return `we have a beautiful ${this.name} car which has ${this.door} doors. and a amazing ${this.engine} engine.
        along with a amazing ${this.color} color
        `
    }
}

class Mazda extends Car{
    constructor(doors,engine,color,brand,carState){
        super(doors,engine,color)
        this.brand=brand;
        this.wheel=4;
        this.ac=true; 
    }
    mybrand(){
        return  `We have a Brand called ${this.brand} ${this.fruits1}`
    
}
}
const parado = new Car(4,'V8','Black','Parado'); 
const mazda = new Mazda(8,'V6','green','Truck','suzuki'); 
console.log(parado); 
console.log(mazda);
// console.log(mazda.mybrand());
const main = document.getElementById('root');
main.innerHTML= `First class statement: ${parado.carState()} and<br> second class statement: ${mazda.mybrand()}`;

class Employee {
    constructor(employeeData, [startDate, department]) {
      const [name, age, salary] = employeeData;
      this.name = name;
      this.age = age;
      this.salary = salary;
      this.startDate = startDate;
      this.department = department;
    }
  
    getInfo() {
      console.log(`${this.name} is ${this.age} years old and earns ${this.salary} per year. They started working on ${this.startDate} in the ${this.department} department.`);
    }
  }
  
  const employeeData = ['John Doe', 30, 50000];
  const employeeInfo = ['2020-01-01', 'Sales'];
  const employee = new Employee(employeeData, employeeInfo);
  console.log(employee)