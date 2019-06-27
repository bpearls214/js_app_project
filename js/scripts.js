var pokemonRepository = (function () {
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

      {name: 'Bigfoot',
      height: 11,
      type: ['smell',' strength']},

      {name: 'Loch Nessie',
      height: 4,
      type: ['water',' stealth']},
    ];

  function add(pokemon) {
    if (typeof(pokemon) ==='object'){
      repository.push(pokemon);
    } else {
      console.log('Please add an object');
    }
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll,
  }

})();

var allPokemon = pokemonRepository.getAll();

function getHeightDescription(property) {
  return property.height + ' Feet. ';
  }

function getTypeDescription(property) {
  return ' [Type: ' + property.type + ']';
}

function getName(property) {
  return property.name + ': ';
}

function displayPokemonStats(property) {
  return getName(property) + getHeightDescription(property) + getTypeDescription(property);
}

allPokemon.forEach(function(pokemon) {
  document.write(displayPokemonStats(pokemon) + '<br>');
});

const perfectSize = allPokemon.filter(e => e.height === 4);

console.log(perfectSize); //expected output Loch Nessie and Squidward
