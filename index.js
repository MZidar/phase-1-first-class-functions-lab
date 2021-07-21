const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
let a;
let multi = Math.round(a);
function emptyFunction(){};

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}


const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multi){
    return function fareMultiplier(fare){
        return multi*fare;
    }
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, emptyFunction){
    return emptyFunction(drivers);
}
