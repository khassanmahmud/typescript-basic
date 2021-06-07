export {}

// VARIABLE DECLARATIONS.

let message = 'Hello, this is a sample message.'
console.log(message)

let x = 10;
const y = 20;

// Cannot redeclare block-scoped variable 'x'.
//let x = 30;

let sum;

// 'const' declarations must be initialized.
//const title;
const titlePage = 'Basic TypeScript'


// VARIABLE TYPES.

let isAdmin: boolean = true;
let totalProduct: number = 100;
let name: string = 'Md. Rabiul Hassan Mahmud'
let sentence:  string = `My name is ${name}
I am a beginner in TypeScript.`

console.log(sentence)

let n: null = null
let u: undefined = undefined

let isNew: boolean = null
let myName: string = undefined

let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

let person: [string, number] = ['Hassan', 36]

enum Color { Red, Green, Blue }

let red: Color = Color.Red
let green: Color = Color.Green
let blue: Color = Color.Blue

console.log(red)
console.log(green)
console.log(blue)

enum Weather { Hot = 5, Cold, Neutral }

let hot: Weather = Weather.Hot
let cold: Weather = Weather.Cold
let neutral: Weather = Weather.Neutral

console.log(hot)
console.log(cold)
console.log(neutral)

let randomValue: any = 10;

randomValue = true
randomValue = 'Hassan'

let myVariable: any = 20;

console.log(myVariable.name)
//myVariable()
//myVariable.toUpperCase()

let anotherVariable: unknown = 30;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === 'object' && 'name' in obj
}

if (hasName(anotherVariable)) {
  console.log(anotherVariable.name)
}

//anotherVariable()
//(anotherVariable as string).toUpperCase()

let a;
a = 10
a = true

let b = 30
// Type 'boolean' is not assignable to type 'number'.
//b = false

let multiType: number | boolean
multiType = 20
multiType = false

let anyType: any;
anyType = 20

//  FUNCTIONS

function add(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2
  } else {
    return num1
  }
}

add(5, 10)
//add(5, '10')
add(5)

function addAnother(num1: number, num2: number = 10): number {
  if (num2) {
    return num1 + num2
  } else {
    return num1
  }
}

addAnother(5, 10)
addAnother(5)

// INTERFACE

interface Person {
  firstName: string;
  lastName: string;
  city?: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
  firstName: 'Hassan',
  lastName: 'Mahmud'
}

fullName(p)

// CLASS

class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`)
  }
}

let emp1 = new Employee('Md. Rabiul Hassan Mahmud');
console.log(emp1.employeeName)
emp1.greet()

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName)
  }

  delegateWork() {
    console.log('Manager delegating works')
  }
}

let m1 = new Manager('John Doe')
m1.delegateWork();
m1.greet();
console.log(m1.employeeName)

// ACCESS MODIFIER

