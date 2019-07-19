var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function loadList() {
   return fetch(apiUrl).then(function (response) {
     return response.json();
   }).then(function (json) {
     json.results.forEach(function (item) {
       var pokemon = {
         name: item.name,
         detailsUrl: item.url
       };
       add(pokemon);
     });
   }).catch(function (e) {
     console.error(e);
   })
 }

 function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = Object.keys(details.types);
  }).catch(function (e) {
    console.error(e);
  });
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
			showDetails(pokemonObject);
	   });
   }

  function add(pokemon){
       repository.push(pokemon);
    }

  function getAll() {
     return repository;
   }

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function() {
    showModal(item);
  });
}

function showModal(item){
  var $modalContainer = document.querySelector('#modal-container');

    $modalContainer.innerHTML = ''; //clears existing html content

    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Modal content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    var titleElement = document.createElement('h1');
    titleElement.innerText = item.name;

    var imageElement = document.createElement('img');
    imageElement.classList.add('modal-img');
    imageElement.setAttribute("src", item.imageUrl);

    var heightElement = document.createElement('p');
    heightElement.innerText = 'Height: ' + item.height + ' inches';

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    $modalContainer.appendChild(modal);

    $modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
    }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.addEventListener('click', (e) => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
  };

} ) ();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
