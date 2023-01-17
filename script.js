//Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array
let numbers =[10,7,9,3,2,1,15];
const odds =[];
numbers.forEach((num)=>{
    if (num%2!=0){
        odds.push(num);   
    }
});
console.log(odds);
//b.Convert all the strings to title caps in a string array
let str = "Iam a little tea pot";
function titleCase(str){
    str = str.toLowerCase().split(' ');
    for (var i=0;i<str.length;i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase(str));
//c.Sum of all numbers in an array
let a =[3,6,8,9,55,23];
let sum =0;
for(var i=0;i<a.length;i++){
    sum = sum + a[i]
}
console.log(sum);
//d.Return all the prime numbers in an array
let array = [2,3,4,5,6,7,8,9,10];
for (var i =0;i<array.length;i++){
    let ans = 0;
    for(var j=2;j<i;j++){
        if(i%j==0){
            ans =1;
            break;
        }
    }
    if(i>1 && ans!=1){
        console.log(i);
    }
}
//e.Return all the palindromes in an array
let palindromeArray = (arr) => {
    // initialize palindrome
    let ispalindrome = true;
    // loop through half length of the array
    for (let i=0;i<arr.length-1/2;i++){
        //check if first half is equal to second half
        if (arr[i]!==arr[arr.length-i-1]){
            ispalindrome = false;
            break;
        }
       }
       return ispalindrome;
}
console.log(palindromeArray([1,2,2,1]));
console.log(palindromeArray([1,2,2,2]));
console.log(palindromeArray(["racecar"]));


//F.Return median of two sorted arrays of the same size.

let arr1 = [1,12,15,26,38];
let arr2 = [2,13,17,30,45];
let merged = [...arr1,...arr2];
merged.sort((a,b)=>a-b);
console.log(merged);
console.log(merged.length);
console.log((merged[4]+merged[5])/2);


//g.Remove duplicates from an array


let arr = ["apple","mango","apple","orange","mango","mango"];
function removeDuplicate(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index);
}
console.log(removeDuplicate(arr));

//h.Rotate an array by k times

let Array = [1, 2, 3, 4, 5];
let K = 2;
function Rotate(Array,K){
    let output =0;
    let N = Array.length;
    K = K%N;
    for(let i=0;i<K;i++){
        output = Array.pop();
        Array.unshift(output);
    }
    return Array;
}
console.log(Rotate(Array,K));