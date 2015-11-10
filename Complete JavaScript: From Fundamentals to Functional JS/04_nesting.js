var box = {}

box.innerBox = {}

box.innerBox.babyBox = {}

box.innerBox['babyBox'] //{}

var bb = box.innerBox.babyBox

box.innerBox.babyBox.says = 'What\'s up!?'

console.log(bb) //{ says: 'What\'s up!?' } if this was a string it wouldn't have changed, but this is being passed around by reference
// just true for objects, arrays and functions (objects not primatives)

box = {}

box.innerBox = {}
box.innerBox.full = true
box.innerBox.height = 10

box.otherBox = {}
var innerBox2 = 'otherBox'

box[innerBox2].full = false
console.log(box.otherBox)