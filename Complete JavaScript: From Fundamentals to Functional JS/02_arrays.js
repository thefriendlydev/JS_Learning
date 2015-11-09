/* Iteration */
var box = []

box['size'] = 9
box['0'] = 'meow'
box.push('Whoohoo!')

console.log(box)
console.log(box.length)

for (var i = 0; i < box.length; i++) {
  console.log(box[i])
}

// Would you ever have a different property on an array like box['size'] = 9?

/* Native Properties */
box = []

box['0'] = 'meow'
box[3] = {'babyBox': true}

box['length'] // 4 length is keep track of the last index
box[box.length - 1] // { babyBox: true }


