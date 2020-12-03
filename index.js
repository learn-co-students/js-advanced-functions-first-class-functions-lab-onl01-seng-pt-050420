const returnFirstTwoDrivers = (arr) => {
    return [arr[0], arr[1]]
}

const returnLastTwoDrivers = (arr) => {
    return [arr[arr.length-2], arr[arr.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return (fare) => fare * multiplier
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (arr, func) => {
    return func(arr)
}