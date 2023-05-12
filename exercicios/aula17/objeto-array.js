const inventory = [
  { name: 'apples', quantity: 2 }, //{ } Declara um Objeto
  { name: 'bananas', quantity: 0 },//1º Índice vai ser name, "não vai ser 0". O atributo vai ser apples
  { name: 'cerejas', quantity: 5 }
];

function isCherries(fruit) {
  return fruit.name === 'cerejas';
}

console.log(inventory.find(isCherries));
// { name: 'cerejas', quantity: 5 }