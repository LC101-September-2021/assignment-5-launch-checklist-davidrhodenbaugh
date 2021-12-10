// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    }
    else if (isNaN(testInput)) {
        return 'Not a Number';
    }
    else {
        return 'Is a Number';
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    pilot = document.querySelector('input[name=pilotName]').value;
    copilot = document.querySelector('input[name=copilotName]').value;
    fuelLevel= document.querySelector('input[name=fuelLevel]').value;
    cargoLevel = document.querySelector('input[name=cargoMass]').value;

    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert('Fill all fields.');
    }

    if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        alert('Fuel and/or Cargo Inputs should be numbers.');
    }

    if (validateInput(pilot) === 'Number' || validateInput(copilot) === 'Number') {
        alert('Pilot and/or Copilot names cannot be numbers, unless you\'re Elon Musk\'s son.');

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
