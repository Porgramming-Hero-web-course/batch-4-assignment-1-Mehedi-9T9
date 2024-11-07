const getProperty =<P> (obj: P, val: keyof P)=>{
return obj[val]

}
const person1 = { name: "Alice", age: 30 };
console.log(getProperty(person1, "name"));