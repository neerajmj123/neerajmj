{
    let str = "hello world";
    let length = str.length;
    console.log("Length :",length);

    let toUpperCase = str.toUpperCase();
    console.log("toUpperCase :",toUpperCase);

    let toLowerCase = str.toLowerCase();
    console.log("toLowerCase :",toLowerCase);

    let trimmedString = str.trim();
    console.log("trimmedString:",trimmedString);
    let trimmedStringLength = trimmedString.length;
    console.log("trimmedStringLength :",trimmedStringLength);

let length1 = str.toLocaleLowerCase()

    let leftTrimmedString = str.trimStart();
    let leftTrimmedStringLength =leftTrimmedString.length;
    console.log("leftTrimmedString:",leftTrimmedString);
    console.log("leftTrimmedStringLength :",leftTrimmedStringLength);

    let rightTrimmedString = str.trimEnd();
    let rightTrimmedStringLength = rightTrimmedString.length;
    console.log("rightTrimmedStringLength:",rightTrimmedStringLength);
    console.log("rightTrimmedString :",rightTrimmedString);
    
    let subString = str.substring(1,5);
    console.log("subString :",subString);

    let replacedString = str.replace("hello","haiii");
    console.log("replacedString :",replacedString);

    let isStartWith=str.startsWith("haii");
    console.log("isStartWith :",isStartWith);

    let isEndWith=str.endsWith("world");
    console.log("isEndWith :",isEndWith);

    let splitString = str.split(' ');
    console.log("splitString:",splitString);

    let joinedArray = splitString.join('-');
    console.log("joinedArray:",joinedArray);

    let replaceAll = str.replaceAll("hello world","haiii hii");
    console.log("replaceAll:",replaceAll);

    let padStart = str.padStart(9,"i");
    console.log("padStart:",padStart);

    let charCodeAt =str.charCodeAt(0);
    console.log("charCodeAt:",charCodeAt);

    let charAt =str.charAt(0);
    console.log("charAt")
}
{
    let fruit ="apple";
    console.log("fruit:",fruit);
    console.log("window.fruit:",window.fruit);
     fruit="orange";
     console.log("fruit:",fruit);
}
