const validateKeys = <T>(obj: T, keys: (keyof T)[]) =>{
    const resut =keys.every(key => obj[key])
    return resut
}
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));






