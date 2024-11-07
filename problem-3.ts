const countWordOccurrences = (a:string, b:string):number =>{
    const lowtext1 :string =a.toLowerCase()
    const lowtext2 : string =b.toLowerCase()
    const textArray:string[] =lowtext1.split(/[\s!?,.]+/)
    const getText = []
    textArray.map((text:string) => {
        if(text === lowtext2){
            getText.push(text)
        }
    })
    console.log(getText.length);
    return getText.length
}
countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")



const countWordOccurrences2 = (text1:string, text2:string)=>{
    const lowtext1 : string=text1.toLowerCase()
    const lowtext2 : string =text2.toLowerCase()
    const same =lowtext1.match(RegExp(`\\b${lowtext2}\\b`, 'g'))
    console.log(same?.length);
    return same?.length
    

}
countWordOccurrences2("TypeScript is great. I love TypeScript!", "typescript")

