

//Task 1

const numbers = [10, 13, 20, 25, 38, 35, 40];

const newArray = numbers.filter(function (number){
   return numbers >= 25;

})
console.log (newArray)

const secondArray = numbers.filter(function (number){
    return number % 5 == 0;
})
console.log (secondArray)

//Task 2


const squaredArray = numbers.map (function (number){
    return number * number;
});
console.log (squaredArray)

const multipliedByTwoArray = numbers.map (function(number){
    return number * 2; 
})

console.log (multipliedByTwoArray)

//Task 3
   const greaterOrEqualTOTwentyArray = numbers.filter (function (number){
    return number >= 20;
    
   }).map (function (number){
     return number * number;
   }) 

   console.log (greaterOrEqualTOTwentyArray)

const divisibleByFiveArray = numbers.filter (function (number){
    return number % 5 == 0

}).map (function (number){
    return number * 3;
}) 
console.log (divisibleByFiveArray)