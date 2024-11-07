const removeDuplicates=(arr:number[]):number[]=>{
    const newArray:number[] =[];
     arr.map((num:number)=>{
        if(newArray.indexOf(num)=== -1){
            newArray.push(num)
        }
  
    })
    console.log(newArray);
    return newArray
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5])
