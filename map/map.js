const studentDetails = [
  { id: 1, name: "vikash", age: 11, className: 5, sectionName: "A" },
  { id: 2, name: "Ashish", age: 12, className: 3, sectionName: "B" },
  { id: 3, name: "Abhas", age: 1, className: 3, sectionName: "C" },
  { id: 4, name: "Rohit", age: 10, className: 4, sectionName: "D" },
  { id: 5, name: "Rajesh", age: 10, className: 2, sectionName: "E" },
  { id: 6, name: "Umesh", age: 13, className: 1, sectionName: "F" },
];

// const myArray = [1, 2, 3, 4, 5, 4];
// const newArray = new Set(myArray);

// console.log(`myArray: ${myArray} and newArray: ${newArray}`);

// let myMap = new Map();

// studentDetails.forEach(item => {
//   myMap.set(item.id, item.className);
// });

//console.log(myMap);

// for (var keys of myMap.keys()) {
//   console.log(`keys value are: ${keys}`);
// }

// for (var values of myMap.values()) {
//   console.log(`values value are: ${values}`);
// }

// console.log(myMap.get("2"));
// myMap.set("8", "eight");

// for (let [key, value] of myMap) {
//   console.log(`keys: ${key} and values: ${value}`);
// }

//myMap.forEach(keys => console.log(`keys are: ${keys.keys()}`));

const myMap = new Map([
  [{}, "a"],
  [{}, "b"],
]);

myMap.set({}, "c");

console.log(myMap);
myMap.delete("{}");

console.log(myMap);
