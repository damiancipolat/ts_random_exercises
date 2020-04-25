let single:boolean = true;
let total:number=0;
let fullName:string = 'asdsadsadsadsad';
let n:null = null;
let u:undefined = undefined;

let isNew:boolean = null;
let myName:String = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
let person1: [string,number]=['Damian',32];

//Define enum
enum Color{
    Red,
    Green,
    Blue
};

let c:Color = Color.Green;

//ANY
let anyThing :any = 100;
anyThing=true;
anyThing='adasdsad';

//Multi type
let multi:number|boolean;
multi = 20;
multi = true;

//Types in functions
function add(a:number,b:number=50):number{
    return a+b;    
}

add(10,500);

//Interface
interface Person{
    firstName:string,
    lastName:string
};

function fullPerson(person:Person){
    console.log(person.firstName,person.lastName);
}

let p = {
    firstName:'damian',
    lastName:'cipolat'
};

fullPerson(p);

//Class
class Employee{
    employee:String;

    constructor(name:String){
        this.employee=name;
    }

    great(){
        console.log('Good morning', this.employee);
    }
}

class Manager extends Employee{
    vip:boolean;

    constructor(name:string){
        super(name);
        this.vip=true;
    } 

    work(){
        console.log(this.vip,this.employee);
    }
}

let pepe = new Employee('pepe');
let bob  = new Manager('Bob');

//NUMBERS
let PI = Math.PI; // 3.141592653589793
let minValue = Number.MIN_VALUE; // 5e-324
let maxValue = Number.MAX_VALUE; // 1.79e+308
let div0 = PI / 0; // Infinity
let divMinus0 = -PI / 0; // -Infinity
let unknown = div0 / divMinus0; // N