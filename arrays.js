var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(arrray, element) {
  array.unshift(element);
  return array;
}