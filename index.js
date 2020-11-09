// Code your solution in this file!

function returnFirstTwoDrivers(arr) {
    return arr.slice(0, 2);
};

function returnLastTwoDrivers(arr) {
    return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num;
    };
};

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
};