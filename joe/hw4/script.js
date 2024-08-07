let myStaticArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let myArrayObject = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(myStaticArray, myArrayObject);
console.log(myArrayObject.shift());
console.log(myArrayObject.length);
class Car {
  year;
  make;
  model;
  maintLog = [];
  mileage;
  nextOilChange = 3000;

  constructor(year, make, model, startingMileage) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.mileage = startingMileage ?? 0;
    this.nextOilChange = this.mileage + 3000;
  }

  performOilChange() {
    this.maintLog.push("Changed Oil");
    this.nextOilChange = this.mileage + 3000;
  }

  isNeedOilChange() {
    return this.mileage > this.nextOilChange;
  }

  updateMileage(miles, override) {
    if (override) {
      this.mileage = miles;
    } else {
      this.mileage += miles;
    }
    if (this.isNeedOilChange()) {
      console.log(
        `${this.year} ${this.make} ${this.model} needs an oil change!`
      );
    }
  }
}

let myCivic = new Car(2019, "Honda", "Civic", 40000);
let myAccord = new Car();
myAccord.year = 2020;
myAccord.make = "Honda";
myAccord.model = "Accord";
console.log(myCivic);
console.log(myAccord);

let myCars = [myAccord, myCivic];
myCars.forEach((car) => {
  car.mileage += Math.floor(Math.random() * 10000);
});
myCars.forEach((car) => {
  car.performOilChange();
  console.log(car);
});

myAccord.updateMileage(300);
console.log(myAccord);

myAccord.updateMileage(3000, true);
console.log(myAccord);

for (let i = 0; i < myCars.length; i++) {
  //one loop for each car
}


console.log(...myCars); 

for (let car of myCars) {
    console.log({...car}); 
}

let personDetails = {
    name: {
        firstName: 'John', 
        lastName: 'Doe', 
        middleInitial: 'D'
    },
    address: {
        line1: '123 fakey st',
        line2: '',
        city: 'Fakersville', 
        state: 'Ohio'
    }
}

let patientDetails = {
    height: 72, 
    wieght: 250, 
    lastVisit: new Date().setMonth(2),
}

let fullPatientPersonDetails = {
    ...personDetails, 
    ...patientDetails
}

console.log(fullPatientPersonDetails); 

let evens = [0,2,4,6,8]; 
let odds = [1,3,5,7,9];
let numbers = [...evens, ...odds]; 
console.log(numbers); 

console.log([...Object.values(fullPatientPersonDetails)]); 

let tempCar = {
    make: 'Komatsu', 
    year: 3030, 
    model: 'D33'
}
let t = new Car()
let realCar = new Car(...Object.values(tempCar)); 
let realCar2 = new Car(); 
realCar2 = {...realCar2, ...tempCar};
console.log(realCar2); 




let obj ={
    a: 1, 
    b: 2, 
    c: 3
}

let obj2 = {
    c: 4, 
    d: 5
}; 

let obj3 = {
    ...obj,
    ...obj2
};

console.log(obj3); 
/*
    {
        a: 1, 
        b: 2, 
        c: 4, 
        d: 5
    }
*/

function makeArray(a, b, c, d, e){
    return [a, b, c, d, e];
}

let a = [10,11,12,13,14,15,16,17,18,19]

makeArray(0,1,2,3,4,5,6,7,8,9);

makeArray(...a); 
makeArray(10, 11, 12, 13, 14, 15, 16, 17, 18, 19); 

makeArray(a); 
makeArray([10,11,12,13,14,15,16,17,18,19])



























