// Write a function arrayToList that builds up a list structure
// like the one shown when given [1, 2, 3] as argument. Also write
// a listToArray function that produces an array from a list. Then
// add a helper function prepend, which takes an element and a list
// and creates a new list that adds the element to the front of the
// input list, and nth, which takes a list and a number and returns
// the element at the given position in the list (with zero referring
// to the first element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// loop version
function loopArrayToList(array) {
  let obj = {"value": array.pop(), "rest": null};
  while (array.length > 0) {
    value = array.pop();
    obj = {"value": value, "rest": obj};
  }
  return obj;
}

// recursive version
function arrayToList(array, rest=null) {
  if (array.length > 0) {
    value = array.pop();
    return arrayToList(array, {"value": value, "rest": rest});
  } else {
    return rest;
  }
}

function listToArray(list, values=[]) {
  if (list === null) {
    return values;
  } else {
    values.push(list.value);
    return listToArray(list.rest, values);
  }
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, index, currentIndex=0) {
  if (currentIndex === index) {
    return list.value;
  } else {
    return nth(list.rest, index, currentIndex + 1);
  }
}
