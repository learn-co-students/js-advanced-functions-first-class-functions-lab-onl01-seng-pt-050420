const returnFirstTwoDrivers = function(arr){
    let drivers = [];
    drivers.push(arr[0], arr[1]);
    return drivers;
};

const returnLastTwoDrivers = function(arr){
    let names = [];
    let lastDriver = arr[arr.length - 1];
    let secondToLast = arr[arr.length - 2];

    names.push(secondToLast, lastDriver);

    return names; 
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function(f){
        return fare * f;
    };
};

const fareDoubler = function(fare){
    return createFareMultiplier(fare)(2);
};

const fareTripler = function(fare){
    return createFareMultiplier(fare)(3);
};

function selectDifferentDrivers(arr, fn) {
    if (fn === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arr)
    } else if (fn === returnLastTwoDrivers){
        return returnLastTwoDrivers(arr)
    };
};