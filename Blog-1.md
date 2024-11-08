<h2>Introduction:</h2>
Union and intersection type are very important concepts in TypeScript.<br>
Using these you can make the types more flexible and controlled. <br>
And many types can be used together <br>

<h2>Union Type:<h2>
A union type is a type that contains multiple types, any one of which will be used,<br>
We use union type when the data type of a variable is 2-3 types,<br>
Union types are separated by bar symbols between the ones that take a value variable<br>

for Example: <br>
let name: "string"|"number"="Mehedi Hasan"<br>
name= 24;<br>
if name= true, then give error<br>


<h2>Advantages of union type:<h2>
Union type provides flexibility to TypeScript and makes the code more dynamic, <br>
allowing to work with multiple types of values.Union types make it easier in TypeScript <br>
to handle situations where a variable can hold more than one type of value<br>
Example:<br>
const makeId =(id:"string"|"number"):"string"|"number=>{<br>
    console.log(id)<br>
}<br>
makeId(101)<br>
makeId("XYZ101")<br>


<h2>Intersection Type:<h2>
An intersection type in TypeScript is a type that combines multiple types to form a new type.<br>
Using intersection type means that a variable or object must have all type properties attached to it.<br>
The " & "  operator is used to create it.<br>

For Example:<br>
type PoorMan ={ <br>
    name: string,<br>
    age:number<br>
}<br>
const RichMan:PoorMan & {isPhone:boolean}={<br>
    name: "Mesbaul Hok",<br>
    age: 28,<br>
    isPhone: true<br>

}<br>


<h2>Advantages of Intersection type:<h2>
The intersection type gives you the ability to create complex types,<br>
where all the properties of multiple types must be combined. For example,<br>
if you want to create an object that can hold multiple attributes at the same time, <br>
using the intersection type is very useful.<br>
Example:<br>
type SalesMan ={<br>
    name: string<br>
}<br>
type Manager ={<br>
    id: number<br>
}<br>
type Admin ={<br>
    role:string<br>
}<br>
type AdminDemo =SalesMan & Manage & Admin<br>
const admin:AdminDemo={<br>
    name:"Mesbaul Bhai",<br>
    id: 101,<br>
    role:"admin"<br>
}<br>

If we use interaction type our code will be more type set and fully usable<br>