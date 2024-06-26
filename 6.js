//Write a function that takes an array of numbers and returns a new array with only the even numbers.

function getEvenNum(nums){
    const evenNums =[]
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]%2===0){
            evenNums.push(nums[i]);
        }
        
    }
    return evenNums;

}

const nums = [2,3,4,6,8,9,7,1,2.5,4];


console.log(getEvenNum(nums));

