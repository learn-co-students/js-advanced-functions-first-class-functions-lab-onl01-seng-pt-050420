// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
return [array[0], array[1]]  
}

const returnLastTwoDrivers = function(array){
    return [array[array.length - 2], array[array.length - 1]]  
}

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function fare(amount){
        return amount * multiplier
    }
}

function fareDoubler(fare) {
   return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare)
 }

 function selectDifferentDrivers(arrayOfDrivers, fn){
     return fn(arrayOfDrivers) 
 }