*Introduction:
Union and intersection type are very important concepts in TypeScript.
Using these you can make the types more flexible and controlled.
And many types can be used together

*Union Type:
A union type is a type that contains multiple types, any one of which will be used,
We use union type when the data type of a variable is 2-3 types,
Union types are separated by bar symbols between the ones that take a value variable

for Example:
let name: "string"|"number"="Mehedi Hasan"
name= 24;
if name= true, then give error


*Advantages of union type:
Union type provides flexibility to TypeScript and makes the code more dynamic, 
allowing to work with multiple types of values.Union types make it easier in TypeScript
to handle situations where a variable can hold more than one type of value
Example:
const makeId =(id:"string"|"number"):"string"|"number=>{
    console.log(id)
}
makeId(101)
makeId("XYZ101")


*Intersection Type:
An intersection type in TypeScript is a type that combines multiple types to form a new type.
Using intersection type means that a variable or object must have all type properties attached to it.
The " & "  operator is used to create it.

For Example:
type PoorMan ={
    name: string,
    age:number
}
const RichMan:PoorMan & {isPhone:boolean}={
    name: "Mesbaul Hok",
    age: 28,
    isPhone: true

}


*Advantages of Intersection type:
The intersection type gives you the ability to create complex types,
where all the properties of multiple types must be combined. For example,
if you want to create an object that can hold multiple attributes at the same time, 
using the intersection type is very useful.
Example:
type SalesMan ={
    name: string
}
type Manager ={
    id: number
}
type Admin ={
    role:string
}
type AdminDemo =SalesMan & Manage & Admin
const admin:AdminDemo={
    name:"Mesbaul Bhai",
    id: 101,
    role:"admin"
}

If we use interaction type our code will be more type set and fully usable