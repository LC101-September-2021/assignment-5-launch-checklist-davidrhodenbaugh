// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector('form');
    
    form.addEventListener("submit", function(event){
        event.preventDefault();

        let pilotName = document.querySelector('input[name=pilotName]').value;
        let copilotName = document.querySelector('input[name=copilotName]').value;
        let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
        let cargoMass = document.querySelector('input[name=cargoMass]').value;
        let faultyItems = document.getElementById('faultyItems');

        formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
    });

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
     }).then(function () {
          console.log(listedPlanets);
          let globehead = pickPlanet(listedPlanets);
          addDestinationInfo(this.document, globehead.name, globehead.diameter, globehead.star, globehead.distance, globehead.moons, globehead.image);
      });
});