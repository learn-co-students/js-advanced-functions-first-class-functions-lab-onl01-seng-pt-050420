// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
   const newArray = drivers.slice(0,2)
    
     return newArray
}

const returnLastTwoDrivers = function(drivers){

    const newArray = drivers.slice(-2)
           return newArray
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(num){
     return function(fare){
         return num * fare
     }
 }

 const fareDoubler = function createFareMultiplier(fare){
     return fare * 2
 }

 const fareTripler = function createFareMultiplier(fare){
    return fare * 3
}

function selectDifferentDrivers(drivers, fn){
   return fn(drivers)

} 