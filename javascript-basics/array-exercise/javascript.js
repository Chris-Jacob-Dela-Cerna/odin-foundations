

function camelize(str) {
  let camelWord = str.split("-")
  firstWord = camelWord.shift()
  camelWord = camelWord.map((word) => word[0].toUpperCase() + word.slice(1))
  camelWord.unshift(firstWord)
  return camelWord.join("")
}

console.log(camelize("john-doe"))
console.log(camelize("nine-teen"))
console.log(camelize("angry-birds"))