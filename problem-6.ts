interface Profile {
    name:string,
    age:number,
    email:string
}

const updateProfile =(obj:Profile, property: {age:number}):Profile =>{
    const update:Profile = obj
    update.age=property.age
    return update
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));