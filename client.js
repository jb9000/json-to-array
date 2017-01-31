// URL for the JSON file
var url = 'https://raw.githubusercontent.com/jeffbautista/nba-salaries/master/NBASalaries.JSON';

// When the button is clicked, run this callback function
$('#quote').click(function() {

  // Retrieve the data from the JSON file
  $.getJSON (url, function(data) {
    var salaries2017 = [];
    
    // For each object in the JSON file, push a **Team/Player/2016-17 Salary** array to the salaries2017 array.
    $.each(data, function( key, val ) {
      salaries2017.push([val["Team"], val["Player"], val["2016-17"]]);
    });
    
    // Sort the salaries2017 array (default is alphabetical)
    salaries2017.sort();
    
    var salariesByTeam = [];
    
    // For each subarray in the salaries2017 array, push an <li></li> entry into the salariesByTeam array.
    $.each(salaries2017, function(index, value){
      salariesByTeam.push( "<li>" + value[0] + ', ' + value[1] + ', ' + value[2] + "</li>" );
    });
    
    console.log(salaries2017);
    console.log(data);
 
    // Append a <ul> and the salariesByTeam array (500+ <li> entries, joined into a string) to the <body> element
    $( "<ul/>", {"class": "salary-list", html: salariesByTeam.join("")
      }).appendTo( "body" );
    
  });
}); 
