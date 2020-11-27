function returnFirstTwoDrivers(arr) {
    const newArr = arr.slice(0, 2)
    return newArr
}

function returnLastTwoDrivers(arr) {
    const newArr = arr.slice(-2)
    return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(mult) {
        return mult * int
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(arr, fn) {
    return fn(arr)
}