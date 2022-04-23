`  Chaining คือการเอา method() arr มาเขียนเรียงต่อกัน 
เช่น .filter .map .reduce `

let coins = [
  { name: "btc", price: 40000 },
  { name: "eth", price: 3000 },
  { name: "nym", price: 30 },
  { name: "glmr", price: 100 },
  { name: "xlm", price: 300 },
  { name: "xmr", price: 1000 },
];
let step1 = coins.map((obj) => {
  return (obj.name.toUpperCase())
});
console.log(step1);
//-------------------------------//

let animals = ["cat","dog","fish"];
function studlyCaps(words, word) {
  return words + word;
}
function exactlyThree(word) {
  return (word.length === 3);
}
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
const threeLetterAnimals = animals
  .filter(exactlyThree)
  .map(capitalize)
  .reduce(studlyCaps);
console.log(threeLetterAnimals); // "CatDog"



