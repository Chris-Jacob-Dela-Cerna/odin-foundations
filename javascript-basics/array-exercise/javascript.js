function camelize(str) {
  return str.split("-")
            .map((word, index) => index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1))
            .join("")
}
console.log(camelize("john-doe"))
console.log(camelize("nine-teen"))
console.log(camelize("angry-birds"))


function filterRange(arr, a, b = a) {
  return arr.filter((number) => number >= a && number <= b)
}

console.log(filterRange([4, 5, 7, 9], 4, 6))
console.log(filterRange([21, 34, 25, 16], 18, 30))
console.log(filterRange([91, 83, 87, 95], 85, 100))