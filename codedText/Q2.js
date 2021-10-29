function codedText(textLength, iterate, text){
    let stringResult = "";
    let finalResult = "";
    let charResult =[];
    let asciiText = [];
    let charText = text.split('');
    for (let loop = 0; loop < iterate; loop++){
        charText.splice(0,0,charText.splice(textLength - 1, 1)[0]);
        for (let i = 0; i < textLength; i++){
            asciiText.push(charText[i].charCodeAt(0));
        }
        for (let j = 0; j < textLength; j++){
            if(asciiText[j] === 122){
                asciiText[j] = 97;
            }
            else {
                asciiText[j] = asciiText[j] + 1;
            }
        }
        for(let k = 0; k < textLength; k++){
            charResult.push(String.fromCharCode(asciiText[k]));
        }
    }
    charResult.forEach(element => {stringResult = stringResult + element});
    for (let m = textLength * (iterate - 1); m < textLength * iterate; m++){
        finalResult = finalResult + stringResult[m];
    }
    return finalResult;
}

console.log(codedText(4,5,"abcd"))