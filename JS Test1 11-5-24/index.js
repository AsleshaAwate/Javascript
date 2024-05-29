// Question 1:
// Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.

// for(var i=0;i<=10;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// Question 2:
// Write a JavaScript while loop that calculates the factorial of a given number.

// var num=1;
// var number=4;
// var store=1;
// while(store<=number){
//     num=num*store;
//     store++;
// }
// console.log(num)    

// Question 3:
// Create a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers using a for loop.

// array=[1,2,3,4,5];
// function sumofarray(array){
//     var sum=0;
//     for(var i=0;i<=array.length;i++){
//         sum=sum+i;
//     }
//     return sum
// }
// const sum1=sumofarray(array)
// console.log(sum1)


// Question 4:
// Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.

// function fibonacci(number){
//     var a=0;
//     var b=1;
//     var newnum;
//     newnum=a+b;
//     console.log(a);
//     console.log(b);

//     while(newnum<=number){
//         console.log(newnum)
//         a=b;
//         b=newnum;
//         newnum=a+b;
//     }
// }

// fibonacci(5)

// Question 5:
// Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.

// array=["rohit","rahul","virat","rishabh","shivam","virat","virat"]

// function lessthanfive(array){
//     array1=[]
//     for(var i=0; i<array.length;i++){
//         if(array[i].length>5){
//             array1.push(array[i]);
//         }
//     }
//     return array1;
// }
// const array2=lessthanfive(array);
// console.log(array2);


// Question 6:
// Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false.


// function primemnumber(number) {
//     if (number < 2) {
//       return false;
//     }

//     for (i = 2; i <= number / 2; i++) {
//         if (number % i == 0) {
//         return false;
//       }
//     }

//     return true;
//   }

//   console.log(primemnumber(29));


// Q .Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.
// var sum=0;
// for (var i = 1; i <= 1000; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         sum=sum+i;
//     }
//   }
//   console.log(sum);

// Question 8:
// Write a JavaScript function that takes a string as input and returns the reverse of the string using a for loop.

// function strreverse(str) {
//     var str1 = "";
//     for (var i=str.length-1;i>=0;i--) {
//         str1 += str[i];
//     }
//     console.log(str1);
// }

// strreverse("Chetan")


// Question 10:
// Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two numbers in the array.

// array=[1,2,3,4,5,6,7,8,9,10]
// function maxdifference(array){
//     min=99999999;
//     max=0;
//     for(i=0;i<array.length;i++){
//         // console.log(array[i])
//         if(array[i]<min){
//             min=array[i]; 
//         }

//         if(array[i]>max){
//             max=array[i]; 
//         }
//     }
//     return max-min;
// }
// const array1=maxdifference(array);
// console.log("Minimum number:",min)
// console.log("Maximum number:",max)
// console.log("Max difference between two numbers is:",array1)