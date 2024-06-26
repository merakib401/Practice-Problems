//Write a function that takes an array of numbers and returns the second largest number in the array.

function getSecondLargestNumber(numbers){
    let secondLargestNumber=0;
    let largestNumber=numbers[0];
    for (let i=0;i<numbers.length;i++){
        if(numbers[i]>largestNumber){
            secondLargestNumber=largestNumber;
            largestNumber=numbers[i];

        }
    }
    return secondLargestNumber;

}
const nums=[10,15,12.99,9];

console.log(getSecondLargestNumber(nums));