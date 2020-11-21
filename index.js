function returnFirstTwoDrivers(drivers) {
    const newDrivers = function() {
        return drivers.slice(0,2)
    }
    return newDrivers()
}

function returnLastTwoDrivers(drivers) {
    const newDrivers = function() {
        return drivers.slice(-2)
    }
    return newDrivers()
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiple) {
    return function(num) {
        return multiple * num
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, selector) {
   return selector(arrayOfDrivers)
}