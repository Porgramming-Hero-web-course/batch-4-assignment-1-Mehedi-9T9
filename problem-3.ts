const countWordOccurrences =(text1:string, text2:string)=>{
    const textArray = text1.split(" ")
    const countText =textArray.filter((word:string)=> word.toString()===text2.toString())
    return countText

}
console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));