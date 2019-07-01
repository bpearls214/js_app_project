var pokemonRepository = (function () {
  var repository = [
    // pokemon object [name, type, height]
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

  function addListItem(pokemonObject) {
		var $newListItem = document.createElement('li');
		var $newButton = document.createElement('button');
		var $pokeList = document.querySelector('.pokemon-list')

		$newListItem.setAttribute('class', 'pokemon-list__item');
		$newButton.setAttribute('class', 'list-item__button');
		$newListItem.appendChild($newButton);
		$pokeList.appendChild($newListItem);
		$newButton.innerText = pokemonObject.name;
		$newButton.addEventListener('click', function(event) {
			showDetails(event.target.innerText);
	   });
   }

   function showDetails(pokemonName) {
     console.log(pokemonName);
   }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
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

allPokemon.forEach(function (pokemon) {
 pokemonRepository.addListItem(pokemon);
});

const perfectSize = allPokemon.filter(e => e.height === 4);

console.log(perfectSize); //expected output Loch Nessie and Squidward

// added class list toggle out of curiosity
var $button = document.querySelector('.pokemon-list');

$button.addEventListener('click', function (event) {
  var $target = event.target;
  $target.classList.toggle('list-item__buttonClicked');
  $target.classList.toggle('.list-item__button');
});
