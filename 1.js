//Write a function to convert temp C to F 

function convertCToF(celsius){
    return ( (9*celsius)/5 ) + 32;
}
const C1=37;
const F1=convertCToF(C1);
console.log(F1);