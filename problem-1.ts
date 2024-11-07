const sumArray =(arr: number[]):number=>{
  let count:number=0;
  arr.map((item:number) => count += item)
  console.log(count);
  return count

}
sumArray([1, 2, 3, 4, 5]);
