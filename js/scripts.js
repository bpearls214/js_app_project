var repository = [
  // pokemon objects
    {name: 'Vulpix',
    height: 3,
    type: ['flamethrower',' speed']},

    {name: 'Pikachu',
    height: 2,
    type: ['lightning',' humor']},

    {name: 'Squidward',
    height: 4,
    type: ['water',' strength']},
  ];

  var repository2 = [
    // pokemon objects
      {name: 'Bigfoot',
      height: 11,
      type: ['smell',' strength']},

      {name: 'Loch Nessie',
      height: 4,
      type: ['water',' stealth']},
    ];

  /* ---old 'for' function, excluded to include for each instead 6/14/19 --
 function printArrayDetails(pokemonList) {
  for (var i = 0; i < pokemonList.length; i++) {
    document.write('<br/>', pokemonList[i].name);
    document.write(" (" + pokemonList[i].height + ' feet, Type: ' + pokemonList[i].type + ')');
    if (pokemonList[i].height === 4) {
      document.write('....yikes, that\'s big!')
    }
  }
}

// Calling printArrayDetails function twice
printArrayDetails(repository);
printArrayDetails(repository2);
*/
function pokemonList (property) {
  document.write(property.name + ': ' + property.height + ' feet </br>')
  }

repository.forEach(pokemonList);
repository2.forEach(pokemonList);
