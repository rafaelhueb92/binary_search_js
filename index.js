const a = [3, 4, 5, 7, 9, 10, 12, 45, 1, 4, 7, 8];

function search(array, element) {
  if (array.length > 0) {
    if (array[0] == element || array[array.length - 1] == element) return true;
    else {
      array.splice(0, 1);
      array.splice(array.length - 1);
      return search(array, element);
    }
  } else return false;
}

console.log("Search", search(a,3));
