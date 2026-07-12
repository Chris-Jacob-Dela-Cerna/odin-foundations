

function camelize(str) {
  return str.split("-")
            .map((word, index) => index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1))
            .join("")
}

console.log(camelize("john-doe"))
console.log(camelize("nine-teen"))
console.log(camelize("angry-birds"))