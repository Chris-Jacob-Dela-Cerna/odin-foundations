function camelize(str) {
  return str
    .split("-")
    .map((word, index) => index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1))
    .join("");
}
console.log(camelize("john-doe"));
console.log(camelize("nine-teen"));
console.log(camelize("angry-birds"));


function filterRange(arr, a, b = a) {
  return arr.filter((number) => number >= a && number <= b);
}
console.log(filterRange([4, 5, 7, 9], 4, 6));
console.log(filterRange([21, 34, 25, 16], 18, 30));
console.log(filterRange([91, 83, 87, 95], 85, 100));


function filterRangeInPlace(arr, a, b = a) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || b < arr[i]) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr1 = [4, 5, 7, 9],
    arr2 = [21, 34, 25, 16],
    arr3 = [91, 83, 87, 95];
filterRangeInPlace(arr1, 4, 6)
filterRangeInPlace(arr2, 18, 30)
filterRangeInPlace(arr3, 85, 100)
console.log(arr1)
console.log(arr2)
console.log(arr3)


console.log(arr1.sort().reverse())
console.log(arr2.sort().reverse())
console.log(arr3.sort().reverse())