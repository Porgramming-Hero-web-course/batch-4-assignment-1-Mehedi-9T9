class Car {
    constructor(public make:string, public model:string, public age:number){}
    getCarAge(){
        const age =new Date().getFullYear()-this.age
        console.log(age);
        return age   
     }
 
}
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
