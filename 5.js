//Write a function that takes an array of numbers and returns the sum of all the numbers in the array.

function sumArry (nums){
    let sum =0;
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }
    return sum;
}

const nums=[10,20,10.5,50];
console.log(sumArry(nums))