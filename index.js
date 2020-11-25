// Code your solution in this file!
// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers) {
  let newArray = [];
  newArray.push(arrayOfDrivers[0]);
  newArray.push(arrayOfDrivers[1]);
  return newArray;
};

const returnLastTwoDrivers = function(arrayOfDrivers) {
  let newArray = [];
    newArray.push(arrayOfDrivers[arrayOfDrivers.length - 2]);
  newArray.push(arrayOfDrivers[arrayOfDrivers.length - 1]);
  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, fn) {
  if (fn === returnFirstTwoDrivers)
  {
    return returnFirstTwoDrivers(arrayOfDrivers);
  }
  else if (fn === returnLastTwoDrivers)
  {
    return returnLastTwoDrivers(arrayOfDrivers);
  }
};