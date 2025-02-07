//task1-Calculating the sum of two numbers.

// function sumTwoNumber(n1,n2) { 
//     return n1 + n2;
// }

// console.log(sumTwoNumber(2,3));
// console.log(sumTwoNumber(4,4));
// console.log(sumTwoNumber(-2,4));


/// task2- Checking if a number is positive, negative, or zero.

// function checkNumber(n) {
//     // if (n>0)  {
//     //     return "Positive"
//     // } else if (n<0) {
//     //     return "Negative"
//     // } else {
//     //     return "Zero"
//     // }

//     return (n>0) ? "Positive" : (n<0) ? "Negative" : "Zero"
// }

// console.log(checkNumber(5));
// console.log(checkNumber(-8));
// console.log(checkNumber(0));

 
//  #Task3. En: Generating a multiplication table for a given

// function generateMulpiplication(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(n , " * " , i , " = ", n*i);
//     }
// }

// console.log(generateMulpiplication(3));
// console.log(generateMulpiplication(6));
// console.log(generateMulpiplication(10));


// #Task4. Given a natural number. Determine if it ends with the number 9?


// function endNine(n) {
//    return (n%10 == 9) ? true : false
// }

// console.log(endNine(149));
// console.log(endNine(387));
// console.log(endNine(29));

// #Task5. The first century spans from theyear 1up toand includingthe
// year 100, the second century -from the year 101 up toand
// includingthe year 200, etc.


// function century(year) {
//     if (year%100 == 0) {
//         return ~~(year/100)
//     } else if (year%100 != 0) {
//         return (~~(year/100))+1
//     }
// }

// console.log(century(2025));
// console.log(century(1));
// console.log(century(1902));
