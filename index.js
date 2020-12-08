// Code your solution in this file!
function returnFirstTwoDrivers(dieses){
    let a = []
    for (let i=0; i<2; i++){
        a.push(dieses[i])
    }
return a
}

function returnLastTwoDrivers(dieses){
    let a = []
    for (let i=dieses.length-2; i<dieses.length; i++){
        a.push(dieses[i])
    }
return a
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

  const fareDoubler = function (fare){
      return fare * 2;
  }

  const fareTripler = function(fare){
      return fare * 3;
  }

  function selectDifferentDrivers(arrayOfDrivers, funct) {
      return funct(arrayOfDrivers)
  }
