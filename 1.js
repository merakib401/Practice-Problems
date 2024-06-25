//Write a function to convert temp C to F 

function convertCToF(celsius){
    return ( (9*celsius)/5 ) + 32;
}
const C1=37;
const F1=convertCToF(C1);
console.log(F1);

//Write a function to convert temp F to C
function convetFToC(fahrenheit){
    return ( (fahrenheit-32)*5)/9;
}
const F2=100;
const C2= convetFToC( F2);

console.log(C2);