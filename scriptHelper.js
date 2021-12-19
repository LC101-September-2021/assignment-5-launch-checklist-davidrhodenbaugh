// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById('missionTarget')
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons} </li>
        </ol>
        <img src=${imageUrl}>
        `
};

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

function formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel, event) {
    let pilotresult = ''
    let copilotresult = ''
    let fuelresult= ''
    let cargoresult = ''
    let launchStatus = document.getElementById('launchStatus')
    let pilotcheck = false
    let fuelcheck = false
    let cargocheck = false
    launchStatusCheck.style.visibility = 'visible'


    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert('Fill all fields.');
        event.preventDefault();
        pilotStatus.innerHTML = 'Pilot not ready.'
        copilotStatus.innerHTML = 'Co-pilot not ready.'
    }

    if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        alert('Fuel and/or Cargo Inputs should be numbers.');
        event.preventDefault();
    }
    else {
        fuelresult = Number(fuelLevel)
        cargoresult = Number(cargoLevel)
    }

    let fuelStatus = document.getElementById('fuelStatus');
    if (fuelresult < 10000) {
         event.preventDefault();
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML = 'Fuel level too low for launch';
         launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
         launchStatus.style.color = 'rgb(199, 37, 78)';
    }
    else {
        fuelStatus.innerHTML = 'Fuel level high enough for launch'
        fuelcheck = true
    }

    let cargoStatus = document.getElementById('cargoStatus')
    if (cargoresult > 10000) {
         event.preventDefault();
         faultyItems.style.visibility = 'visible';
         cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
         launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
         launchStatus.style.color = 'rgb(199, 37, 78)';
    }
    else {
        cargoStatus.innerHTML = 'Cargo mass low enough for launch'
        cargocheck = true
    }

    let pilotStatus = document.getElementById('pilotStatus')
    let copilotStatus = document.getElementById('copilotStatus')

    if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number') {
        alert('Pilot and/or Copilot names cannot be numbers, unless you\'re Elon Musk\'s son.');
        event.preventDefault();
        pilotStatus.innerHTML = 'Pilot not ready.'
        copilotStatus.innerHTML = 'Co-pilot not ready.'
    }
    else {
        pilotresult = pilot
        copilotresult = copilot
        pilotStatus.innerHTML = `Pilot ${pilotresult} is ready for launch`
        copilotStatus.innerHTML = `Co-pilot ${copilotresult} is ready for launch`
        pilotcheck = true
    }

    if (pilotcheck && cargocheck && fuelcheck) {
        event.preventDefault();
        launchStatus.style.color = 'rgb(65, 159, 106)'
        launchStatus.innerHTML = 'Shuttle is Ready for Launch'
        faultyItems.style.visibility = 'hidden'
        list.style.visibility = 'visible'
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let i = Math.floor(Math.random() * planets.length)
    return planets[i];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;