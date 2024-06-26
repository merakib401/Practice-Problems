//Write a function that takes an array of numbers and returns a new array with each number squared.
function ArrySqure(nums){
    const squareArray=[];
    for (let i=0; i <nums.length;i++){
        squareArray.push(nums[i]**2);

    }
    return squareArray;
}

const array=[2,3,4,2.4];
const newArray=ArrySqure(array)
console.log(newArray);