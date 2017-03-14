// Create a function that will be called when the user clicks on the
// <button> element in the HTML.

//This function should grab the values entered by the user from the
//<input> element and the <select> element.

//The function should then calculate the weight of the user on the
//selected planet, and show the weight to the user in the <p> element
//in the HTML

$(function() {

    //Reverse the below array of arrays and then populate the <select> element options.

    var planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148],
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['Sun', 27.9]
    ];
    planets = planets.reverse();

    $.each(planets, function(value) {
      $('#dropdown').append($("<option>").val(this[1]).text(this[0]));
    });

    $('button').click(function() {
      var weightInput = $('#weight').val();
      var selectedPlanet = $('#dropdown option:selected').text();
      var relativeGravity = $('#dropdown option:selected').val();
      var spaceWeight = (weightInput * relativeGravity) ;
      $('#result').append('<p>Your weight on ' + selectedPlanet + ' would be ' + spaceWeight + ' lbs.!</p>');
    });

});
