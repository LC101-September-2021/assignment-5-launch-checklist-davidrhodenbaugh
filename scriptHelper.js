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

function formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotresult = ''
    let copilotresult = ''
    let fuelresult= ''
    let cargoresult = ''
    let launchStatus = document.getElementById('launchStatus')
    let pilotcheck
    let fuelcheck
    let cargocheck


    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert('Fill all fields.');
    }

    if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        alert('Fuel and/or Cargo Inputs should be numbers.');
    }
    else {
        fuelresult = Number(fuelLevel)
        cargoresult = Number(cargoLevel)
    }

    let fuelStatus = document.getElementById('fuelStatus');
    if (fuelresult < 10000) {
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML = 'Fuel level too low to launch.';
         launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
         launchStatus.style.color = 'red';
    }
    else {
        fuelStatus.innerHTML = 'Fuel level sufficient for launch.'
    }

    let cargoStatus = document.getElementById('cargoStatus')
    if (cargoresult > 10000) {
        faultyItems.style.visibility = 'visible';
        cargoStatus.innerHTML = 'Cargo Mass exceeds limit for launch.';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'red';
    }
    else {
        cargoStatus.innerHTML = 'Cargo Mass sufficient for launch.'
    }

    if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number') {
        alert('Pilot and/or Copilot names cannot be numbers, unless you\'re Elon Musk\'s son.');
    }
    else {
        pilotresult = pilot
        copilotresult = copilot
        let pilotStatus = document.getElementById('pilotStatus')
        let copilotStatus = document.getElementById('copilotStatus')
        pilotStatus.innerHTML = `Pilot ${pilotresult} ready.`
        copilotStatus.innerHTML = `Co-pilot ${copilotresult} ready.`
    }

    if ((pilotStatus.innerHTML = `Pilot ${pilotresult} ready.`) && (copilotStatus.innerHTML = `Co-pilot ${copilotresult} ready.`) && (cargoStatus.innerHTML = 'Cargo Mass sufficient for launch.') && (fuelStatus.innerHTML = 'Fuel level sufficient for launch.')) {
        launchStatus.style.color = 'green'
        launchStatus.innerHTML = 'Shuttle is ready for launch'
        faultyItems.style.visibility = 'hidden'
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
