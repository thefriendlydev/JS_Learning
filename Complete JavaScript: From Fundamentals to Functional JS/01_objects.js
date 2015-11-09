/*
Objects:
  - Data structure, key value pairs
  - Object literal var box = {};
  - Dot notation box.material = 'cardboard' (var box = {'material': 'cardboard'})
  - Whenever you you use a '.' whatever to the left is an object unless an error
  -
*/

/*  LECTURE 2 - Property Access */
var box = {}
box.material = 'cardboard'

var cb = box.material
cb // 'cardboard'

box.material = 'titanium'
cb // 'cardboard'

// objects, functions and arrays this is opposite if stored by reference

box.size // undefined

/* LECTURE 3 - Bracket Notation */
box['material'] = 'cardboard'
box.material // 'cardboard'
box['material'] // 'cardboard'
cb = box['material'] // 'cardboard'

var key = 'material'
console.log(box[key] + '\n') // 'carboard'

var func = function () {
  return 'material'
}
console.log(box[func()] + '\n') // 'cardboard'

// bracket notation can handle expressions

/* LECTURE 4 - Object Best Practices */
// Don't use dot notation with variables
// Weird characters and numbers don't work with dot notation
// If you have to use use bracket box['^&*']
// Bracket notation will always stringify expression

/* LECTURE 5 - Storing Data and Object-Literal Notation */
box['size'] = {
  'height': 2,
  'width': 80
}
box.area = function () {
  return box.size.height * box.size.width
}
console.log(box.area() + '\n') // 160
// method is a function that's a property of an object

// bracket vs. dots always dots unless need to evaluate and expression or weird character

/* LECTURE 6 - Iteration */
box[0] = 'meow'

for (var key in box) {
  console.log(key) // 0, material, size, area
}
console.log('')
for (var value in box) {
  console.log(box[value]) // returns values dot notation won't work because value is a variable
}
// use var to keep it local

/* LECTURE 7 - Objects Exercise */
