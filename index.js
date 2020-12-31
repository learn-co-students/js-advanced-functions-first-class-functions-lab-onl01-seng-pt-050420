// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) { 
    return function(fare) {
        return num * fare 
    }
}

const fareDoubler = function(num) {
    return 2 * num 
}

const fareTripler = function(num) {
    return 3 * num 
}

const selectDifferentDrivers = function(arrayofDrivers, func) {
    return func(arrayofDrivers)
}