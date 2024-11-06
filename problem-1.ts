const sumArray =(arr: number[]):number=>{
  let count:number=0;
  arr.map((item:number) => count += item)
  return count

}
console.log(sumArray([1,4,6,7]));