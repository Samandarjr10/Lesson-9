var elForm = document.querySelector("#form");
var elInput = document.querySelector("#input");
var elButton = document.querySelector("#btn");

var elPerson = document.querySelector("#on_foot");
var elByBike = document.querySelector("#by_bike");
var elByCar = document.querySelector("#by_car");
var elByPlane = document.querySelector("#by_plane");

var SPEED_PERSON = 3.6;
var SPEED_BY_BIKE = 20.1;
var SPEED_BY_CAR = 70;
var SPEED_BY_PLANE = 800;

function calculatorDictance(dictance, speed) {
    var times = Math.floor(dictance / speed);
    var minuts = Math.floor((dictance / speed -times) * 60);
    var seconds = Math.ceil(((dictance / speed -times) * 60 -minuts) * 60);

    var minutnot = minuts? `${minuts} minut` : "" ;
    var secondnot = seconds? `${seconds} second` : "" ;
    var minutsandseconds = `${minutnot} ${secondnot}`;
    var hoursminutsandseconds = `${times} soat ${minutnot} ${secondnot}`;
    if (times === 0 && minuts ===0) {
        return minutsandseconds
    } else if (times === 0) {
        return minutsandseconds    
    } else {
        return hoursminutsandseconds  
    }
    
}

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    var inputDistance = Number(elInput.value.trim());

    if (inputDistance <= 0){
        alert("Minimalniy bir kiritishingiz mumkin");
        return console.log("Minimalniy bir kiritishingiz mumkin");
    }else if (isNaN(inputDistance)) {
        alert("Son kiriting");
        return console.log("Son kiriting");
    }

    console.log(calculatorDictance(inputDistance, 200));

    elPerson.textContent = calculatorDictance(inputDistance, SPEED_PERSON);
    elByBike.textContent = calculatorDictance(inputDistance, SPEED_BY_BIKE);
    elByCar.textContent = calculatorDictance(inputDistance, SPEED_BY_CAR);
    elByPlane.textContent = calculatorDictance(inputDistance, SPEED_BY_PLANE);

})

