const countWordOccurrences = (a:string, b:string):number =>{
    const lowtext1 :string =a.toLowerCase()
    const lowtext2 : string =b.toLowerCase()
    const textArray:string[] =lowtext1.split(' ')
    const getText = []
    textArray.map((text:string) => {
        if(text === lowtext2){
            getText.push(text)
        }
    })
    console.log(getText.length);
    return getText.length
}
countWordOccurrences(" I love TypeScript", "typescript")





