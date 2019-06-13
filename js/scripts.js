var repository = [
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

for (var i = 0; i < repository.length; i++) {
  document.write('<br/>', repository[i].name);
  document.write(" (" + repository[i].height + ' feet, Type: ' + repository[i].type + ')');
  if (repository[i].height === 4) {
    document.write('....yikes, that\'s big!')
  }
}
