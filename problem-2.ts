const removeDuplicaes=(arr:number[]):number[]=>{
    const newArray:number[] =[];
     arr.map((num:number)=>{
        if(newArray.indexOf(num)=== -1){
            newArray.push(num)
        }
  
    })
    return newArray
}
console.log(removeDuplicaes([7,3,3,5,1,1]));
